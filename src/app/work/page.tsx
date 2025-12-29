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

export default function WorkPage() {
  return (
    <main>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section 
        className="min-h-[60vh] flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%)'
        }}
      >
        <div className="container text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-yellow-300">Work</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Selected branding and digital projects that showcase our creative excellence
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-yellow-300 text-gray-900 rounded-full font-semibold hover:bg-yellow-400 transition-colors">
              All Projects
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
              Brand Identity
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
              Digital
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
              Social Media
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
              Packaging
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-[#f5f1e8]">
        <div className="container px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            
            {/* Project 1 */}
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl overflow-hidden aspect-[4/3] mb-6 relative">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-50">TECH</div>
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-2xl font-bold mb-2">TechFlow Solutions</h3>
                <p className="text-gray-600 mb-3">Complete brand identity and website design for a cutting-edge SaaS platform</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-yellow-300 rounded-full text-sm font-semibold">Brand Identity</span>
                  <span className="px-3 py-1 bg-yellow-300 rounded-full text-sm font-semibold">Web Design</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl overflow-hidden aspect-[4/3] mb-6 relative">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-50">ECO</div>
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-2xl font-bold mb-2">EcoBloom Organics</h3>
                <p className="text-gray-600 mb-3">Sustainable packaging design and brand strategy for organic wellness products</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-yellow-300 rounded-full text-sm font-semibold">Packaging</span>
                  <span className="px-3 py-1 bg-yellow-300 rounded-full text-sm font-semibold">Brand Strategy</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl overflow-hidden aspect-[4/3] mb-6 relative">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-50">FOOD</div>
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-2xl font-bold mb-2">Spice & Soul Kitchen</h3>
                <p className="text-gray-600 mb-3">Restaurant rebrand with social media strategy and content creation</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-yellow-300 rounded-full text-sm font-semibold">Rebranding</span>
                  <span className="px-3 py-1 bg-yellow-300 rounded-full text-sm font-semibold">Social Media</span>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-pink-400 to-rose-500 rounded-3xl overflow-hidden aspect-[4/3] mb-6 relative">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-50">FIT</div>
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-2xl font-bold mb-2">FlexFit Studio</h3>
                <p className="text-gray-600 mb-3">Complete digital experience with mobile app design and brand guidelines</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-yellow-300 rounded-full text-sm font-semibold">App Design</span>
                  <span className="px-3 py-1 bg-yellow-300 rounded-full text-sm font-semibold">Digital</span>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-indigo-400 to-blue-500 rounded-3xl overflow-hidden aspect-[4/3] mb-6 relative">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-50">EDU</div>
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-2xl font-bold mb-2">BrightPath Learning</h3>
                <p className="text-gray-600 mb-3">Educational platform branding with comprehensive content strategy</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-yellow-300 rounded-full text-sm font-semibold">Brand Identity</span>
                  <span className="px-3 py-1 bg-yellow-300 rounded-full text-sm font-semibold">Content</span>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-yellow-400 to-amber-500 rounded-3xl overflow-hidden aspect-[4/3] mb-6 relative">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-50">HOME</div>
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-2xl font-bold mb-2">Luxe Living Interiors</h3>
                <p className="text-gray-600 mb-3">High-end interior design firm brand refresh and portfolio website</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-yellow-300 rounded-full text-sm font-semibold">Rebranding</span>
                  <span className="px-3 py-1 bg-yellow-300 rounded-full text-sm font-semibold">Web Design</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-20 bg-white">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
                <div className="text-5xl font-bold text-blue-900 mb-2">3.2x</div>
                <div className="text-gray-600 font-semibold">Average Brand Awareness Increase</div>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl">
                <div className="text-5xl font-bold text-orange-900 mb-2">85%</div>
                <div className="text-gray-600 font-semibold">Client ROI Improvement</div>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                <div className="text-5xl font-bold text-green-900 mb-2">150+</div>
                <div className="text-gray-600 font-semibold">Successful Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center text-white">
              <div>
                <div className="inline-block px-4 py-2 bg-yellow-300 text-gray-900 rounded-full font-semibold mb-6">
                  Featured Case Study
                </div>
                <h2 className="text-4xl font-bold mb-6">TechFlow Solutions: From Startup to Industry Leader</h2>
                <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                  Discover how we helped a small SaaS startup transform into a recognized industry leader through strategic branding and digital innovation.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2">✓</span>
                    <span>300% increase in qualified leads</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2">✓</span>
                    <span>Complete brand identity overhaul</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2">✓</span>
                    <span>Award-winning website design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2">✓</span>
                    <span>Comprehensive content strategy</span>
                  </li>
                </ul>
                <button className="bg-yellow-300 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-colors">
                  Read Full Case Study
                </button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center">
                  <span className="text-white text-8xl font-bold opacity-50">TECH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#f5f1e8]">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">How We Bring Projects to Life</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Every project follows our proven creative process designed to deliver exceptional results
            </p>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="relative">
                <div className="w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="font-bold text-xl mb-2">Discovery</h3>
                <p className="text-gray-600">Deep dive into your brand, audience, and goals</p>
              </div>
              
              <div className="relative">
                <div className="w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="font-bold text-xl mb-2">Strategy</h3>
                <p className="text-gray-600">Develop a comprehensive roadmap for success</p>
              </div>
              
              <div className="relative">
                <div className="w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="font-bold text-xl mb-2">Creation</h3>
                <p className="text-gray-600">Bring your brand to life with exceptional design</p>
              </div>
              
              <div className="relative">
                <div className="w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="font-bold text-xl mb-2">Launch</h3>
                <p className="text-gray-600">Deploy and optimize for continued growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Create Something Amazing?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help your brand bloom and achieve remarkable results
          </p>
          <button className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-10 py-5 rounded-full font-semibold text-lg hover:from-blue-800 hover:to-blue-700 transition-all shadow-lg">
            Start Your Project
          </button>
        </div>
      </section>
    </main>
  );
}