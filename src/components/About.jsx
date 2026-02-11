import about from '../assets/about.png';

const About = ({ darkMode }) => {
  return (
    <section id="about" className={`min-h-screen overflow-hidden flex
    items-center justify-center px-4 sm:px-6`}>
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
        <article
        data-aos = 'fade-left'
        data-aos-delay = '300'
        className='text-center lg:text-left relative order-l
        lg:order-2'>
          <header>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl
            xl:text-6xl font-bold mb-4 sm:mb-6
            text-transparent bg-linear-to-r from-orange-400
            to-orange-600 bg-clip-text'
            data-aos = 'fade-up'
            data-aos-delay = '400'>
              About Me
            </h1>
            </header>
            <p className={`text-sm sm:text-base lg:text-lg
              xl:text-xl mb-6 sm:mb-8 leading-relaxed
              bg-linear-to-r from-orange-900/10 to-orange-900/5
              p-4 sm:p-6 rounded-xl sm:rounded-2xl
              backdrop-blur-sm
              ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
              data-aos = 'fade-up'
              data-aos-delay = '500'>
              I’m a passionate software developer who enjoys building clean, 
              user-friendly, and efficient applications. I have hands-on 
              experience with Java, MongoDB, MySQL, and modern web technologies 
              like JavaScript, TypeScript, React, and Node.js.
            </p>
            <div className='flex flex-col gap-3 sm:gap-4 lg:gap-5 mb-6 sm:mb-8'>
              <h2 className={`text-lg sm:text-xl lg:text-2xl font-semibold
                ${darkMode ? 'text-white' : 'text-gray-900'}`}
                data-aos='fade-up'
                data-aos-delay='550'>
                Tech Skills
              </h2>
              <div
                className='flex flex-wrap justify-center lg:justify-start
                gap-2 sm:gap-3 lg:gap-4'
                data-aos='zoom-in'
                data-aos-delay='600'>
                {["Java","MongoDB","MySQL","JavaScript","TypeScript","React","Node.js","Express","Tailwind CSS","Git/GitHub"].map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-2 rounded-full text-sm sm:text-base font-medium border
                    ${darkMode ? 'border-orange-400/50 text-orange-100 bg-orange-500/10' : 'border-orange-200 text-orange-700 bg-orange-50'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <button 
            className={`w-full sm:w-auto border-2 border-orange-500
            inline-flex items-center justify-center 
            border-0 py-2 px-4 sm:px-6 
            hover:shadow-[0_0_30px_rgba(255,165,0,0.45)]
            hover:-translate-y-0.5 rounded-full text-base 
            sm:text-lg font-semibold transition-all
            duration-300 transform ${darkMode 
            ? 'text-white bg-orange-500/10' 
            : 'text-gray-800 bg-white/90'}`}
            data-aos='fade-up'
            data-aos-delay='800'
            >
            Learn More
            </button>
        </article>

      </div>

    </section>
  )
}

export default About
