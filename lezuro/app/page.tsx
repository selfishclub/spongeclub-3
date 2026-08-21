import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import WhyNow from '@/components/WhyNow';
import Gap from '@/components/Gap';
import Gallery from '@/components/Gallery';
import Tech from '@/components/Tech';
import Support from '@/components/Support';
import Compare from '@/components/Compare';
import Inquiry from '@/components/Inquiry';
import Footer from '@/components/Footer';

/**
 * 화면은 한 장입니다. 위에서 아래로 스크롤하며, 라우팅은 만들지 않습니다.
 * 폼을 제출하면 폼이 있던 자리가 완료 메시지로 바뀝니다.
 */
export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />       {/* 1. 히어로 */}
        <Stats />      {/* 2. 숫자 3개 */}
        <WhyNow />     {/* 3. 왜 지금인가 */}
        <Gap />        {/* 4. 압도적 격차 */}
        <Gallery />    {/* 5. 매장 갤러리 */}
        <Tech />       {/* 6. 기술 */}
        <Support />    {/* 7. 본사 지원 */}
        <Compare />    {/* 8. 타사 비교표 */}
        <Inquiry />    {/* 9. 상담 폼 */}
      </main>
      <Footer />       {/* 10. 푸터 */}
    </>
  );
}
