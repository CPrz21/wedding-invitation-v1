'use client';
import { great_vibes } from '@app/fonts';

import { useCountdown } from '../../hooks';
import { CountdownBox } from './countdown-box';
import Styles from './countdown-section.styles.module.scss';

export const CountdownSection = () => {
  const [days, hours, minutes, seconds] = useCountdown(
    new Date('Oct 28, 2023 15:00:00').getTime()
  );

  return (
    <section
      className={`${Styles['countdown-section-container']} py-28 relative`}>
      <div className='container mx-auto flex flex-col md:flex-row items-center'>
        <h1
          className={`${great_vibes.className} w-full md:w-2/5 text-shadow text-white z-20 text-center md:text-left mb-8 md:mb-0`}>
          <span className='block text-2xl mb-2 md:mb-4'>
            Éres muy importante para nosotros
          </span>
          Te Esperamos...
        </h1>
        <ul className='w-full md:w-3/5 flex items-center justify-center gap-4 flex-wrap md:flex-nowrap'>
          <CountdownBox number={`${days}`} title='DÍAS' />
          <CountdownBox number={`${hours}`} title='HORAS' />
          <CountdownBox number={`${minutes}`} title='MINS' />
          <CountdownBox number={`${seconds}`} title='SEGS' />
        </ul>
      </div>
    </section>
  );
};
