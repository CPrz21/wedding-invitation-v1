import { great_vibes } from '@app/fonts';

import styles from './styles.module.scss';

export const MainSection = () => {
  return (
    <section
      className={`${styles.hero} w-screen h-screen flex items-center justify-center`}>
      <div className={`${styles['couple-name-container']}`}>
        <h1 className={`${great_vibes.className} text-white text-center`}>
          Victor & Osmara
        </h1>
        <h4>¡Acompañanos en nuestro día!</h4>
      </div>
      {/* //TODO: Do it last  */}
      {/* <div>
        <h4 className={great_vibes.className}>Save the date</h4>
        <span className='date'>25 DEC 2023</span>
      </div> */}
    </section>
  );
};
