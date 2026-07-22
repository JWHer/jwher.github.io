import { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useHistory } from '@docusaurus/router';
import { useWordGame } from '@site/src/hooks/useWordGame';
import GuessForm from '@site/src/components/WordQuestions/GuessForm';
import GuessTable from '@site/src/components/WordQuestions/GuessTable';
import ResultBanner from '@site/src/components/WordQuestions/ResultBanner';
import WordGraph from '@site/src/components/WordQuestions/WordGraph';
import styles from './word-questions.module.scss';

const SERVICE_NAME = '뜻밖에';

function formatDate(dateStr: string): string {
  const [y, m, d] = dateStr.split('-');
  return `${y}년 ${m}월 ${d}일`;
}

function formatElapsed(ms: number): string {
  const total = Math.floor(ms / 1000);
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const parts: string[] = [];
  if (h) parts.push(`${h}시간`);
  if (h || m) parts.push(`${m}분`);
  parts.push(`${s}초`);
  return parts.join('');
}

// Native share sheet only on touch devices; desktop falls back to clipboard copy.
function prefersNativeShare(): boolean {
  return (
    typeof navigator !== 'undefined' &&
    typeof navigator.share === 'function' &&
    (navigator.maxTouchPoints > 0 || window.matchMedia('(pointer: coarse)').matches)
  );
}

