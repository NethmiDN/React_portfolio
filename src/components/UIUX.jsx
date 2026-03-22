import ui1 from '../assets/ui1.png';
import ui2 from '../assets/ui2.png';
import ui3 from '../assets/ui3.png';
import ui4 from '../assets/ui4.png';
import { ExternalLink } from 'lucide-react';

const UIUX = ({ darkMode }) => {
  const designs = [
    {
      id: 1,
      title: 'Modern Restaurant UI',
      description:
        'A sleek, modern restaurant UI design crafted for seamless user experience and appetizing visual appeal.',
      image: ui1,
      link: 'https://www.figma.com/design/tmYVineBmSE1Oxpy9YRx5Z/Restuarant?node-id=0-1&t=Kw587bflqbMLEQcX-1', 
    },
    {
      id: 2,
      title: 'Swift Food Delivery UI',
      description:
        'An intuitive food delivery UI designed for effortless navigation and a seamless ordering experience.',
      image: ui2,
      link: 'https://www.figma.com/design/w5UsIDu3Dtobz3XA1jr2KT/food-delivery?node-id=0-1&t=vZ0dY0l2GGn2bRPb-1',
    },
    {
      id: 3,
      title: 'EventOra Management UI',
      description:
        'A seamless event management interface designed for intuitive booking and effortless user coordination.',
      image: ui3,
      link: 'https://www.figma.com/design/9Tis5AX90RILU0rBXdVZor/EventOra?node-id=0-1&t=I2Fn6M0gci1CBXN7-1',
    },
    {
      id: 4,
      title: 'DocConnect Health UI',
      description:
        'A streamlined healthcare interface designed for effortless patient scheduling and appointment management.',
      image: ui4,
      link: 'https://www.figma.com/design/0OnMc52kJQda2CPNE4KcYB/Dr-Appointment?node-id=0-1&t=lKvkWZCNwwY2jsyt-1',
    },
  ];

  return (
    <section
      id='uiux'
      style={{ backgroundColor: darkMode ? '#030712' : '#fff7ed' }}
      className='relative py-24'
    >
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12' data-aos='fade-up'>
          <h2
            className='text-3xl sm:text-4xl font-bold mb-3'
            style={{ color: darkMode ? 'white' : '#1f2937' }}
          >
            UI/UX{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #f97316,  #f59e0b)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Design
            </span>
          </h2>
          <p
            className='max-w-2xl mx-auto'
            style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
          >
            I design intuitive digital experiences that balance visual clarity, accessibility, and
            user-centered flows.
          </p>
        </div>

        <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
          {designs.map((design, index) => (
            <div
              key={design.id}
              data-aos='fade-up'
              data-aos-delay={index * 100}
              style={{
                background: darkMode
                  ? 'linear-gradient(to right, #1f2937, #111827)'
                  : 'linear-gradient(to right, #ffffff, #fffaf5)',
                borderColor: darkMode ? '#374151' : '#fed7aa',
              }}
              className='group rounded-xl border overflow-hidden hover:border-orange-500/50 transition-all duration-300 flex flex-col'
            >
              <div className='h-48 sm:h-56 overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-t-xl'>
                <img 
                  src={design.image} 
                  alt={design.title} 
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' 
                />
              </div>
              <div className='p-6 flex flex-col justify-between grow'>
                <div>
                  <h3
                    className='text-xl font-semibold mb-2'
                    style={{ color: darkMode ? '#f9fafb' : '#1f2937' }}
                  >
                    {design.title}
                  </h3>
                  <p style={{ color: darkMode ? '#d1d5db' : '#4b5563' }} className='mb-6'>
                    {design.description}
                  </p>
                </div>
                <a
                  href={design.link}
                  target='_blank'
                  rel='noreferrer'
                  style={{
                    backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                    color: darkMode ? 'white' : '#374151',
                  }}
                  className='inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 w-fit'
                >
                  View Full Design
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UIUX;
