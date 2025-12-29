export default function Footer() {
  return (
    <footer className="bg-background-cream border-t border-black/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif font-bold text-text-dark">
              Bloom Branding
            </h3>
            <p className="mt-3 max-w-sm text-sm text-text-muted leading-relaxed">
              Creative branding and digital experiences that help businesses
              grow with clarity and confidence.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex gap-16">
            <div>
              <p className="text-sm font-semibold text-text-dark mb-4">
                Company
              </p>
              <ul className="space-y-2 text-sm text-text-muted">
                <li>About</li>
                <li>Services</li>
                <li>Work</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-text-dark mb-4">
                Get in touch
              </p>
              <ul className="space-y-2 text-sm text-text-muted">
                <li>hello@bloombranding.com</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-black/10 text-sm text-text-muted flex flex-col sm:flex-row justify-between gap-4">
          <span>© {new Date().getFullYear()} Bloom Branding</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
