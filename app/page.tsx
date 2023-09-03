import { CountdownSection } from '@components/countdown-section';
import { Footer } from '@components/footer';
import { GiftsSection } from '@components/gifts-section';
import { MainSection } from '@components/main-section';
import { RSVPSection } from '@components/rsvp-section';
import { WeddingInfoSection } from '@components/wedding-info-section';

export default function Home() {
  return (
    <main className=''>
      <MainSection />
      {/* <CoupleInfoSection /> */}
      <CountdownSection />
      <WeddingInfoSection />
      <RSVPSection />
      <GiftsSection />
      <Footer />
    </main>
  );
}
