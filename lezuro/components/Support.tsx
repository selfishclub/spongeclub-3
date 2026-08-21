import Reveal from './Reveal';
import styles from './Support.module.css';

const ITEMS = [
  {
    title: '전국 규모 대회 운영',
    body: '매장 단위 소규모 이벤트가 아닙니다. 회당 1,000여 명이 참가하는 전국대회를 본사가 직접 엽니다. 지자체 협력 대회도 운영합니다.',
  },
  {
    title: '마케팅 대행',
    body: '유튜브 레슨 콘텐츠와 SNS를 본사가 운영합니다. 점주가 따로 광고를 만들 필요가 없습니다.',
  },
  {
    title: '주 단위 업데이트',
    body: '분기·반기 단위로 느리게 패치하는 타사와 다릅니다. 점주와 이용자 피드백을 매주 반영합니다.',
  },
  {
    title: '권역별 지사 관리',
    body: '7개 권역에 지사 관리 체계가 가동 중입니다. 문제가 생기면 가까운 곳에서 대응합니다.',
  },
];

const PRESS = [
  "'제1회 레저로 전국 스크린파크골프대회' 성료 — 지디코노미",
  '레저로 파크골프, 부천시와 전국 스크린파크골프대회 성료',
  "레저로, 총상금 1억원 규모 '제2회 전국 스크린 파크골프 대회' 결승전 개최",
];

export default function Support() {
  return (
    <section id="support">
      <div className="container">
        <Reveal>
          <h2 className="section-title">점주는 매장만 보시면 됩니다</h2>
        </Reveal>

        <ul className={styles.grid}>
          {ITEMS.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 100}>
              <div className={`card ${styles.card}`}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <div className={styles.press}>
            <span className={styles.pressLabel}>언론 보도</span>
            <ul className={styles.pressList}>
              {PRESS.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
