import Header from '@/components/layout/Header';

export default function Home() {
  return (
    <main>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center" 
        style={{
          background: 'linear-gradient(180deg, var(--color-primary-dark-blue-start) 0%, var(--color-primary-dark-blue-end) 100%)'
        }}>
        <div className="container text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Let Your Brand <span className="text-yellow-300">Bloom</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10">
            We craft meaningful brand identities and digital experiences that help businesses grow with clarity and confidence.
          </p>
          <button className="bg-white text-primary-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-colors">
            Let's Bloom Together
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-background-cream py-20">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">About Bloom Branding</h2>
          <p className="max-w-3xl mx-auto text-text-muted">
            We are a passionate team of brand strategists, designers, and digital experts dedicated to helping businesses like yours thrive in today's competitive landscape.
          </p>
        </div>
      </section>

      {/* What Guides Our Work Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Guides Our Work</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Our core principles shape every project we undertake
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl border-2 border-yellow-300">
              <h3 className="text-xl font-bold mb-3">Strategy-led Creativity</h3>
              <p className="text-text-muted">
                We believe great design starts with solid strategy. Every creative decision is rooted in business objectives and user needs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl border-2 border-yellow-300">
              <h3 className="text-xl font-bold mb-3">Story-driven Branding</h3>
              <p className="text-text-muted">
                We help brands tell compelling stories that resonate with their audience and create lasting connections.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl border-2 border-yellow-300">
              <h3 className="text-xl font-bold mb-3">Built for Digital Growth</h3>
              <p className="text-text-muted">
                We create digital experiences that are not just beautiful but also optimized for performance and conversion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
