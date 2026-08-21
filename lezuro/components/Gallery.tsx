import Reveal from './Reveal';
import { stores } from '@/lib/stores';
import styles from './Gallery.module.css';

export default function Gallery() {
  return (
    <section id="stores">
      <div className="container">
        <Reveal>
          <h2 className="section-title">전국 어디서나, 가장 가까운 즐거움</h2>
          <p className="section-sub">
            서울·경기·강원·충청·전라·경상·제주 진출 완료
          </p>
        </Reveal>
      </div>

      {/* 가로 스크롤은 이 영역 안에서만 일어납니다. */}
      <Reveal delay={80}>
        <ul className={styles.rail}>
          {stores.map((store) => (
            <li key={store.name} className={styles.card}>
              <div className={styles.thumb}>
                {store.image ? (
                  // 사진이 준비된 매장
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={`/stores/${store.image}`}
                    alt={`${store.name} 매장 사진`}
                    loading="lazy"
                    width={280}
                    height={200}
                  />
                ) : (
                  // 사진이 아직 없는 자리 — 회색 배경 + 매장명
                  <span className={styles.placeholder} aria-hidden="true">
                    {store.name}
                  </span>
                )}
              </div>
              <div className={styles.meta}>
                <strong className={styles.name}>{store.name}</strong>
                <span className={styles.region}>{store.region}</span>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
