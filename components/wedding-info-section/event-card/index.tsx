import { AiOutlineRight } from 'react-icons/ai';
import { FaLocationDot } from 'react-icons/fa6';
import { FiClock } from 'react-icons/fi';

interface EventCardProps {
  backgroundImageUrl: string;
  title: string;
  description: string;
  locationText: string;
  eventHourText: string;
  locationUrl: string;
}

export const EventCard = ({
  backgroundImageUrl,
  title,
  description,
  locationText,
  locationUrl,
  eventHourText,
}: EventCardProps) => {
  return (
    <div className='w-full flex flex-col md:flex-row my-8'>
      <div
        className={`w-full md:w-1/3 h-64 md:h-auto`}
        style={{
          background: `url(${backgroundImageUrl}) center center/cover no-repeat local`,
        }}
      />
      <div className='w-full md:w-2/3 px-8 order-3 py-8 md:py-0'>
        <h3 className='text-dark-color mb-4'>{title}</h3>
        <p className='flex items-center text-gray-color gap-1 mb-2'>
          <FaLocationDot color='#5e9a8e' /> {locationText}
        </p>
        <p className='flex items-center text-gray-color gap-1 my-4'>
          <FiClock color='#5e9a8e' /> {eventHourText}
        </p>
        {/* <p className='text-gray-color my-4'>{description}</p> */}
        <a
          target='_blank'
          href={locationUrl}
          className='text-primary-color flex items-center gap-1'
          rel='noreferrer'>
          <strong>Ver Ubicación</strong>
          <AiOutlineRight />
        </a>
      </div>
    </div>
  );
};
