import about from '../assets/about.png';
import { motion } from 'framer-motion';
import { Atom, Boxes, Braces, Coffee, Database, FileCode, Flame, GitBranch, Leaf, Send, Server, Smartphone, Sprout, Wind } from 'lucide-react';

const Skills = ({ darkMode }) => {
  const skills = [
    { name: 'Java', icon: Coffee, color: '#5382a1' },
    { name: 'MongoDB', icon: Leaf, color: '#47A248' },
    { name: 'MySQL', icon: Database, color: '#00758F' },
    { name: 'JavaScript', icon: FileCode, color: '#F7DF1E' },
    { name: 'TypeScript', icon: Braces, color: '#3178C6' },
    { name: 'React', icon: Atom, color: '#61DAFB' },
    { name: 'React Native', icon: Smartphone, color: '#5ED3F3' },
    { name: 'Node.js', icon: Boxes, color: '#3C873A' },
    { name: 'Express', icon: Server, color: '#000000' },
    { name: 'Spring Boot', icon: Sprout, color: '#6DB33F' },
    { name: 'Tailwind CSS', icon: Wind, color: '#38B2AC' },
    { name: 'Git/GitHub', icon: GitBranch, color: '#F05032' },
    { name: 'Postman', icon: Send, color: '#FF6C37' },
    { name: 'Firebase', icon: Flame, color: '#FFCA28' }
  ];

  const cardVariants = {
    initial: { y: 0, scale: 1 },
    hover: { y: -8, scale: 1.02, transition: { type: 'spring', stiffness: 500, damping: 18 } },
    tap: { scale: 0.98 }
  };

  return (
    <section id="skills" className={`min-h-screen overflow-hidden flex
    items-center justify-center px-4 sm:px-6`}>
      <div className="max-w-6xl w-full flex flex-col gap-10 sm:gap-12">
        <header className="text-center">
          <h2 
              className='text-3xl sm:text-4xl font-bold mb-3'
              style={{
                  color: darkMode ? 'white' : '#1f2937'
              }}>
              My <span
              style={{
                  background: 'linear-gradient(to right, #f97316,  #f59e0b)',
                  WebkitBackgroundClip: 'text' ,
                  backgroundClip: 'text' ,
                  color: 'transparent'
              }}>
                  Skills
              </span>
              </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
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
        className='text-center relative order-l
        lg:order-2'>
            <div className='flex flex-col gap-3 sm:gap-4 lg:gap-5 mb-6 sm:mb-8'>
              <div
                className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4'
                data-aos='zoom-in'
                data-aos-delay='600'>
                {skills.map(({ name, icon: Icon, color }, index) => (
                  <motion.div
                    key={name}
                    variants={cardVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    transition={{ delay: index * 0.03 }}
                    className={`flex items-center justify-start gap-4 px-4 py-3 rounded-xl border shadow-sm relative overflow-hidden
                    ${darkMode ? 'border-orange-400/40 bg-orange-500/5 text-orange-100' : 'border-orange-200 bg-orange-50 text-orange-700'}`}>
                    <div className='flex items-center space-x-3'>
                      <div
                        className='inline-flex items-center justify-center rounded-full p-2'
                        style={{ backgroundColor: color }}
                        aria-hidden='true'
                      >
                        <Icon className='h-5 w-5 text-white' />
                      </div>
                      <span className='font-semibold text-sm sm:text-base'>{name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
        </article>

      </div>
      </div>

    </section>
  )
}

export default Skills
