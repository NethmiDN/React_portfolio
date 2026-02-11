import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.jpeg';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';
import project6 from '../assets/project6.jpeg';
import { FaGithub } from 'react-icons/fa';

const Projects = ({darkMode}) => {
    const projects = [
        {
            id: 1,
            title: 'AI-Powered Interview Preparation Platform',
            desc: 'InterviewAce is a TypeScript MERN application using AI for interactive mock interviews, question generation, and preparation.',
            image: project1 ,
            tags: ['React', 'Node.js', 'MongoDB', 'AI']

        },
        {
            id: 2,
            title: 'Dog Adoption & Care Platform',
            desc: 'Full-stack Java web application for dog adoption, lost and found tracking, messaging, and AI pet assistance.',
            image: project2 ,
            tags: ['Springboot', 'MySQL', 'Bootstrap', 'AI']

        },
        {
            id: 3,
            title: 'Pizzeria Mobile App',
            desc: 'A React Native pizza ordering app using Expo, Firebase, and NativeWind for cart management and checkout.',
            image: project3 ,
            tags: ['React Native', 'Expo', 'Firebase', 'Tailwind CSS']
        },
        {
            id: 4,
            title: 'Luxury Hotel Website',
            desc: 'A responsive and modern multi-page website designed for the "Uppermost Jumeirah" luxury resort in Dubai.',
            image: project4 ,
            tags: ['CSS3', 'Bootstrap', 'JavaScript', 'Firebase']
        },
        {
            id: 5,
            title: 'Pet Item Marketplace',
            desc: 'Comprehensive pet marketplace Figma design with intuitive navigation, product showcases, streamlined checkout, categories, and pet profiles.',
            image: project5 ,
            tags: ['Figma', 'UI/UX Design', 'Prototyping']
        },
        {
            id: 6,
            title: 'Mental Health Therapy Center Management System',
            desc: 'A JavaFX and Hibernate-based mental health therapy center management system for patients, therapists and payments.',
            image: project6 ,
            tags: ['JavaFX', 'MySQL', 'JavaMail', 'Layered Architecture']
        },
        
    ]
  return (
    <section
    id='projects'
    style={{
        backgroundColor: darkMode ? '#111827' : '#f9fafb',
    }}
    className='relative py-24'>
        <div className='container mx-auto px-4'>
            <div className='text-center mb-10' data-aos='fade-up'>
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
                    Projects
                </span>
                </h2>
                <p
                className='max-w-xl mx-auto'
                style={{
                    color: darkMode ? '#d1d5db' : '#6b7280'
                }}>
                    A showcase of my recent work
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2
            lg:grid-cols-3 gap-5 mb-12'>
                {projects.map((project, index) => (
                    <div
                    key={project.id}
                    style={{
                        background: darkMode
                        ? 'linear-gradient(to right, #1f2937,  #111827)'
                        : 'linear-gradient(to right, #ffffff,  #f59e0b)',
                        borderColor: darkMode ? '#374151' : '#e5e7eb'
                    }}
                    className='group rounded-xl border duration-300
                    hover:border-orange-500/50 transition-all'
                    data-aos='fade-up'
                    data-aos-delay={index * 100}>
                        <div className='h-36 overflow-hidden rounded-t-xl'>
                            <img 
                            src={project.image}
                            alt={project.title}
                            className='w-full h-full object-cover
                            group-hover:scale-110 transition-transform
                            duration-500'></img>
                        </div>
                        <div className='p-4'>
                        <h3
                        className='text-lg font-bold mb-2'
                        style={{
                            color: darkMode ? 'white' : '#1f2937'
                        }}>
                            {project.title}
                        </h3>
                        <p
                        className='text-sm mb-3'
                        style={{
                            color: darkMode ? '#d1d5db' : '6b7280'
                        }}>
                            {project.desc}
                        </p>
                        <div className='flex flex-wrap gap-1.5 mb-4'>
                            {project.tags.map((tag, idx) => (
                                <span
                                key={idx}
                                style={{
                                    backgroundColor: darkMode ? '#374151' : '#f3f4f6' , 
                                    color: darkMode ? '#d1d5db' : '#4b5563'
                                }}
                                className='px-2 py-1 text-xs rounded-full'>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className='flex gap-2'>
                            <a href='#'
                            style={{
                                backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                                color: darkMode ? 'white' : '#374151'
                            }}
                            className='flex-1 flex items-center
                            justify-center gap-1.5 px-3 py-2
                            text-sm rounded-lg hover:opacity-90
                            transition-colors'
                            data-aos='zoom-in'
                            data-aos-delay='300'
                            >
                                <FaGithub className='text-sm'/>
                                <span>Code</span>
                            </a>
                        </div>
                        </div>

                    </div>
                ))}

            </div>

        </div>

    </section>
  )
}

export default Projects
