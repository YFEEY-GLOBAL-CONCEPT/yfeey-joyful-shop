import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-store py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="font-display text-2xl font-bold">
              Yfeey<span className="text-accent">.</span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/60 leading-relaxed">
              Discover quality products, unbeatable prices, and seamless online shopping at Yfeey Store.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {["Shop", "About", "Blog", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase()}`}
                  className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Categories</h4>
            <div className="flex flex-col gap-2.5">
              {["Electronics", "Fashion", "Home & Living", "Beauty", "Accessories"].map((cat) => (
                <Link
                  key={cat}
                  to="/shop"
                  className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <Mail className="h-4 w-4 text-accent" />
                support@yfeey.com
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <Phone className="h-4 w-4 text-accent" />
                +1 (800) 123-4567
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <MapPin className="h-4 w-4 text-accent" />
                Lagos, Nigeria
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © 2026 Yfeey Store. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-primary-foreground/40">
            <span className="hover:text-accent cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-accent cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
