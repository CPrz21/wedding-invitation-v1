import { CountdownSection } from '@components/countdown-section';
import { CoupleInfoSection } from '@components/couple-info-section';
import { MainSection } from '@components/main-section';
import { WeddingInfoSection } from '@components/wedding-info-section';

export default function Home() {
  return (
    <main className=''>
      <MainSection />
      <CoupleInfoSection />
      <CountdownSection />
      <WeddingInfoSection />
    </main>
  );
}
