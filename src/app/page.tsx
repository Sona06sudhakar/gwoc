'use client';

import { useState } from 'react';
import Link from 'next/link';

// Header Component
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-2xl">🌸</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Bloom</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-yellow-500 font-semibold transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-yellow-500 font-semibold transition-colors"
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="text-gray-700 hover:text-yellow-500 font-semibold transition-colors"
            >
              Services
            </Link>
            <Link 
              href="/work" 
              className="text-gray-700 hover:text-yellow-500 font-semibold transition-colors"
            >
              Work
            </Link>
            <Link 
              href="/profile" 
              className="text-gray-700 hover:text-yellow-500 font-semibold transition-colors"
            >
              Profile
            </Link>
            <Link 
              href="/contact" 
              className="bg-yellow-300 text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-4 space-y-4 border-t pt-4">
            <Link 
              href="/" 
              className="block text-gray-700 hover:text-yellow-500 font-semibold py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block text-gray-700 hover:text-yellow-500 font-semibold py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="block text-gray-700 hover:text-yellow-500 font-semibold py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/work" 
              className="block text-gray-700 hover:text-yellow-500 font-semibold py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </Link>
            <Link 
              href="/profile" 
              className="block text-gray-700 hover:text-yellow-500 font-semibold py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Profile
            </Link>
            <Link 
              href="/contact" 
              className="block bg-yellow-300 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

// Home Page Component
export default function Home() {
  return (
    <main>
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center relative overflow-hidden" 
        style={{
          background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
        }}
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Let Your Brand <span className="text-yellow-300">Bloom</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed text-gray-200">
            We craft meaningful brand identities and digital experiences that help businesses grow with clarity and confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-yellow-300 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg">
              Let's Bloom Together
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all">
              View Our Work
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">150+</div>
              <div className="text-sm text-gray-300">Brands Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">500+</div>
              <div className="text-sm text-gray-300">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">98%</div>
              <div className="text-sm text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">12+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#f5f1e8] py-24">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About Bloom Branding</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We are a passionate team of brand strategists, designers, and digital experts dedicated to helping businesses like yours thrive in today's competitive landscape.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-300 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Strategic Approach</h3>
                    <p className="text-gray-600">We don't just make things look pretty—we create brands that drive business results.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-300 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Creative Excellence</h3>
                    <p className="text-gray-600">Our team brings fresh perspectives and innovative solutions to every project.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-300 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">True Partnership</h3>
                    <p className="text-gray-600">We work closely with you to ensure your vision comes to life authentically.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-900 to-purple-900 p-10 rounded-3xl text-white">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg leading-relaxed mb-6">
                  To help every brand we work with discover their unique story and express it with clarity, confidence, and creativity.
                </p>
                <p className="text-gray-300">
                  We believe that when brands bloom, businesses thrive, and communities flourish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Guides Our Work Section */}
      <section className="py-24 bg-white">
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Guides Our Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our core principles shape every project we undertake
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white p-10 rounded-3xl border-2 border-yellow-300 hover:shadow-2xl transition-all hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-yellow-300 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Strategy-led Creativity</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe great design starts with solid strategy. Every creative decision is rooted in business objectives and user needs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-10 rounded-3xl border-2 border-yellow-300 hover:shadow-2xl transition-all hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-yellow-300 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">📖</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Story-driven Branding</h3>
              <p className="text-gray-600 leading-relaxed">
                We help brands tell compelling stories that resonate with their audience and create lasting connections.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-10 rounded-3xl border-2 border-yellow-300 hover:shadow-2xl transition-all hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-yellow-300 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Built for Digital Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                We create digital experiences that are not just beautiful but also optimized for performance and conversion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-[#f5f1e8]">
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How We Help You Grow</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions designed to elevate your brand
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Brand Strategy</h3>
              <p className="text-gray-600">Define your positioning and create a roadmap for success</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Content Creation</h3>
              <p className="text-gray-600">Compelling content that tells your story and engages audiences</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Social Media</h3>
              <p className="text-gray-600">Build a powerful presence that connects and converts</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Digital Experiences</h3>
              <p className="text-gray-600">Websites and apps that users love and that drive results</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Production</h3>
              <p className="text-gray-600">End-to-end creative production from concept to delivery</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Brand Identity</h3>
              <p className="text-gray-600">Visual systems that capture your essence and stand out</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-800 hover:to-blue-700 transition-all shadow-lg">
              Explore All Services
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center">
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
          </div>
        </div>
      </section>
    </main>
  );
}