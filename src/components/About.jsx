
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
            {/* Decorative star background */}
            <div className="absolute -inset-10 lg:-inset-16
            bg-gradient-to-br from-[#f97316] via-[#fb923c]
            to-[#f59e0b] rotate-12 star-shape z-0 shadow-2xl">
            </div>
          </div>

        </figure>

      </div>

    </section>
  )
}

export default About
