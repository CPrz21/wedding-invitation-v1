import { BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi';

export interface SocialIconsProps {
  facebookUrl?: string;
  instagramUrl?: string;
}

export const SocialIcons = ({
  facebookUrl,
  instagramUrl,
}: SocialIconsProps) => {
  return (
    <ul className='flex gap-2'>
      {facebookUrl && (
        <li className='rounded-full bg-primary-color text-white w-8 h-8 flex items-center justify-center'>
          <a href={facebookUrl} target='_blank'>
            <BiLogoFacebook />
          </a>
        </li>
      )}
      {instagramUrl && (
        <li className='rounded-full bg-primary-color text-white w-8 h-8 flex items-center justify-center'>
          <a href={instagramUrl} target='_blank'>
            <BiLogoInstagram />
          </a>
        </li>
      )}
    </ul>
  );
};
