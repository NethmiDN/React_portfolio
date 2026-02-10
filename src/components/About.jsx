import about from '../assets/about.png';

const About = ({ darkMode }) => {
  return (
    <section id="about" className={`min-h-screen overflow-hidden flex
    items-center justify-center px-4 sm:px-6 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2
      gap-8 sm:gap-12 items-center">
        <figure
        data-aos = 'fade-up'
        data-aos-delay = '300'
        className="flex flex-wrap justify-center gap-4 relative 
        order-2 lg:order-1">
          <div className="relative w-72 h-72 lg:w-96 lg:h-96">
            <img 
            src={about}
            alt="About Image"
            className='w-full h-full object-cover rounded-2xl shadow-xl
            transition-transform duration-300'
            data-aos = 'zoom-in'
            data-aos-delay = '400'
            />
          </div>

        </figure>

      </div>

    </section>
  )
}

export default About
