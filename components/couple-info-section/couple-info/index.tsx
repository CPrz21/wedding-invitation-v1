import { great_vibes } from '@app/fonts';

import { SocialIcons, SocialIconsProps } from '../social-icons';

interface CoupleInfoProps extends SocialIconsProps {
  backgroundImageUrl: string;
  title: string;
  description: string;
  coupleName: string;
  imageSide?: 'left' | 'right';
}

export const CoupleInfo = ({
  backgroundImageUrl,
  title,
  description,
  coupleName,
  imageSide = 'left',
  ...rest
}: CoupleInfoProps) => {
  return (
    <div className='w-full flex flex-col md:flex-row mb-8 md:mb-0'>
      <div
        className={`w-full md:w-1/2 h-64 md:h-auto ${
          imageSide === 'left' ? 'order-2' : 'order-4'
        }`}
        style={{
          background: `url(${backgroundImageUrl}) center center/cover no-repeat local`,
        }}
      />
      <div className='w-full md:w-1/2 p-8 order-3 bg-aqua-soft-color'>
        <h3 className='text-dark-color mb-4'>{title}</h3>
        <p className='text-gray-color mb-4'>{description}</p>
        <span className={`${great_vibes.className} text-xl`}>
          - {coupleName}
        </span>
        <br />
        <br />
        <SocialIcons {...rest} />
      </div>
    </div>
  );
};
