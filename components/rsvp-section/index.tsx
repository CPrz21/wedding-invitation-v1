'use client';

import { useSearchParams } from 'next/navigation';

import { SectionTitle } from '@components/shared';

import Styles from './rsvp-section.styles.module.scss';

export const RSVPSection = () => {
  const searchParams = useSearchParams();
  const invitation = searchParams.get('invitation');
  const friend = searchParams.get('friend');

  const getWhatsappMessage = () => {
    return `Hola+${
      (friend || '').toLocaleLowerCase() === 'v' ? 'Victor' : 'Osmara'
    }+quiero+confirmar+mi+asistencia${
      invitation === '2' ? '+de+dos+personas' : ''
    }+para+tu+boda+%F0%9F%98%84%F0%9F%8E%89`;
  };

  const getPhoneNumber = () => {
    return (friend || '').toLocaleLowerCase() === 'v' ? '72345577' : '70871382';
  };

  return (
    <section
      className={`${Styles['rsvp-container-container']} py-28 relative text-center px-8`}>
      <span className='relative z-10'>
        <SectionTitle text='Join Our Party' type='secondary' />
      </span>
      <h3 className='relative z-10 text-white text-center my-8 md:w-2/3 mx-auto'>
        Será muy especial contar contigo, no olvides confirmar tu asistencia a
        nuestra boda.
      </h3>
      {friend && invitation ? (
        <a
          href={`https://api.whatsapp.com/send/?phone=503${getPhoneNumber()}&text=${getWhatsappMessage()}`}>
          <button
            type='button'
            className='relative z-10 inline-block px-6 py-2.5 bg-primary-color text-white text-xl leading-tight shadow-md hover:opacity-80 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:opacity-40 active:shadow-lg transition duration-150 ease-in-out'>
            Confirmar
          </button>
        </a>
      ) : (
        <button
          type='button'
          className='relative z-10 inline-block px-6 py-2.5 bg-primary-color text-white text-xl leading-tight shadow-md hover:opacity-80 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:opacity-40 active:shadow-lg transition duration-150 ease-in-out'>
          Oops parece que hay un problema, preguntale a uno de los novios ☹️
        </button>
      )}
    </section>
  );
};
