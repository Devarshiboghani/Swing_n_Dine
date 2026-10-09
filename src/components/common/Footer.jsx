import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-brand-ivory pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col items-start">
            <img 
              src="/logo.png" 
              alt="Swing n' Dine" 
              className="h-40 md:h-48 w-auto invert brightness-0 filter contrast-200 object-contain object-left -ml-4 -mt-8 md:-mt-12 -mb-8 md:-mb-12" 
            />
            <p className="font-sans text-sm text-brand-beige/80 leading-relaxed max-w-sm mt-0 relative z-10">
              Crafting premium swings that bring timeless elegance, comfort, and character into the spaces you call home.
            </p>
          </div>

          {/* Collections Column */}
          <div>
            <h4 className="font-serif text-lg mb-6">Collections</h4>
            <ul className="space-y-4 font-sans text-sm text-brand-beige/70">
              <li><a href="#" className="hover:text-brand-terracotta transition-colors">Wooden Swings</a></li>
              <li><a href="#" className="hover:text-brand-terracotta transition-colors">Acrylic Swings</a></li>
              <li><a href="#" className="hover:text-brand-terracotta transition-colors">Wicker Swings</a></li>
              <li><a href="#" className="hover:text-brand-terracotta transition-colors">Metal Swings</a></li>
              <li><a href="#" className="hover:text-brand-terracotta transition-colors">Stand Swings</a></li>
            </ul>
          </div>

          {/* Explore Column */}
          <div>
            <h4 className="font-serif text-lg mb-6">Explore</h4>
            <ul className="space-y-4 font-sans text-sm text-brand-beige/70">
              <li><a href="#" className="hover:text-brand-terracotta transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-brand-terracotta transition-colors">Craftsmanship</a></li>
              <li><a href="#" className="hover:text-brand-terracotta transition-colors">Inspiration</a></li>
              <li><a href="#" className="hover:text-brand-terracotta transition-colors">Collections</a></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="font-serif text-lg mb-6">Connect</h4>
            <ul className="space-y-4 font-sans text-sm text-brand-beige/70">
              <li><a href="#" className="hover:text-brand-terracotta transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-brand-terracotta transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-brand-terracotta transition-colors">Pinterest</a></li>
              <li><a href="#" className="hover:text-brand-terracotta transition-colors">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-beige/20 flex flex-col md:flex-row items-center justify-between font-sans text-xs text-brand-beige/50">
          <p>© 2026 Swing n' Dine. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-ivory transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-ivory transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
