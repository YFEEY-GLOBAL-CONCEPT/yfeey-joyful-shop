import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Menu", path: "/menu" },
  { label: "Order Online", path: "/order" },
  { label: "Reservations", path: "/reservations" },
  { label: "About", path: "/about" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  const isAdmin = location.pathname.startsWith("/admin");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  if (isAdmin) return null;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-sm border-b border-border/50" : "bg-transparent"}`}>
      <div className="container-restaurant flex items-center justify-between h-[var(--nav-height)]">
        <Link to="/" className="font-display text-2xl font-semibold tracking-tight text-foreground">
          Restaurant<span className="text-accent">Hub</span>
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.path ? "text-primary" : "text-foreground/70"}`}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link to="/reservations" className="hidden sm:inline-flex px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
            Reserve Table
          </Link>
          <Link to="/order" className="relative p-2 text-foreground/70 hover:text-foreground transition-colors">
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-accent text-accent-foreground text-[10px] font-bold w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button className="lg:hidden p-2 text-foreground/70" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="lg:hidden glass border-t border-border">
            <div className="container-restaurant py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className={`text-sm font-medium py-2 ${location.pathname === link.path ? "text-primary" : "text-foreground/70"}`}>
                  {link.label}
                </Link>
              ))}
              <Link to="/reservations" className="mt-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium text-center">
                Reserve Table
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
