import { Link } from "react-router-dom";
import { ArrowRight, Clock, MapPin, Star, UtensilsCrossed } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import MenuItemCard from "@/components/MenuItemCard";
import { menuItems, testimonials, galleryImages } from "@/data/restaurant";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Index = () => {
  const featured = menuItems.filter((i) => i.featured);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80"
            alt="Restaurant ambiance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="container-restaurant relative z-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-accent/20 text-accent text-xs font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              Established 2018
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-semibold text-background leading-[1.1] mb-6">
              Fresh Flavors. Memorable Dining.
            </h1>
            <p className="text-lg text-background/70 max-w-lg mb-8 leading-relaxed">
              Experience handcrafted dishes made from fresh ingredients in a warm and welcoming atmosphere.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/reservations"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity"
              >
                Reserve Table <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-background/30 text-background font-medium rounded-full hover:bg-background/10 transition-colors"
              >
                View Menu
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info bar */}
      <section className="py-6 bg-primary text-primary-foreground">
        <div className="container-restaurant flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { icon: Clock, text: "Open Daily 11am – 10pm" },
            { icon: MapPin, text: "123 Culinary Ave, NYC" },
            { icon: UtensilsCrossed, text: "Fine Dining & Bar" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <Icon className="h-4 w-4 text-accent" />
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="section-padding">
        <div className="container-restaurant">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground mt-2 mb-5">
                A Passion for Exceptional Cuisine
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded by Chef Marco Bellini, RestaurantHub brings together the finest seasonal ingredients with techniques refined over two decades of culinary mastery.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every dish tells a story — from our locally sourced produce to our house-made pastas and carefully curated wine selection.
              </p>
              <Link to="/about" className="text-sm font-medium text-primary hover:text-accent transition-colors flex items-center gap-1">
                Read Our Story <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=700&q=80"
                alt="Chef preparing food"
                className="rounded-3xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="section-padding bg-secondary">
        <div className="container-restaurant">
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">Chef's Selection</span>
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground mt-2">
              Signature Dishes
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto">
              Our most celebrated creations, crafted with passion and the finest ingredients.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((item, i) => (
              <motion.div key={item.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <MenuItemCard item={item} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/menu" className="inline-flex items-center gap-2 px-7 py-3 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
              View Full Menu <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="section-padding">
        <div className="container-restaurant">
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">Gallery</span>
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground mt-2">
              A Feast for the Eyes
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.slice(0, 4).map((img) => (
              <div key={img.id} className="aspect-square rounded-2xl overflow-hidden">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/gallery" className="text-sm font-medium text-primary hover:text-accent transition-colors flex items-center gap-1 justify-center">
              View All Photos <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-restaurant">
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">Reviews</span>
            <h2 className="text-3xl sm:text-4xl font-display font-semibold mt-2">What Our Guests Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-primary-foreground/80 leading-relaxed mb-4">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-primary-foreground/50">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="section-padding">
        <div className="container-restaurant text-center max-w-2xl">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">Reserve</span>
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground mt-2 mb-4">
            Book Your Table
          </h2>
          <p className="text-muted-foreground mb-8">
            Join us for an unforgettable dining experience. Reserve your table and let us take care of the rest.
          </p>
          <Link
            to="/reservations"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            Make a Reservation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-secondary">
        <div className="container-restaurant max-w-2xl text-center">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to receive special offers, seasonal menu updates, and exclusive event invitations.
          </p>
          <form
            className="flex gap-3 max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Thanks for subscribing! 🎉");
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 bg-card text-foreground rounded-full text-sm border border-border focus:outline-none focus:ring-2 focus:ring-accent/50"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
