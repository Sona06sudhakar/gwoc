'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

// Header Component
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-2xl">🌸</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Bloom</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-yellow-500 font-semibold transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-yellow-500 font-semibold transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-yellow-500 font-semibold transition-colors">
              Services
            </Link>
            <Link href="/work" className="text-gray-700 hover:text-yellow-500 font-semibold transition-colors">
              Work
            </Link>
            <Link href="/profile" className="text-gray-700 hover:text-yellow-500 font-semibold transition-colors">
              Profile
            </Link>
            <Link href="/contact" className="bg-yellow-300 text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-colors">
              Contact
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col space-y-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-4 space-y-4 border-t pt-4">
            <Link href="/" className="block text-gray-700 hover:text-yellow-500 font-semibold py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-yellow-500 font-semibold py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="/services" className="block text-gray-700 hover:text-yellow-500 font-semibold py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link href="/work" className="block text-gray-700 hover:text-yellow-500 font-semibold py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Work
            </Link>
            <Link href="/profile" className="block text-gray-700 hover:text-yellow-500 font-semibold py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Profile
            </Link>
            <Link href="/contact" className="block bg-yellow-300 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors text-center" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

// Portrait Card Component
function PortraitCard({ 
  index, 
  scrollProgress,
  imageSrc,
  rotation,
  xOffset,
  yOffset
}: { 
  index: number;
  scrollProgress: any;
  imageSrc: string;
  rotation: number;
  xOffset: number;
  yOffset: number;
}) {
  // Entry animation - staggered fade and rise
  const entryDelay = 0.6 + (index * 0.08);
  
  // Continuous upward drift with looping
  const baseYOffset = -700; // Total distance to travel
  
  // Exit animations on scroll
  const exitOpacity = useTransform(scrollProgress, [0.2, 0.5], [1, 0]);
  const exitX = useTransform(scrollProgress, [0.2, 0.5], [0, 80]);
  const exitScale = useTransform(scrollProgress, [0.2, 0.5], [1, 0.92]);

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${xOffset}px`,
        top: `${yOffset}px`,
        width: '180px',
        height: '240px',
        rotate: rotation,
        opacity: exitOpacity,
        x: exitX,
        scale: exitScale,
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ 
        opacity: 1, 
        y: 0,
      }}
      transition={{ 
        duration: 1.2, 
        delay: entryDelay, 
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {/* Continuous upward drift */}
      <motion.div
        className="w-full h-full"
        animate={{
          y: [0, baseYOffset, 0],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
          delay: index * 0.5,
        }}
      >
        {/* Subtle micro-drift */}
        <motion.div
          className="w-full h-full relative"
          animate={{
            x: [-2, 2, -2],
            y: [-1, 1, -1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.3,
          }}
        >
          <div className="w-full h-full rounded-lg overflow-hidden shadow-2xl bg-white">
            <img
              src={imageSrc}
              alt=""
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// Hero Section Component
function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Text exit animations
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0.2, 0.5], [0, -30]);

  // Card layout matching reference image - 2 columns of overlapping cards
  const cardConfig = [
    { imageSrc: '/1.jpg', rotation: -8, xOffset: 0, yOffset: 0 },
    { imageSrc: '/2.jpg', rotation: 5, xOffset: 200, yOffset: 20 },
    { imageSrc: '/3.jpg', rotation: -6, xOffset: 0, yOffset: 200 },
    { imageSrc: '/4.jpg', rotation: 7, xOffset: 200, yOffset: 220 },
    { imageSrc: '/5.jpg', rotation: -5, xOffset: 0, yOffset: 400 },
    { imageSrc: '/6.jpg', rotation: 6, xOffset: 200, yOffset: 420 },
    { imageSrc: '/7.jpg', rotation: -7, xOffset: 100, yOffset: 620 },
  ];

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
      style={{ backgroundColor: '#081F5C' }}
    >
      {/* Background Typography */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ x: 0, y: 0, opacity: 0.05 }}
        animate={{
          x: [0, 55, -45, 0],
          y: [0, -35, 50, 0],
          opacity: [0.05, 0.08, 0.06, 0.05],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <h2 className="text-[20vw] font-black text-white leading-none select-none">
          Blooming the Brand
        </h2>
      </motion.div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          
          {/* Left Column: Text Content */}
          <motion.div 
            className="space-y-8"
            style={{ opacity: textOpacity, y: textY }}
          >
            <motion.p
              className="text-sm md:text-base text-[#EDF1F6]/60 uppercase tracking-wider font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Bloom Branding
            </motion.p>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              Blooming the Brand
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl leading-relaxed text-[#EDF1F6] max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              Strategic storytelling, content, and digital experiences designed for growth.
            </motion.p>
          </motion.div>

          {/* Right Column: Card Stack */}
          <div className="relative h-[500px] md:h-[600px] lg:h-[700px] hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[400px] h-[600px]">
                {cardConfig.map((card, index) => (
                  <PortraitCard
                    key={index}
                    index={index}
                    scrollProgress={scrollYProgress}
                    imageSrc={card.imageSrc}
                    rotation={card.rotation}
                    xOffset={card.xOffset}
                    yOffset={card.yOffset}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// About Section with Card Overlap Transition
function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });

  const sectionY = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  return (
    <motion.section
      ref={sectionRef}
      className="py-24 relative z-20 rounded-t-3xl shadow-2xl"
      style={{ 
        backgroundColor: '#EDF1F6',
        y: sectionY,
        opacity: sectionOpacity,
      }}
    >
      <div className="container px-6">
        <div className="max-w-7xl mx-auto">
          
          <motion.div
            className="mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[0.95]" style={{ color: '#081F5C' }}>
              About Bloom Branding
            </h2>
          </motion.div>

          <motion.div
            className="mb-20 md:mb-24 max-w-4xl"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 font-light" style={{ color: 'rgba(8, 31, 92, 0.8)' }}>
              Bloom Branding is a creative branding studio focused on shaping bold identities
              and meaningful digital experiences.
            </p>
            
            <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl" style={{ color: 'rgba(8, 31, 92, 0.7)' }}>
              We work at the intersection of strategy, storytelling, and design—helping
              brands express who they are with clarity, confidence, and character.
            </p>

            <motion.div
              className="flex flex-wrap gap-3 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="border px-4 py-2" style={{ borderColor: 'rgba(8, 31, 92, 0.3)', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                <span className="text-xs font-bold tracking-wider uppercase" style={{ color: 'rgba(8, 31, 92, 0.7)' }}>Strategy</span>
              </div>
              <div className="border-2 px-4 py-2" style={{ borderColor: 'rgba(8, 31, 92, 0.3)' }}>
                <span className="text-xs font-black tracking-widest uppercase" style={{ color: 'rgba(8, 31, 92, 0.8)' }}>Storytelling</span>
              </div>
              <div className="border px-4 py-2" style={{ borderColor: 'rgba(8, 31, 92, 0.3)', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                <span className="text-xs font-semibold tracking-wide uppercase" style={{ color: 'rgba(8, 31, 92, 0.7)' }}>Design</span>
              </div>
            </motion.div>
          </motion.div>

          <div className="relative min-h-[800px] md:min-h-[900px]">
            
            <motion.div
              className="absolute left-0 top-40 md:top-48 w-[280px] md:w-[380px] lg:w-[420px]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="w-full aspect-[3/4] overflow-hidden relative"
                style={{ backgroundColor: 'rgba(8, 31, 92, 0.1)' }}
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <img
                  src="https://i.pravatar.cc/400?img=12"
                  alt="Alex Morgan"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div
                className="mt-8 ml-4 md:ml-8 max-w-[300px]"
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="border-l-2 pl-4 mb-4" style={{ borderColor: '#FCD34D' }}>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-2 leading-tight" style={{ color: '#081F5C' }}>
                    Alex Morgan
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(8, 31, 92, 0.6)' }}>
                    Creative Director
                  </p>
                </div>
                
                <p className="text-sm md:text-base leading-relaxed mb-4 font-light" style={{ color: 'rgba(8, 31, 92, 0.75)' }}>
                  Alex leads the creative vision at Bloom Branding.
                  With a deep love for visual storytelling and brand identity,
                  he believes great brands are built through intention,
                  consistency, and emotion—not trends.
                </p>
                
                <div className="border px-3 py-2 inline-block" style={{ borderColor: 'rgba(8, 31, 92, 0.3)', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                  <span className="text-xs font-bold tracking-wide" style={{ color: 'rgba(8, 31, 92, 0.7)' }}>
                    Creative Vision
                  </span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute right-0 top-0 md:top-8 w-[280px] md:w-[380px] lg:w-[420px]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="w-full aspect-[3/4] overflow-hidden relative"
                style={{ backgroundColor: 'rgba(8, 31, 92, 0.1)' }}
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 32, repeat: Infinity, ease: "linear", delay: 0.5 }}
              >
                <img
                  src="https://i.pravatar.cc/400?img=47"
                  alt="Jordan Lee"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div
                className="mt-8 mr-4 md:mr-8 text-right max-w-[300px] ml-auto"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="border-r-2 pr-4 mb-4" style={{ borderColor: '#FCD34D' }}>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-2 leading-tight" style={{ color: '#081F5C' }}>
                    Jordan Lee
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(8, 31, 92, 0.6)' }}>
                    Strategy Director
                  </p>
                </div>
                
                <p className="text-sm md:text-base leading-relaxed mb-4 font-light" style={{ color: 'rgba(8, 31, 92, 0.75)' }}>
                  Jordan drives strategy and digital experiences at Bloom Branding.
                  Focused on growth and clarity, she helps brands find their voice
                  and translate ideas into impactful digital narratives.
                </p>
                
                <div className="border px-3 py-2 inline-block" style={{ borderColor: 'rgba(8, 31, 92, 0.3)', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                  <span className="text-xs font-bold tracking-wide" style={{ color: 'rgba(8, 31, 92, 0.7)' }}>
                    Strategic Growth
                  </span>
                </div>
              </motion.div>
            </motion.div>

            <div className="h-[700px] md:h-[800px] lg:h-[900px]"></div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// Animated Section Wrapper
function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px", amount: 0.2 }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}

// Home Page Component
export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />

      {/* What Guides Our Work Section */}
      <AnimatedSection className="py-24 bg-white">
        <div className="container px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Guides Our Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our core principles shape every project we undertake
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: '🎨', title: 'Strategy-led Creativity', text: 'We believe great design starts with solid strategy. Every creative decision is rooted in business objectives and user needs.' },
              { icon: '📖', title: 'Story-driven Branding', text: 'We help brands tell compelling stories that resonate with their audience and create lasting connections.' },
              { icon: '🚀', title: 'Built for Digital Growth', text: 'We create digital experiences that are not just beautiful but also optimized for performance and conversion.' }
            ].map((card, index) => (
              <motion.div
                key={index}
                className="bg-white p-10 rounded-3xl border-2 border-yellow-300 hover:shadow-2xl transition-all hover:-translate-y-2 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="w-16 h-16 bg-yellow-300 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">{card.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Services Preview */}
      <AnimatedSection className="py-24 bg-[#f5f1e8]">
        <div className="container px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How We Help You Grow</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions designed to elevate your brand
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Brand Strategy', text: 'Define your positioning and create a roadmap for success' },
              { title: 'Content Creation', text: 'Compelling content that tells your story and engages audiences' },
              { title: 'Social Media', text: 'Build a powerful presence that connects and converts' },
              { title: 'Digital Experiences', text: 'Websites and apps that users love and that drive results' },
              { title: 'Production', text: 'End-to-end creative production from concept to delivery' },
              { title: 'Brand Identity', text: 'Visual systems that capture your essence and stand out' }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <button className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-800 hover:to-blue-700 transition-all shadow-lg">
              Explore All Services
            </button>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Testimonial Section */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="container px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-6xl mb-6">💬</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">What Our Clients Say</h2>
            <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 italic">
              "Working with Bloom Branding transformed our entire brand presence. They didn't just deliver beautiful design—they helped us understand who we are and how to connect with our audience authentically."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center text-2xl">
                👤
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">Michael Chen</div>
                <div className="text-gray-300">CEO, TechFlow Solutions</div>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24 bg-white">
        <div className="container px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Bloom?</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Let's create something amazing together. Schedule a free consultation to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-300 text-gray-900 px-10 py-5 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl">
                Start Your Project
              </button>
              <button className="bg-transparent border-2 border-gray-900 text-gray-900 px-10 py-5 rounded-full font-semibold text-lg hover:bg-gray-900 hover:text-white transition-all">
                View Our Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </main>
  );
}