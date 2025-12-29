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

export default function ProfilePage() {
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
            Meet the <span className="text-yellow-300">Founder</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            The vision and passion behind Bloom Branding
          </p>
        </div>
      </section>

      {/* Founder Profile Section */}
      <section className="py-20 bg-white">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-12 items-start">
              {/* Profile Image Placeholder */}
              <div className="md:col-span-2">
                <div className="bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-3xl aspect-square flex items-center justify-center shadow-lg">
                  <span className="text-8xl">👤</span>
                </div>
              </div>

              {/* Profile Content */}
              <div className="md:col-span-3 space-y-6">
                <div>
                  <h2 className="text-4xl font-bold mb-2">Sarah Johnson</h2>
                  <p className="text-xl text-gray-600">Founder & Creative Director</p>
                </div>

                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    With over 12 years of experience in brand strategy and design, Sarah founded Bloom Branding 
                    with a mission to help businesses discover and express their authentic identity.
                  </p>
                  <p>
                    Her journey began in a small design studio where she learned that the most successful brands 
                    aren't just visually appealing—they tell compelling stories that resonate deeply with their 
                    audiences. This insight became the foundation of Bloom Branding's philosophy.
                  </p>
                  <p>
                    Sarah believes that every brand has the potential to bloom when given the right strategy, 
                    creative direction, and nurturing. Her approach combines strategic thinking with creative 
                    excellence, ensuring that every project not only looks beautiful but drives real results.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-3xl font-bold text-blue-900">12+</div>
                    <div className="text-sm text-gray-600 mt-1">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-3xl font-bold text-blue-900">150+</div>
                    <div className="text-sm text-gray-600 mt-1">Brands Helped</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-3xl font-bold text-blue-900">20+</div>
                    <div className="text-sm text-gray-600 mt-1">Awards Won</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-[#f5f1e8]">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">The Journey</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center text-xl font-bold">
                    2012
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl flex-grow shadow-sm">
                  <h3 className="font-bold text-xl mb-2">The Beginning</h3>
                  <p className="text-gray-600">
                    Started career as a junior designer at a boutique agency, learning the fundamentals 
                    of branding and design thinking.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center text-xl font-bold">
                    2015
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl flex-grow shadow-sm">
                  <h3 className="font-bold text-xl mb-2">Creative Leadership</h3>
                  <p className="text-gray-600">
                    Promoted to Creative Director at a leading digital agency, managing teams and major 
                    client accounts across diverse industries.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center text-xl font-bold">
                    2018
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl flex-grow shadow-sm">
                  <h3 className="font-bold text-xl mb-2">Recognition & Growth</h3>
                  <p className="text-gray-600">
                    Led award-winning campaigns and realized the need for a more personalized, 
                    story-driven approach to branding.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center text-xl font-bold">
                    2021
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl flex-grow shadow-sm">
                  <h3 className="font-bold text-xl mb-2">Bloom Branding is Born</h3>
                  <p className="text-gray-600">
                    Founded Bloom Branding to bring a fresh, strategic approach to brand development 
                    and help businesses reach their full potential.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center text-xl font-bold">
                    2024
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl flex-grow shadow-sm">
                  <h3 className="font-bold text-xl mb-2">Continued Innovation</h3>
                  <p className="text-gray-600">
                    Expanded services and team, helping over 150 brands bloom and continuing to push 
                    the boundaries of creative excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Leadership Philosophy</h2>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-10 rounded-3xl">
              <p className="text-xl text-gray-700 leading-relaxed italic text-center mb-6">
                "I believe that great brands aren't built overnight—they're cultivated with care, 
                strategy, and authentic storytelling. My role is to help each brand discover its unique 
                voice and create meaningful connections with the people who matter most."
              </p>
              <p className="text-center text-gray-600 font-semibold">— Sarah Johnson</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Strategic Thinking</h3>
                <p className="text-gray-600">Every creative decision is grounded in strategy and purpose</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Collaboration</h3>
                <p className="text-gray-600">The best work comes from true partnership with clients</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Excellence</h3>
                <p className="text-gray-600">Uncompromising commitment to quality in everything we create</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="container px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Interested in learning more about how we can help your brand bloom?
          </p>
          <button className="bg-yellow-300 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-colors">
            Get in Touch
          </button>
        </div>
      </section>
    </main>
  );
}