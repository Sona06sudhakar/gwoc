export default function FinalCTA() {
  return (
    <section style={{ backgroundColor: 'white', padding: '80px 0' }}>
      <div className="container-custom">
        <div style={{
          background: 'linear-gradient(135deg, #0A3D91 0%, #0B5ED7 100%)',
          borderRadius: '24px',
          padding: '80px 60px',
          textAlign: 'center',
          color: 'white'
        }}>
          <h2 style={{
            fontSize: '56px',
            fontFamily: 'var(--font-playfair)',
            fontWeight: '700',
            marginBottom: '32px',
            lineHeight: '1.1'
          }}>
            Ready To Grow Your Brand?
          </h2>
          
          <p style={{
            fontSize: '18px',
            marginBottom: '40px',
            maxWidth: '600px',
            margin: '0 auto 40px',
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.95)'
          }}>
            Let's work together to create a brand identity that resonates and drives results.
          </p>

          <button style={{
            backgroundColor: 'white',
            color: '#0B5ED7',
            padding: '16px 40px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f5f5f5';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'white';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            Start A Project
          </button>
        </div>
      </div>
    </section>
  );
}