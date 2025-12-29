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

export default function ContactPage() {
  return (
    <main>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section 
        className="min-h-[50vh] flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%)'
        }}
      >
        <div className="container text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let's <span className="text-yellow-300">Connect</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-[#f5f1e8]">
        <div className="container px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white p-10 rounded-3xl shadow-sm">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your name"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-300 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Email</label>
                  <input 
                    type="email" 
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-300 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Company</label>
                  <input 
                    type="text" 
                    placeholder="Your company name"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-300 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Service Interested In</label>
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-300 focus:outline-none transition-colors">
                    <option>Select a service</option>
                    <option>Brand Strategy</option>
                    <option>Content Creation</option>
                    <option>Social Media Branding</option>
                    <option>Digital Experiences</option>
                    <option>Production</option>
                    <option>Multiple Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Message</label>
                  <textarea 
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-300 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-900 to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-800 hover:to-blue-700 transition-all">
                  Send Message
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Whether you're looking to build a new brand from scratch, refresh an existing one, 
                  or explore how we can help your business grow, we're here to help.
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-yellow-300 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email Us</h3>
                      <p className="text-gray-600">hello@bloombranding.com</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-yellow-300 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Call Us</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-yellow-300 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                      <p className="text-gray-600">
                        123 Creative Street<br />
                        Design District<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-yellow-300 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-2xl">🌐</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-3">Follow Us</h3>
                      <div className="flex space-x-3">
                        <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-yellow-300 transition-colors">
                          <span className="text-sm font-bold">in</span>
                        </a>
                        <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-yellow-300 transition-colors">
                          <span className="text-sm font-bold">𝕏</span>
                        </a>
                        <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-yellow-300 transition-colors">
                          <span className="text-sm font-bold">IG</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="font-bold text-xl mb-3">How long does a typical project take?</h3>
                <p className="text-gray-600">
                  Project timelines vary based on scope and complexity. A brand identity project typically 
                  takes 4-6 weeks, while a full website design and development can take 8-12 weeks. We'll 
                  provide a detailed timeline during our initial consultation.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="font-bold text-xl mb-3">What's your pricing structure?</h3>
                <p className="text-gray-600">
                  We offer both project-based and retainer pricing depending on your needs. Every project 
                  is unique, so we provide custom quotes after understanding your requirements. Contact us 
                  for a personalized proposal.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="font-bold text-xl mb-3">Do you work with startups?</h3>
                <p className="text-gray-600">
                  Absolutely! We love working with startups and helping them build strong brand foundations 
                  from day one. We offer flexible packages designed specifically for early-stage companies.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="font-bold text-xl mb-3">What industries do you specialize in?</h3>
                <p className="text-gray-600">
                  We work across various industries including technology, healthcare, retail, professional 
                  services, and more. Our strategic approach allows us to create effective branding regardless 
                  of industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}