import Reveal from './Reveal';
import styles from './Tech.module.css';

const ITEMS = [
  {
    title: '레저로펏 (특허)',
    body: '퍼팅 거리에 따라 실제 물리 홀컵의 위치가 움직입니다. 스크린 경사에 맞춰 타석 플레이트도 기울어집니다. 타사가 모방할 수 없는 독점 기술입니다.',
  },
  {
    title: 'P-핸디',
    body: '게임을 많이 할수록 무조건 레벨이 오르는 방식이 아닙니다. 평균 기록 기반의 자체 계산법으로 실력에 맞는 등급을 부여합니다.',
  },
  {
    title: '실시간 전국 네트워크',
    body: '150여 개 매장이 하나의 서버로 연결됩니다. 다른 매장 이용자와 실시간으로 대전하고, 상대의 공까지 내 스크린에서 확인합니다.',
  },
  {
    title: 'AI 트레이닝',
    body: 'AI 센서가 스윙 자세를 분석하고 문제점을 진단합니다. 초고속 카메라 리플레이로 임팩트 순간을 확인합니다.',
  },
  {
    title: '100여 개 코스',
    body: '전국 유명 파크골프장을 그대로 옮긴 디지털 맵과 레저로 오리지널 코스. 새 코스가 계속 추가됩니다.',
  },
];

export default function Tech() {
  return (
    <section id="tech">
      <div className="container">
        <Reveal>
          <h2 className="section-title">타사가 따라올 수 없는 것</h2>
        </Reveal>

        <ul className={styles.grid}>
          {ITEMS.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 90}>
              <div className={`card ${styles.card}`}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <p className={styles.tail}>
            주 고객층인 시니어에 맞춰 눈이 편한 색감과 직관적인 UI로 설계했습니다.
            고사양 컴퓨터가 필요 없습니다.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
