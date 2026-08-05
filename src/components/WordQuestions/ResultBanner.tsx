import styles from './ResultBanner.module.scss';

interface Props {
  solved: boolean;
  gaveUp: boolean;
  answer: string | null;
  guessCount: number;
}

export default function ResultBanner({ solved, gaveUp, answer, guessCount }: Props) {
  if (!solved && !gaveUp) return null;

  return (
    <div className={gaveUp ? `${styles.banner} ${styles.gaveUp}` : styles.banner}>
      {solved ? (
        <p>
          <strong>정답 단어를 맞혔습니다.</strong> {guessCount}번째 추측만에 정답을 맞혔네요!
        </p>
      ) : (
        <p>
          정답 단어는 <strong>{answer}</strong>입니다. 내일 다시 도전해보세요.
        </p>
      )}
    </div>
  );
}
