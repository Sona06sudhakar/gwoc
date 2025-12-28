export default function SelectedWork() {
  const projects = [
    {
      title: "Brand Identity for Studio Vale",
      tags: ["Branding", "Digital", "Strategy"],
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop"
    },
    {
      title: "Social Media Campaign for Bloomwear",
      tags: ["Social Media", "Content", "Visual Design"],
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop"
    },
    {
      title: "Digital Branding for Atelier Co.",
      tags: ["Web", "Digital Experience", "Branding"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    }
  ];

  return (
    <section style={{ backgroundColor: '#FBF5B7', padding: '80px 0' }}>
      <div className="container-custom">
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <h2 style={{
            fontSize: '48px',
            fontFamily: 'var(--font-playfair)',
            fontWeight: '700',
            color: '#2E2E2E'
          }}>
            Selected Work
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '32px',
          marginBottom: '48px'
        }}>
          {projects.map((project, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
            }}>
              <div style={{
                width: '100%',
                height: '280px',
                backgroundColor: '#e5e5e5',
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}></div>
              <div style={{ padding: '24px' }}>
                <h3 style={{
                  fontSize: '20px',
                  fontFamily: 'var(--font-playfair)',
                  fontWeight: '700',
                  marginBottom: '12px',
                  color: '#2E2E2E'
                }}>
                  {project.title}
                </h3>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} style={{
                      fontSize: '13px',
                      color: '#6B6B6B',
                      backgroundColor: '#F3F0E4',
                      padding: '4px 12px',
                      borderRadius: '12px'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button style={{
            backgroundColor: '#0B5ED7',
            color: 'white',
            padding: '14px 36px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#0a4eb7';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#0B5ED7';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}