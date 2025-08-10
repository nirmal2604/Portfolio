import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { personalInfo, socialLinks } from '../data/portfolioData.jsx';
import { motion } from 'framer-motion';
import emailjs from "emailjs-com"; 
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const contactItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5
    }
  }),
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      "service_p8qp0gr",     // e.g. "service_xxxxxxx"
      "template_2yie5u6",    // e.g. "template_xxxxxxx"
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "qQ58Z9LnDsJwbymgt"      // e.g. "AbCdEf123456"
    );

    // Reset form after successful submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    console.log("Message sent successfully!");
    toast.success("Your message has been sent!");
  } catch (error) {
    console.error("Error sending message:", error);
    toast.error("Failed to send message. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="contact" className="py-16 md:py-20 bg-primary-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-accent-1 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-accent-1 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-accent-1/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <SectionTitle id="contact-title">Get In Touch</SectionTitle>
          <p className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
        </motion.div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Left Column - Contact Form & Social Links */}
            <motion.div 
              className="space-y-8"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Form Section */}
              <div className="relative">
                {/* Form Background Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-1/5 to-transparent rounded-2xl blur-sm"></div>
                <div className="relative bg-primary-bg/80 backdrop-blur-sm border border-text-secondary/10 rounded-2xl p-8 shadow-2xl">
                  <motion.div 
                    className="mb-8"
                    variants={floatingVariants}
                    animate="animate"
                  >
                    <div className="inline-block">
                      <h3 className="text-2xl font-mono text-accent-1 mb-3 relative">
                        Send Message
                        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-accent-1 to-transparent"></div>
                      </h3>
                    </div>
                    <p className="text-text-secondary leading-relaxed">
                      Got a project in mind or just wanna chat? I'd love to hear about it. Drop me a message and let's start a conversation.
                    </p>
                  </motion.div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div variants={contactItemVariants} custom={0}>
                      <label htmlFor="name" className="block text-sm font-mono text-accent-1 mb-3 tracking-wide">
                        YOUR NAME
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-transparent border-2 border-text-secondary/20 rounded-lg text-text-primary placeholder-text-secondary/60 focus:border-accent-1 focus:outline-none transition-all duration-300 hover:border-text-secondary/40"
                        placeholder="John Doe"
                      />
                    </motion.div>

                    <motion.div variants={contactItemVariants} custom={1}>
                      <label htmlFor="email" className="block text-sm font-mono text-accent-1 mb-3 tracking-wide">
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-transparent border-2 border-text-secondary/20 rounded-lg text-text-primary placeholder-text-secondary/60 focus:border-accent-1 focus:outline-none transition-all duration-300 hover:border-text-secondary/40"
                        placeholder="john@example.com"
                      />
                    </motion.div>

                    <motion.div variants={contactItemVariants} custom={2}>
                      <label htmlFor="message" className="block text-sm font-mono text-accent-1 mb-3 tracking-wide">
                        YOUR MESSAGE
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-5 py-4 bg-transparent border-2 border-text-secondary/20 rounded-lg text-text-primary placeholder-text-secondary/60 focus:border-accent-1 focus:outline-none transition-all duration-300 hover:border-text-secondary/40 resize-none"
                        placeholder="Tell me about your project, goals, and how I can help bring your vision to life..."
                      />
                    </motion.div>

                    <motion.div variants={contactItemVariants} custom={3}>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative w-full sm:w-auto px-10 py-4 font-mono text-lg bg-accent-1 text-primary-bg rounded-lg hover:bg-accent-1/90 transition-all duration-300 shadow-lg hover:shadow-accent-1/40 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                      >
                        <span className="relative z-10">
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-accent-1/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </motion.div>
                  </form>
                </div>
              </div>

              
            </motion.div>

            {/* Right Column - Contact Info & Opportunities */}
            <motion.div 
              className="space-y-8"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
                
              <div className="space-y-8">
                {/* Contact Information Card */}
                <motion.div 
                  className="group p-8 border border-text-secondary/10 rounded-xl hover:border-accent-1/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent-1/10"
                  variants={contactItemVariants} 
                  custom={0}
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="font-mono text-accent-1 mb-6 text-lg tracking-wide">CONTACT INFORMATION</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-6 h-6 mr-4 flex-shrink-0">
                        <svg className="w-full h-full text-accent-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                      </div>
                      <div>
                        <a 
                          href={`mailto:${personalInfo.email}`}
                          className="text-text-primary hover:text-accent-1 transition-colors duration-300"
                        >
                          {personalInfo.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-6 h-6 mr-4 flex-shrink-0">
                        <svg className="w-full h-full text-accent-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                        </svg>
                      </div>
                      <div>
                        <a 
                          href={`tel:${personalInfo.phone || '+91 9313699940'}`}
                          className="text-text-primary hover:text-accent-1 transition-colors duration-300"
                        >
                          {personalInfo.phone || '+91 9313699940'}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-6 h-6 mr-4 flex-shrink-0">
                        <svg className="w-full h-full text-accent-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-text-primary mb-1">Ahmedabad, Gujarat, India</p>
                        <p className="text-text-secondary text-sm">IST (UTC+5:30)</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Open to Opportunities Card */}
                <motion.div 
                  className="group p-8 border border-text-secondary/10 rounded-xl hover:border-accent-1/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent-1/10"
                  variants={contactItemVariants} 
                  custom={1}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-3 h-3 bg-accent-1 rounded-full mr-3 animate-pulse"></div>
                    <h4 className="font-mono text-accent-1 text-lg tracking-wide">OPEN TO OPPORTUNITIES</h4>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      'Available for internships',
                      'Open to freelance projects', 
                      'Seeking entry-level positions',
                      'Part-time opportunities welcome'
                    ].map((opportunity, index) => (
                      <motion.div 
                        key={opportunity}
                        className="flex items-center text-text-primary"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-accent-1 rounded-full mr-3 flex-shrink-0"></div>
                        {opportunity}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Social Links Section */}
              <motion.div 
                className="pt-6"
                variants={contactItemVariants} 
                custom={4}
              >
                <h4 className="font-mono text-accent-1 mb-6 text-lg tracking-wide relative inline-block">
                  Connect With Me
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-accent-1 to-transparent"></div>
                </h4>
                <div className="flex space-x-4">
                  {Object.entries(socialLinks).map(([key, link], index) => (
                    <motion.a
                      key={key}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-3 border border-text-secondary/20 rounded-lg text-text-secondary hover:text-accent-1 hover:border-accent-1/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent-1/20"
                      aria-label={key}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      variants={contactItemVariants}
                      custom={index + 5}
                    >
                      {React.cloneElement(link.icon, { size: 24 })}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;