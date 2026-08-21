import Reveal from './Reveal';
import styles from './Compare.module.css';

const ROWS: [string, string, string][] = [
  ['개발방식', '기존 골프 서비스 소스 수정', '처음부터 파크골프 전용 개발'],
  ['업데이트', '분기·반기 단위 느린 업데이트', '주 단위 신속 패치, 피드백 즉각 반영'],
  ['코스 퀄리티', '이름·외형만 유사한 조악한 코스', '체험 + 실측 데이터로 실제와 유사하게 구현'],
  ['사용자 UI/UX', '단순하게 보기 좋고 화려하기만 한 디자인', '주 고객층인 시니어 친화 맞춤 개발'],
  ['경쟁', '단순 점수 기록', 'P-핸디 시스템으로 세분화된 등급·랭킹'],
  ['대회', '시스템화되지 않은 소규모 매장대회', '대회 시스템 지원, 지자체 협력·전국 대회 개최 경험'],
  ['재미요소', '제한적', '테마·볼꼬리 등 다양한 게임 목표, 챌린지 모드'],
  ['연습 시스템', '제한적', '퍼팅 플레이트·롱샷·타겟 등 다양한 연습 모드, 스윙 다시보기'],
  ['네트워크', '미구현 혹은 한정적', '전국 매장 실시간 네트워크 대전'],
  ['영업포인트', '단순 어필 (밝은 화면, 화려한 그래픽)', '레저로만의 기능·콘텐츠·유저친화'],
];

export default function Compare() {
  return (
    <section id="compare">
      <div className="container">
        <Reveal>
          <h2 className="section-title">타사와 비교 불가한 시장의 선두주자</h2>
        </Reveal>

        <Reveal delay={80}>
          {/*
            표만 자기 영역 안에서 가로 스크롤되게 합니다.
            tabIndex 를 주어 키보드로도 스크롤할 수 있게 합니다.
          */}
          <div
            className={styles.scroller}
            tabIndex={0}
            role="region"
            aria-label="타사 비교표 (가로로 스크롤할 수 있습니다)"
          >
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">항목</th>
                  <th scope="col">타사</th>
                  <th scope="col" className={styles.us}>
                    레저로
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map(([label, other, ours]) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    <td className={styles.other}>{other}</td>
                    <td className={styles.us}>{ours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