export default function WordQuestions() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const history = useHistory();
  const game = useWordGame(mounted);
  const ogImage = useBaseUrl('/img/art/wq-og-light.png', { absolute: true });

  const [message, setMessage] = useState<string | null>(null);
  const [highlightWord, setHighlightWord] = useState<string | null>(null);
  const [highlightNonce, setHighlightNonce] = useState(0);
  const [confirmGiveUp, setConfirmGiveUp] = useState(false);
  const [shareMsg, setShareMsg] = useState<string | null>(null);

  const handleGuess = (word: string) => {
    const outcome = game.submitGuess(word);
    setConfirmGiveUp(false);
    switch (outcome.type) {
      case 'unknown':
        setMessage('사전에 없는 단어입니다.');
        break;
      case 'duplicate':
        setMessage('이미 추측한 단어입니다.');
        setHighlightWord(game.guesses[outcome.index].word);
        setHighlightNonce((n) => n + 1);
        break;
      default:
        setMessage(null);
        setHighlightWord(null);
    }
  };

  const handleGiveUp = () => {
    if (!confirmGiveUp) {
      setConfirmGiveUp(true);
      return;
    }
    setConfirmGiveUp(false);
    game.giveUp();
  };

  const handleRandomGame = () => {
    const id = game.randomGameId();
    if (id !== null) history.push(`?word=${id}`);
  };

  // Always share the index-based link so the recipient gets the same word,
  // regardless of the day. Solved games share the result; otherwise an invite.
  const handleShare = async () => {
    if (game.poolIdx === null) return;
    const idx = game.poolIdx;
    const url = `${window.location.origin}/art/word-questions?word=${idx}`;
    let text: string;
    if (game.solved) {
      const timeLine =
        game.elapsedMs !== null ? `\n소요 시간: ${formatElapsed(game.elapsedMs)}` : '';
      text = `${idx}번째 〈${SERVICE_NAME}〉를 풀었습니다!\n추측 횟수: ${game.guesses.length}${timeLine}`;
    } else {
      text = `${idx}번째 〈${SERVICE_NAME}〉 단어를 같이 찾아요!`;
    }

    if (prefersNativeShare()) {
      try {
        await navigator.share({ text, url });
        return;
      } catch {
        return; // user dismissed the share sheet
      }
    }

    try {
      await navigator.clipboard.writeText(`${text}\n${url}`);
      setShareMsg('클립보드에 복사되었습니다.');
    } catch {
      setShareMsg('복사에 실패했습니다.');
    }
    setTimeout(() => setShareMsg(null), 2000);
  };

  return (
    <Layout
      title="뜻밖에"
      description="정답 단어와 의미 유사도로 뜻밖의 단어를 추측하는 게임"
    >
      <Head>
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.page}>
        {mounted && (
          <>
            <section className={styles.game}>
              <header className={styles.desc}>
                <h1 className={styles.title}>뜻밖에</h1>
                {game.status === 'ready' && (
                  <>
                    <p>
                      {game.isCustom
                        ? `#${game.poolIdx} 정답 단어를 맞혀보세요.`
                        : `${formatDate(game.dateStr)} 정답 단어를 맞혀보세요.`}
                    </p>
                    {game.hint && (
                      <p className={styles.hint}>
                        가장 가까운 단어의 유사도는 {(game.hint.sim1 * 100).toFixed(2)}, 10번째로
                        가까운 단어는 {(game.hint.sim10 * 100).toFixed(2)}, 1,000번째로 가까운 단어는{' '}
                        {(game.hint.sim1000 * 100).toFixed(2)}입니다.
                      </p>
                    )}
                    {game.invalidCustom && (
                      <p className={styles.notice}>잘못된 문제 번호라서 오늘의 문제를 보여드려요.</p>
                    )}
                  </>
                )}
              </header>

              {game.status === 'loading' && (
                <div className={styles.loading} role="status">
                  <p>단어 데이터를 내려받는 중… {game.progress}%</p>
                  <div className={styles.progressTrack}>
                    <div className={styles.progressFill} style={{ width: `${game.progress}%` }} />
                  </div>
                  <p className={styles.loadingNote}>처음 한 번만 내려받아요. 다음부터는 바로 시작합니다.</p>
                </div>
              )}

              {game.status === 'error' && (
                <p className={styles.error}>
                  단어 데이터를 불러오지 못했습니다. 네트워크 연결을 확인하고 새로고침해 주세요.
                </p>
              )}

              {game.status === 'ready' && (
                <>
                  <ResultBanner
                    solved={game.solved}
                    gaveUp={game.gaveUp}
                    answer={game.answer}
                    guessCount={game.guesses.length}
                  />

                  {game.stale && (
                    <p className={styles.notice}>
                      날짜가 바뀌었어요.{' '}
                      <button className={styles.linkBtn} onClick={() => window.location.reload()}>
                        새로고침
                      </button>
                      하면 오늘의 단어로 시작합니다.
                    </p>
                  )}

                  <GuessForm disabled={game.locked} onSubmit={handleGuess} />
                  {message && <p className={styles.message}>{message}</p>}

                  <div className={styles.tableWrap}>
                    <GuessTable
                      guesses={game.guesses}
                      barRange={game.barRange}
                      highlightWord={highlightWord}
                      highlightNonce={highlightNonce}
                    />
                  </div>

                  <div className={styles.actions}>
                    <button className={styles.share} onClick={handleShare}>
                      {game.solved ? '결과 공유' : '공유하기'}
                    </button>
                    {!game.locked && (
                      <button className={styles.giveUp} onClick={handleGiveUp}>
                        {confirmGiveUp ? '정말 포기할까요?' : '포기하기'}
                      </button>
                    )}
                    <button className={styles.another} onClick={handleRandomGame}>
                      다른 문제 풀기
                    </button>
                    {shareMsg && <span className={styles.shareMsg}>{shareMsg}</span>}
                  </div>
                </>
              )}
            </section>

            {(game.solved || game.gaveUp) && game.graphNeighbors.length > 0 && (
              <section className={styles.graphSection}>
                <h2 className={styles.graphTitle}>
                  <strong>{game.answer}</strong> 주변의 단어들
                </h2>
                <WordGraph centerWord={game.answer ?? ''} neighbors={game.graphNeighbors} />
              </section>
            )}

            {/* `markdown` pulls the site's global prose typography rules */}
            <section className={`${styles.about} markdown`}>
              <h2>게임 설명</h2>
              <p>
                정답 단어와 <strong>의미가 가까운</strong> 단어를 찾아가는 게임입니다. 유사도는
                철자가 아니라 단어가 실제 문장에서 쓰이는 <strong>문맥의 유사성</strong>으로,
                한국어 웹 문서로 학습한{' '}
                <a
                  href="https://fasttext.cc/docs/en/crawl-vectors.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FastText 한국어 word2vec
                </a>{' '}
                벡터의 코사인 유사도(×100)입니다.
              </p>
              <ul>
                <li>
                  추측에는 명사뿐 아니라 동사, 형용사, 조사가 붙은 형태까지 자주 쓰이는 한국어
                  단어 90,000개를 쓸 수 있습니다.
                </li>
                <li>
                  정답은 그중 자주 쓰이는 <strong>일반명사 약 6,000개</strong>에서 뽑히며, 매일
                  자정(한국 시각)에 바뀝니다.
                </li>
                <li>
                  유사도 순위는 정답과 가까운 순서입니다. 1,000위 안에 들면 순위가 표시되고,
                  막대는 1,000위–2위 유사도 구간에서의 위치를 나타냅니다.
                </li>
                <li>
                  <strong>다른 문제 풀기</strong>를 누르면 무작위 문제가 나오고, 주소의{' '}
                  <code>?word=번호</code>를 공유하면 같은 문제를 함께 풀 수 있습니다.
                </li>
                <li>추측 기록은 이 브라우저에만 저장됩니다.</li>
              </ul>
              <p className={styles.credit}>
                {'> '}
                <a href="https://semantle.com/" target="_blank" rel="noopener noreferrer">
                  Semantle
                </a>
                에서 영감을 받았습니다.
              </p>
            </section>
          </>
        )}
      </div>
    </Layout>
  );
}
