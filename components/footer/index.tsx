import { great_vibes } from '@app/fonts';

import Styles from './footer.styles.module.scss';

export const Footer = () => {
  return (
    <footer className={`${Styles['footer-container']} py-28 relative`}>
      <h2
        className={`${great_vibes.className} text-center text-white relative z-20 text-4xl md:text-6xl`}>
        Forever And Always <br />
        Our Love
      </h2>
    </footer>
  );
};
