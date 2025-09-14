import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo, socialLinks } from '../data/portfolioData.jsx';
import { FaDownload } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    // Choose ONE of these background classes:
    // static-grid - Basic static white grid lines
    // dot-grid - Dot pattern  
    // animated-grid - DOPE cyan/magenta moving grid with glow effect
    // pulsing-grid - FIXED pulsing grid (now actually pulses!)
    // matrix-grid - Matrix movie style falling green grid
    // rainbow-grid - Moving grid with changing colors!
    // accent-grid - Large colored grid with your theme colors  
    // diagonal-grid - Diagonal cross-hatch pattern
    <section id="hero" className="animated-grid min-h-screen flex items-center justify-center relative overflow-hidden z-0 pt-20">
      {/* Optional: Add a subtle overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-20 z-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-accent-1 font-mono text-lg sm:text-xl mb-3">
            Hi, I'm
          </h3>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold text-text-primary mb-4">
            {personalInfo.name}.
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-secondary mb-6">
            <TypeAnimation
              sequence={[
                'I build things for the web.',
                2000,
                'I am a Full Stack Developer.',
                2000,
                'I love to code.',
                2000,
                'I solve problems.',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-mono"
            />
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-8 text-base sm:text-lg">
            {personalInfo.bio}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
        >
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            className="px-8 py-3 font-mono text-lg bg-accent-1 text-primary-bg rounded-md hover:bg-opacity-80 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-accent-1/30"
          >
            View My Work
          </ScrollLink>
          <a
            href={personalInfo.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 font-mono text-lg border-2 border-accent-1 text-accent-1 rounded-md hover:bg-accent-1 hover:text-primary-bg transition-all duration-300 flex items-center shadow-lg hover:shadow-accent-1/30"
          >
            <FaDownload className="mr-2" /> Download CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center space-x-6"
        >
          {Object.values(socialLinks).map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-1 transition-colors"
              aria-label={link.url.split(':')[0]}
            >
              {React.cloneElement(link.icon, { size: 28 })}
            </a>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll down indicator (optional) */}
      <ScrollLink 
        to="about" 
        smooth={true} 
        duration={800} 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </ScrollLink>
    </section>
  );
};

export default Hero;