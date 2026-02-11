import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.jpeg';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';

const Projects = ({darkMode}) => {
    const projects = [
        {
            id: 1,
            title: 'AI-Powered Interview Preparation Platform',
            desc: 'A full-stack MERN application that helps candidates prepare for interviews through AI-powered mock interview simulations. Features include secure JWT authentication, dynamic interview question generation using Google Gemini API, text-to-speech and speech-to-text capabilities, community post sharing, and a responsive UI with dark mode support. Built with TypeScript, React, Node.js, Express, MongoDB, and deployed on Vercel',
            image: project1 ,
            tags: ['React', 'Node.js', 'MongoDB', 'AI']

        },
        {
            id: 2,
            title: 'Dog Adoption & Care Platform',
            desc: 'A full-stack web application that helps people find, adopt, and care for dogs. Features include user authentication (email/password + Google OAuth2), lost & found reporting, owner-to-user messaging, product listings with orders, password recovery, and an AI-powered chatbot assistant. Built with Spring Boot, MySQL, and a responsive Bootstrap frontend.',
            image: project2 ,
            tags: ['Springboot', 'MySQL', 'Bootstrap', 'AI']

        },
        {
            id: 3,
            title: 'Pizzeria Mobile App',
            desc: 'A cross-platform mobile application built with React Native and Expo for browsing pizzas and combos. It features a file-based navigation system, persistent shopping cart management, user authentication via Firebase, and a checkout flow with saved delivery locations.',
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
            desc: 'A comprehensive e-commerce Figma design for a pet marketplace, featuring intuitive navigation, high-quality product showcases, and a streamlined checkout process. Designed with pet owners in mind, it includes organized categories for food, toys, and grooming, along with a personalized pet profile section.',
            image: project5 ,
            tags: ['Figma', 'UI/UX Design', 'Prototyping']
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

            </div>

        </div>

    </section>
  )
}

export default Projects
