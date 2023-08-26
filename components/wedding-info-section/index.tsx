import { SectionTitle } from '@components/shared';

import { EventCard } from './event-card';

export const WeddingInfoSection = () => {
  return (
    <section className='container mx-auto section-container'>
      <SectionTitle text='Wedding Events' />
      <EventCard
        backgroundImageUrl='/images/reception-image.jpeg'
        title='THE RECEPTION'
        description='when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        locationText='32 big bro road, Chanpai, London.'
        eventHourText='Nov 25 2017, 9AM - 5PM'
        locationUrl='https://goo.gl/maps/BoWj1wzxgHs12hBw8'
      />
      <EventCard
        backgroundImageUrl='/images/wedding-party-image.jpeg'
        title='WEDDING PARTY'
        description='when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        locationText='32 big bro road, Chanpai, London.'
        eventHourText='Nov 25 2017, 9AM - 5PM'
        locationUrl='https://goo.gl/maps/BoWj1wzxgHs12hBw8'
      />
    </section>
  );
};
