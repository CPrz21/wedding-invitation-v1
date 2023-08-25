import { great_vibes } from '@app/fonts';

import styles from './styles.module.scss';

export const MainSection = () => {
  return (
    <section
      className={`${styles.hero} w-screen h-screen flex items-center justify-center`}>
      <div className={`${styles['couple-name-container']}`}>
        <h1 className={`${great_vibes.className} text-7xl text-white`}>
          Victor & Osmara
        </h1>
        <h4>WE'RE GETTING MARRIED</h4>
      </div>
    </section>
  );
};
