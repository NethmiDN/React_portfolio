import about from '../assets/about.png';
import { motion } from 'framer-motion';
import { Atom, Boxes, Braces, Coffee, Database, FileCode, GitBranch, Leaf, Server, Wind } from 'lucide-react';

const Skills = ({ darkMode }) => {
  const skills = [
    { name: 'Java', level: '88%', icon: Coffee },
    { name: 'MongoDB', level: '80%', icon: Leaf },
    { name: 'MySQL', level: '85%', icon: Database },
    { name: 'JavaScript', level: '90%', icon: FileCode },
    { name: 'TypeScript', level: '85%', icon: Braces },
    { name: 'React', level: '90%', icon: Atom },
    { name: 'Node.js', level: '85%', icon: Boxes },
    { name: 'Express', level: '80%', icon: Server },
    { name: 'Tailwind CSS', level: '85%', icon: Wind },
    { name: 'Git/GitHub', level: '90%', icon: GitBranch }
  ];

  const cardVariants = {
    initial: { y: 0, scale: 1 },
    hover: { y: -8, scale: 1.02, transition: { type: 'spring', stiffness: 500, damping: 18 } },
    tap: { scale: 0.98 }
  };

  return (
    <section id="skills" className={`min-h-screen overflow-hidden flex
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
              Skills
            </h1>
            </header>
            <div className='flex flex-col gap-3 sm:gap-4 lg:gap-5 mb-6 sm:mb-8'>
              <div
                className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4'
                data-aos='zoom-in'
                data-aos-delay='600'>
                {skills.map(({ name, level, icon: Icon }, index) => (
                  <motion.div
                    key={name}
                    variants={cardVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    transition={{ delay: index * 0.03 }}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl border shadow-sm relative overflow-hidden
                    ${darkMode ? 'border-orange-400/40 bg-orange-500/5 text-orange-100' : 'border-orange-200 bg-orange-50 text-orange-700'}`}>
                    <div className='flex items-center space-x-3'>
                      <Icon className='h-5 w-5' />
                      <span className='font-semibold text-sm sm:text-base'>{name}</span>
                    </div>
                    <span className={`text-xs sm:text-sm font-semibold px-2 py-1 rounded-full
                      ${darkMode ? 'bg-orange-500/20 text-orange-100' : 'bg-white text-orange-700'}`}>
                      {level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
        </article>

      </div>

    </section>
  )
}

export default Skills
