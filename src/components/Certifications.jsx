import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { certificationsData } from '../data/portfolioData';

const SectionTitle = ({ children, id }) => (
  <motion.h2
    id={id}
    className="text-3xl md:text-4xl font-mono text-center mb-3 relative"
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <span className="text-text-primary">{children.split(' ')[0]}</span>
    {children.split(' ').length > 1 && (
      <span className="text-accent-1"> {children.split(' ').slice(1).join(' ')}</span>
    )}
  </motion.h2>
);

const CertificationCard = ({ certification, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const CardHeader = ({ mobile = false }) => (
    <div className={`flex items-start justify-between ${mobile ? 'mb-4' : 'mb-4'}`}>
      <div className="flex-1 min-w-0">
        <div className="inline-block px-3 py-1 bg-accent-1/15 rounded-lg mb-3">
          <span className="text-accent-1 font-mono text-xs tracking-wider">{certification.date}</span>
        </div>
        <h3 className="text-lg font-bold text-text-primary mb-2 leading-tight">
          {certification.title}
        </h3>
        <p className="text-text-secondary text-sm font-medium">{certification.issuer}</p>
      </div>
      
      <motion.div
        className="ml-3 p-2 bg-text-secondary/10 rounded-xl flex-shrink-0"
        whileHover={{ scale: 1.1 }}
      >
        {certification.logo ? (
          <span className="text-lg">{certification.logo}</span>
        ) : (
          <svg className="w-5 h-5 text-accent-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        )}
      </motion.div>
    </div>
  );

  const TechStackPreview = () => (
    <div className="space-y-3 md:block hidden">
      {certification.techStack.slice(0, 4).map((tech, i) => (
        <motion.div
          key={tech}
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + i * 0.1 }}
        >
          <div className="w-2 h-2 bg-accent-1 rounded-full mr-3"></div>
          <span className="text-text-primary font-mono text-sm">{tech}</span>
        </motion.div>
      ))}
      {certification.techStack.length > 4 && (
        <div className="flex items-center">
          <div className="w-2 h-2 bg-text-secondary/50 rounded-full mr-3"></div>
          <span className="text-text-secondary font-mono text-sm">+{certification.techStack.length - 4} more</span>
        </div>
      )}
    </div>
  );

  const TechStackTags = ({ limit }) => (
    <div className="flex flex-wrap gap-2">
      {certification.techStack.slice(0, limit).map((tech) => (
        <span
          key={tech}
          className="px-2 py-1 bg-accent-1/10 border border-accent-1/20 rounded text-xs text-text-primary font-mono"
        >
          {tech}
        </span>
      ))}
      {limit && certification.techStack.length > limit && (
        <span className="px-2 py-1 bg-text-secondary/10 border border-text-secondary/20 rounded text-xs text-text-secondary font-mono">
          +{certification.techStack.length - limit}
        </span>
      )}
    </div>
  );

  const LevelBadge = () => certification.level && (
    <span className={`inline-block text-xs font-mono px-2 py-1 rounded ${
      certification.level === 'advanced' ? 'bg-red-500/15 text-red-400' :
      certification.level === 'professional' ? 'bg-purple-500/15 text-purple-400' :
      'bg-blue-500/15 text-blue-400'
    }`}>
      {certification.level.toUpperCase()}
    </span>
  );

  const CredentialButton = ({ className = "" }) => (
    <motion.a
      href={certification.credentialUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center w-full px-4 py-3 bg-accent-1 hover:bg-accent-1/90 text-primary-bg rounded-xl font-mono text-sm tracking-wide transition-all duration-300 shadow-lg ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={(e) => e.stopPropagation()}
    >
      <span className="mr-2">VIEW CREDENTIAL</span>
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </motion.a>
  );

  const handleTouch = (e) => {
    e.preventDefault();
    setTimeout(() => setIsFlipped(!isFlipped), 100);
  };

  return (
    <motion.div
      className="group h-80 min-h-80 mb-4 md:mb-0"
      style={{ boxSizing: "border-box" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div 
        className="relative h-full overflow-hidden"
        style={{ perspective: "1000px", touchAction: "none" }}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        onTouchStart={handleTouch}
      >
        <motion.div
          className="relative w-full h-full cursor-pointer"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.4, type: "tween", ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        >
          {/* Front */}
          <div 
            className="absolute inset-0 w-full h-80"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="relative h-full bg-primary-bg/80 backdrop-blur-sm border border-text-secondary/15 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-1/5 via-transparent to-accent-1/10"></div>
              
              <div className="relative z-10 p-6 h-full flex flex-col">
                <CardHeader />
                <div className="flex-1 flex flex-col justify-center">
                  <TechStackPreview />
                  <div className="block md:hidden mt-4">
                    <TechStackTags limit={3} />
                  </div>
                </div>
                <div className="mb-3"><LevelBadge /></div>
                <div className="text-center md:block hidden">
                  <motion.div
                    className="inline-flex items-center text-text-secondary/70 text-xs font-mono"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    HOVER
                  </motion.div>
                </div>
                <div className="text-center block md:hidden">
                  <motion.div
                    className="inline-flex items-center text-text-secondary/70 text-xs font-mono"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    TAP
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Back */}
          <div 
            className="absolute inset-0 w-full h-80"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <div className="h-full bg-primary-bg/90 backdrop-blur-sm border border-accent-1/20 rounded-2xl shadow-2xl">
              <div className="h-full flex flex-col p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-text-primary mb-1">{certification.title}</h3>
                  <div className="flex items-center text-sm">
                    <span className="text-accent-1 font-mono">{certification.issuer}</span>
                    <div className="w-1 h-1 bg-text-secondary/40 rounded-full mx-2"></div>
                    <span className="text-text-secondary">{certification.date}</span>
                  </div>
                </div>

                <div className="flex-1 mb-4">
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {certification.description}
                  </p>
                </div>

                {certification.verificationCodes && (
                  <div className="mb-4">
                    <div className="text-xs text-text-secondary/70 mb-2">Verification:</div>
                    <div className="space-y-1">
                      {certification.verificationCodes.enrollment && (
                        <div className="text-xs font-mono text-accent-1">
                          ID: {certification.verificationCodes.enrollment}
                        </div>
                      )}
                      {certification.verificationCodes.user && (
                        <div className="text-xs font-mono text-accent-1">
                          User: {certification.verificationCodes.user}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <TechStackTags />
                </div>

                <div className="mt-auto">
                  <CredentialButton className="hover:shadow-accent-1/30" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const FilterButton = ({ category, isActive, onClick }) => (
  <motion.button
    onClick={() => onClick(category)}
    className={`px-4 py-2 md:px-5 md:py-2 rounded-xl font-mono text-xs md:text-sm transition-all duration-300 ${
      isActive
        ? 'bg-accent-1 text-primary-bg shadow-lg shadow-accent-1/25'
        : 'bg-transparent text-text-secondary border border-text-secondary/20 hover:border-accent-1/40 hover:text-accent-1'
    }`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    {category}
  </motion.button>
);

const Certifications = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const categories = useMemo(() => {
    if (!certificationsData || !Array.isArray(certificationsData)) return ['All'];
    const uniqueCategories = [...new Set(certificationsData.map(cert => cert?.category).filter(Boolean))];
    return ['All', ...uniqueCategories.sort()];
  }, [certificationsData]);

  const filteredCertifications = useMemo(() => {
    if (!certificationsData || !Array.isArray(certificationsData)) return [];
    
    if (selectedCategory === 'All') {
      return certificationsData;
    }
    
    return certificationsData.filter(cert => 
      cert && cert.category && cert.category.trim() === selectedCategory.trim()
    );
  }, [certificationsData, selectedCategory]);

  const handleCategorySelect = (category) => {
    if (categories.includes(category)) {
      setSelectedCategory(category);
    }
  };

  React.useEffect(() => {
    if (!categories.includes(selectedCategory)) {
      setSelectedCategory('All');
    }
  }, [categories, selectedCategory]);

  return (
    <section 
      ref={sectionRef}
      id="certifications" 
      className="py-16 md:py-20 bg-primary-bg relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 border border-accent-1 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 border border-accent-1 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-8 md:mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle id="certifications-title">Certifications</SectionTitle>
          <p className="text-text-secondary mt-3 max-w-2xl mx-auto text-sm md:text-base">
            Professional development through industry-recognized credentials
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
            >
              <FilterButton
                category={category}
                isActive={selectedCategory === category}
                onClick={handleCategorySelect}
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <AnimatePresence>
            {filteredCertifications.map((certification, index) => (
              <CertificationCard
                key={`${selectedCategory}-${certification.id}`}
                certification={certification}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>

        {filteredCertifications.length === 0 && (
          <motion.div
            className="text-center py-12 md:py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-3xl md:text-4xl mb-4 opacity-50">📜</div>
            <h3 className="text-lg md:text-xl font-mono text-text-primary mb-2">No certifications in this category</h3>
            <p className="text-text-secondary text-sm md:text-base">Try selecting a different category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Certifications;