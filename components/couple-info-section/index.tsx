import { CoupleInfo } from './couple-info';

export const CoupleInfoSection = () => {
  return (
    <section className='container mx-auto section-container'>
      <CoupleInfo
        backgroundImageUrl='/images/groom-image.jpeg'
        title='THE GROOM'
        description="Hi I am suntina , dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
        coupleName='Victor'
        facebookUrl='www.facebook.com'
        instagramUrl='www.instagram.com'
      />
      <CoupleInfo
        backgroundImageUrl='/images/bride-image.jpeg'
        title='THE BRIDE'
        description="Hi I am suntina , dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
        coupleName='Osmara'
        facebookUrl='www.facebook.com'
        instagramUrl='www.instagram.com'
        imageSide='right'
      />
    </section>
  );
};
