import { SectionTitle } from '@components/shared';

import Styles from './rsvp-section.styles.module.scss';

export const RSVPSection = () => {
  return (
    <section
      className={`${Styles['rsvp-container-container']} py-28 relative mb-1 text-center`}>
      <span className='relative z-10'>
        <SectionTitle text='Join Our Party' type='secondary' />
      </span>
      <h3 className='relative z-10 text-white text-center my-8'>
        Será muy especial contar contigo, no olvides confirmar tu asistencia a
        nuestra boda.
      </h3>
      <button
        type='button'
        className='relative z-10 inline-block px-6 py-2.5 bg-primary-color text-white text-xl leading-tight shadow-md hover:opacity-80 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:opacity-40 active:shadow-lg transition duration-150 ease-in-out'>
        Confirmar
      </button>
    </section>
  );
};
