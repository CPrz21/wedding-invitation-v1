import { SectionTitle } from '@components/shared';

export const GiftsSection = () => {
  return (
    <section className='bg-primary-color py-12 px-8'>
      <SectionTitle text='Regalos' type='secondary' />
      <h3 className=' text-white text-center my-8 md:w-2/3 mx-auto'>
        El regalo es opcional, su presencia es obligatoria. Pero si quieres dar
        un aporte para nuestra vida juntos al entrar tendremos un buzón. 💌🫣
      </h3>
    </section>
  );
};
