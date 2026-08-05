export interface ArcadeGame {
  rom: string;        // static/arcade/roms/<rom>, 썸네일은 static/arcade/thumbs/<rom-.zip>.webp
  title: string;
  maker: string;
  /** 제작사 폐업 연도. 현존이면 -1. (현재 연도와 비교해 폐업 여부 판별) */
  closedYear: number;
  genre: string;
  year: string;
  blurb: string;      // 기본 소개 (카드 앞면)
  tips: string[];     // 플레이 팁 3가지 — 게임 페이지에서 표시
}

/** 폐업 여부: closedYear 가 -1 이 아니고 현재 연도 이하이면 폐업. */
export function isDefunct(g: ArcadeGame): boolean {
  return g.closedYear !== -1 && g.closedYear <= new Date().getFullYear();
}

// 유명 아케이드 12선.
export const ARCADE_GAMES: ArcadeGame[] = [
  {
    rom: 'pbobble2.zip', title: 'Puzzle Bobble 2', maker: 'Taito', closedYear: -1,
    genre: '퍼즐 · 색맞추기 슈터', year: '1995',
    blurb: '같은 색 버블 3개 이상을 맞춰 터뜨리는 대전 퍼즐입니다. 버블보블의 친구들이 등장합니다.',
    tips: [
      '같은 색 3개 이상을 붙이면 그 아래 매달린 버블까지 한꺼번에 떨어져요!',
      '벽에 튕기는 뱅크샷으로 구석과 틈새의 버블을 노려 보세요.',
      '큰 덩어리는 받침 색을 맞춰 위쪽을 통째로 떨어뜨려 보세요.',
    ],
  },
  {
    rom: 'puyopuy2.zip', title: 'Puyo Puyo 2', maker: 'Compile', closedYear: 2003,
    genre: '퍼즐 · 뿌요뿌요', year: '1994',
    blurb: '같은 색 뿌요 4개를 붙여 없애는 낙하 퍼즐입니다. 연쇄(체인)의 원조입니다.',
    tips: [
      '같은 색 4개로 없애되, 계단·샌드위치 모양으로 연쇄를 미리 설계해 보세요!',
      '방해뿌요는 내 뿌요가 놓인 뒤에 떨어지니, 그 틈에 배치를 정하세요.',
      '큰 연쇄로 방해뿌요를 상쇄·반격하고, 전멸(올클리어) 시 30개를 더 보내 보세요!',
    ],
  },
  {
    rom: 'sf2.zip', title: 'Street Fighter II', maker: 'Capcom', closedYear: -1,
    genre: '대전격투의 전설', year: '1991',
    blurb: '대전격투 장르를 대중화한 전설적인 게임입니다.',
    tips: [
      '파동권 ↓↘→+P, 승룡권 →↓↘+P, 회오리차기 ↓↙←+K 를 먼저 익혀 보세요!',
      '방어는 레버를 뒤로 당기고, 하단 공격은 앉아서 막으세요.',
      '상대가 점프하면 착지 타이밍에 승룡권으로 대공 요격해 보세요!',
    ],
  },
  {
    rom: '1943.zip', title: '1943: The Battle of Midway', maker: 'Capcom', closedYear: -1,
    genre: '종스크롤 슈팅', year: '1987',
    blurb: '태평양 전쟁을 배경으로 한 종스크롤 슈팅입니다.',
    tips: [
      '파워업(P)으로 샷을 강화하고, 프로펠러 아이템으로 에너지를 완전 회복하세요!',
      '에너지는 피격과 특수공격(메가크래시: 번개·회오리·해일)에 소모되니 잘 관리하세요.',
      '공중회전(롤)으로 탄을 피하고, 스테이지 시작 전 커맨드를 눌러 보너스 무장을 챙겨 보세요!',
    ],
  },
  {
    rom: 'mk2.zip', title: 'Mortal Kombat II', maker: 'Midway', closedYear: 2009,
    genre: '대전격투 · 고어', year: '1993',
    blurb: '치명기(페이탈리티)로 화제를 모은 대전격투입니다.',
    tips: [
      '방어는 뒤가 아니라 전용 블록 버튼으로, 움직이면서 막아 보세요!',
      '상단과 하단을 섞어 치고, 최대 거리에서 다리 걸기로 견제하세요.',
      '라운드를 이기면 "FINISH HIM"에서 캐릭터별 커맨드로 페이탈리티를 넣어 보세요!',
    ],
  },
  {
    rom: 'gauntlet.zip', title: 'Gauntlet', maker: 'Atari Games', closedYear: 2003,
    genre: '최대 4인 협동 던전', year: '1985',
    blurb: '전사·마법사·엘프·발키리로 던전을 탈출하는 협동 액션입니다.',
    tips: [
      '전사는 근접, 발키리는 방어, 마법사는 마법, 엘프는 속도가 강하니 골라 보세요!',
      '체력이 시간에 따라 줄어드니, 음식을 먹으며 출구를 서둘러 찾으세요.',
      '음식(체력)은 쏘면 사라져요. 몬스터 생성기를 먼저 부숴 보세요!',
    ],
  },
  {
    rom: 'snowbros.zip', title: 'Snow Bros.', maker: 'Toaplan', closedYear: 1994,
    genre: '플랫폼 액션', year: '1990',
    blurb: '적을 눈덩이로 감싸 굴려 처치하는 아기자기한 플랫폼 액션입니다.',
    tips: [
      '눈을 뿌려 적을 눈덩이로 만든 뒤 굴려서 여러 적을 한 번에 쓸어 보세요!',
      '물약은 빨강=이동속도, 파랑=눈량, 노랑=사거리예요 (죽으면 초기화됩니다).',
      '오래 지체하면 무적 유령(펌킨헤드)이 나오니 빠르게 클리어하세요!',
    ],
  },
  {
    rom: 'ddragon2.zip', title: 'Double Dragon II', maker: 'Technos', closedYear: 1996,
    genre: '벨트스크롤 액션', year: '1988',
    blurb: '벨트스크롤 액션의 원조, 더블 드래곤의 속편입니다.',
    tips: [
      '팔꿈치·무릎·뒤돌려차기 같은 근접기가 주먹보다 강하니 적극 써 보세요!',
      '앞뒤로 협공당하기 쉬우니, 뒤차기로 배후를 바로 대응하세요.',
      '떨어진 무기(칼·채찍·상자)를 주워 활용해 보세요!',
    ],
  },
  {
    rom: 'btime.zip', title: 'Burger Time', maker: 'Data East', closedYear: 2003,
    genre: '고전 아케이드', year: '1982',
    blurb: '재료를 밟아 떨어뜨려 햄버거를 완성하는 고전 명작입니다.',
    tips: [
      '재료를 끝까지 밟아 떨어뜨리면, 위 재료가 아래를 밀어 연쇄로 완성돼요!',
      '후추는 바로 앞 적만 잠깐 멈추니, 붙었을 때만 아껴 쓰세요.',
      '재료 위에 적을 올린 채 떨어뜨려 깔아뭉개 보세요 (여럿일수록 보너스!).',
    ],
  },
  {
    rom: 'dino.zip', title: 'Cadillacs & Dinosaurs', maker: 'Capcom', closedYear: -1,
    genre: '벨트스크롤 액션', year: '1993',
    blurb: '공룡이 되살아난 세계를 무대로 한 인기 벨트스크롤 액션입니다.',
    tips: [
      '총·칼·바주카 등 떨어진 무기를 주워 써 보세요!',
      '적을 잡은 뒤 던지기·메치기로 주변까지 한 번에 정리하세요.',
      '필살기(레버↕+공격)는 체력을 소모하니 포위됐을 때만 쓰세요.',
    ],
  },
  {
    rom: 'bubblem.zip', title: 'Bubble Memories', maker: 'Taito', closedYear: -1,
    genre: '플랫폼 액션', year: '1995',
    blurb: '버블보블 시리즈. 적을 버블에 가두고 터뜨리는 귀여운 플랫폼 액션입니다.',
    tips: [
      '버블로 적을 가둔 뒤 부딪쳐 터뜨리고, 여러 개를 연쇄로 터뜨려 보세요!',
      '죽지 않고 진행하면 7층·37층의 비밀방에 들어갈 수 있어요.',
      '물약 7개를 모아 무지개 물약을 완성하면 71~80층이 열립니다!',
    ],
  },
  {
    rom: 'tetrisp2.zip', title: 'Tetris Plus 2', maker: 'Jaleco', closedYear: 2000,
    genre: '퍼즐 · 테트리스', year: '1997',
    blurb: '누구나 아는 테트리스의 아케이드판입니다.',
    tips: [
      '빈틈 없이 평평하게 쌓아 줄을 지워 보세요!',
      '한쪽 열을 비워두고 4줄(테트리스)을 한 번에 지워 고득점하세요.',
      '다음 블록(NEXT)을 보고 미리 자리를 잡으세요.',
    ],
  },
];
