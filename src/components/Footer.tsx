import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-restaurant py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="font-display text-2xl font-bold">
              Restaurant<span className="text-accent">Hub</span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/60 leading-relaxed">
              Experience handcrafted dishes made from fresh ingredients in a warm and welcoming atmosphere.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Menu", path: "/menu" },
                { label: "Reservations", path: "/reservations" },
                { label: "Order Online", path: "/order" },
                { label: "About", path: "/about" },
                { label: "Gallery", path: "/gallery" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Hours</h4>
            <div className="flex flex-col gap-2.5 text-sm text-primary-foreground/60">
              <p>Mon – Fri: 11am – 10pm</p>
              <p>Saturday: 10am – 11pm</p>
              <p>Sunday: 10am – 9pm</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <Mail className="h-4 w-4 text-accent" /> hello@restauranthub.com
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <Phone className="h-4 w-4 text-accent" /> +44 1624 123456
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <MapPin className="h-4 w-4 text-accent" /> Douglas, Isle of Man
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-xs text-primary-foreground/40">© 2026 RestaurantHub. All rights reserved.</p>
            <p className="text-[10px] text-primary-foreground/30">build by <a href="https://yfeey.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">yfeey.com</a></p>
          </div>
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
