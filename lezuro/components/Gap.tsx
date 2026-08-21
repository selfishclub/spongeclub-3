import Reveal from './Reveal';
import styles from './Gap.module.css';

type Bar = {
  name: string;
  value: number;
  display: string;
  highlight?: boolean;
  faded?: boolean;
};

const BARS: Bar[] = [
  { name: '레저로', value: 20000, display: '단독 플랫폼 20,000+', highlight: true },
  { name: 'P 업체', value: 1000, display: '1,000' },
  { name: 'B 업체', value: 500, display: '500' },
  { name: 'O 업체', value: 100, display: '100' },
  { name: 'G 업체', value: 10000, display: '골프 통합 10,000', faded: true },
];

const MAX = Math.max(...BARS.map((b) => b.value));

export default function Gap() {
  return (
    <section id="gap">
      <div className="container">
        <Reveal>
          <h2 className="section-title">숫자가 증명하는 명백한 차이</h2>
        </Reveal>

        <Reveal delay={80}>
          <ul className={styles.chart}>
            {BARS.map((bar) => {
              // 값에 비례한 길이. 아주 작은 값도 라벨이 보이도록 최소 폭을 둡니다.
              const pct = Math.max((bar.value / MAX) * 100, 4);
              return (
                <li key={bar.name} className={styles.row}>
                  <span className={styles.name}>{bar.name}</span>
                  <span className={styles.track}>
                    <span
                      className={[
                        styles.bar,
                        bar.highlight ? styles.highlight : '',
                        bar.faded ? styles.faded : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                      style={{ ['--w' as string]: `${pct}%` }}
                    />
                    <span
                      className={`${styles.value} ${bar.highlight ? styles.valueGold : ''}`}
                    >
                      {bar.display}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={140}>
          <p className={styles.footnote}>
            기존 골프 플랫폼을 공유하는 허수가 아닌, 레저로는 단독 파크골프 이용자
            수치입니다.
          </p>
          <p className={styles.asof}>2026.01 기준</p>
        </Reveal>
      </div>
    </section>
  );
}
