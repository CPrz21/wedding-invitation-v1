import { SectionTitle } from '@components/shared';

import { EventCard } from './event-card';

export const WeddingInfoSection = () => {
  return (
    <section className='container mx-auto section-container !py-12 !md:py-0'>
      <SectionTitle text='Programa' />
      <EventCard
        backgroundImageUrl='/images/reception-image.jpg'
        title='CEREMONIA'
        description='when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        locationText='Parroquia María Auxiliadora, 3 av. nte. y pje Don Rúa, San Salvador'
        eventHourText='28 de Octubre de 2023, 3:30PM'
        locationUrl='https://goo.gl/maps/o343fW4ZovLgjJrz6'
      />
      <EventCard
        backgroundImageUrl='/images/wedding-party-image.png'
        title='RECEPCIÓN'
        description='when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        locationText='Finca San Nicolás, calle San Nicolás la cima 2, San Salvador'
        eventHourText='28 de Octubre de 2023, 5:30PM'
        locationUrl='https://goo.gl/maps/Z7mAtp6vTbbDP3XQ9'
      />
    </section>
  );
};
