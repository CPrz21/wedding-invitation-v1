import { great_vibes } from '@app/fonts';

import Styles from './section-title.styles.module.scss';

interface SectionTitleProps {
  type?: 'primary' | 'secondary';
  text: string;
}

export const SectionTitle = ({ type = 'primary', text }: SectionTitleProps) => {
  return (
    <div className='w-full text-center'>
      <h2
        className={`${great_vibes.className} ${
          Styles[type === 'primary' ? 'primary' : 'secondary']
        }  inline-block pt-4 pb-2 px-6 border-t-2 border-b-2`}>
        {text}
      </h2>
    </div>
  );
};
