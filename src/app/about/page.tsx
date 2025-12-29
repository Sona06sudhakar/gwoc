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

export default function AboutPage() {
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
            About <span className="text-yellow-300">Bloom Branding</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            A creative studio focused on strategy, storytelling, and visual identity. 
            We help brands connect meaningfully with their audience.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                Bloom Branding was born from a simple belief: every brand has a unique story worth telling. 
                In a world saturated with noise, we help businesses cut through the clutter and create 
                authentic connections with their audiences.
              </p>
              <p>
                We're not just designers or strategists—we're brand cultivators. Like tending to a garden, 
                we nurture each brand's identity, helping it grow from seed to full bloom. Our approach 
                combines strategic thinking with creative execution to deliver results that matter.
              </p>
              <p>
                What sets us apart is our commitment to understanding your vision deeply before we ever 
                put pen to paper. We believe in collaboration, transparency, and creating work that not 
                only looks beautiful but drives real business results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-[#f5f1e8]">
        <div className="container px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">What We Stand For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Purposeful Design</h3>
              <p className="text-gray-600">
                Every element serves a purpose. We create with intention, ensuring form and function work in harmony.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-3">True Partnership</h3>
              <p className="text-gray-600">
                Your success is our success. We invest ourselves fully in every project, treating your brand as our own.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence Always</h3>
              <p className="text-gray-600">
                We don't settle for good enough. Every detail matters, and we're committed to delivering exceptional quality.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Growth Mindset</h3>
              <p className="text-gray-600">
                We're always learning, evolving, and pushing boundaries to deliver innovative solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Creative Courage</h3>
              <p className="text-gray-600">
                We're not afraid to take bold creative risks when they serve your brand's vision and goals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Authentic Expression</h3>
              <p className="text-gray-600">
                We help brands find their true voice and express it with clarity and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="container px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Bloom Together?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's create something amazing for your brand
          </p>
          <button className="bg-yellow-300 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-colors">
            Start Your Project
          </button>
        </div>
      </section>
    </main>
  );
}