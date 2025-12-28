export default function About() {
  return (
    <section style={{ backgroundColor: '#F3F0E4', padding: '80px 0' }}>
      <div className="container-custom text-center">
        <h2 style={{
          fontSize: '48px',
          fontFamily: 'var(--font-playfair)',
          fontWeight: '700',
          marginBottom: '24px',
          color: '#0B5ED7'
        }}>
          About Bloom Branding
        </h2>
        
        <p style={{
          fontSize: '18px',
          maxWidth: '700px',
          margin: '0 auto',
          lineHeight: '1.8',
          color: '#2E2E2E'
        }}>
          We are a passionate team of brand strategists, designers, and digital experts dedicated to helping businesses like yours thrive. Through strategy, storytelling, and design we help brands grow with clarity and confidence. We focus on building meaningful digital identities that connect, engage, and last.
        </p>
      </div>
    </section>
  );
}