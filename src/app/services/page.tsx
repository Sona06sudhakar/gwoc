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

export default function ServicesPage() {
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
            What We Help <span className="text-yellow-300">You Create</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive branding and digital solutions tailored to help your business bloom
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#f5f1e8]">
        <div className="container px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Service 1 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-yellow-300 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Brand Strategy</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We develop comprehensive brand strategies that define your positioning, voice, and visual identity. 
                From brand audits to competitive analysis, we lay the foundation for your brand's success.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Brand positioning & messaging</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Competitive research & analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Target audience identification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Brand guidelines & systems</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-yellow-300 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">✍️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Content Creation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Compelling content that tells your brand story and engages your audience. We create everything 
                from copy to visual content that resonates and converts.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Copywriting & brand storytelling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Visual content & photography</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Video production & editing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Content strategy & planning</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-yellow-300 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Social Media Branding</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Build a powerful social presence that connects with your audience. We develop strategies and 
                create content that drives engagement and builds community.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Social media strategy & planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Content calendar development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Community management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Social media graphics & templates</span>
                </li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-yellow-300 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">💻</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Digital Experiences</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Beautiful, functional digital experiences that convert visitors into customers. From websites 
                to apps, we create interfaces that users love.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Website design & development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>E-commerce solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>UI/UX design & prototyping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Mobile app design</span>
                </li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow md:col-span-2">
              <div className="w-16 h-16 bg-yellow-300 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎬</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Production</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                End-to-end production services that bring your brand to life. From concept to final delivery, 
                we handle every aspect of the creative process with precision and care.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Photography & videography</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Motion graphics & animation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Audio production & editing</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Brand collateral & print design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Packaging design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Environmental graphics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-bold text-xl mb-2">Discovery</h3>
              <p className="text-gray-600">We learn about your brand, goals, and audience</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-bold text-xl mb-2">Strategy</h3>
              <p className="text-gray-600">We develop a roadmap for your brand's success</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-bold text-xl mb-2">Creation</h3>
              <p className="text-gray-600">We bring your brand to life with exceptional design</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="font-bold text-xl mb-2">Growth</h3>
              <p className="text-gray-600">We launch and optimize for continued success</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="container px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Let's Grow Your Brand</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to elevate your brand with our services?
          </p>
          <button className="bg-yellow-300 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-colors">
            Get Started Today
          </button>
        </div>
      </section>
    </main>
  );
}