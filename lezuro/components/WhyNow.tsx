import Reveal from './Reveal';
import styles from './WhyNow.module.css';

const ITEMS = [
  {
    title: '이미 사람이 있는 시장',
    body: '파크골프는 시니어 세대에서 가장 빠르게 퍼지고 있는 스포츠입니다. 레저로 플랫폼에만 20,000명이 넘는 이용자가 있습니다.',
  },
  {
    title: '날씨에 매출이 흔들리지 않습니다',
    body: '실내 스크린이라 계절과 날씨의 영향을 받지 않습니다. 야외 파크골프장이 문을 닫는 겨울에도 운영됩니다.',
  },
  {
    title: '혼자 시작하지 않습니다',
    body: '본사가 전국대회를 열고, 유튜브·SNS로 손님을 모으고, 매주 시스템을 업데이트합니다. 점주는 매장 운영에만 집중합니다.',
  },
];

export default function WhyNow() {
  return (
    <section id="why">
      <div className="container">
        <Reveal>
          <h2 className="section-title">지금 시작해야 하는 이유</h2>
        </Reveal>

        <ul className={styles.grid}>
          {ITEMS.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 120}>
              <div className={`card ${styles.card}`}>
                <span className={styles.num} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
