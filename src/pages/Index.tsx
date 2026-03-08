import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, RotateCcw, Star } from "lucide-react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { products, categories, testimonials, blogPosts } from "@/data/products";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Index = () => {
  const featuredProducts = products.filter((p) => p.featured);
  const bestSellers = products.filter((p) => p.bestSeller);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
        </div>
        <div className="container-store relative z-10 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
                New Collection 2026
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1] mb-6">
                Smart Shopping Starts at{" "}
                <span className="text-gradient">Yfeey Store</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
                Discover quality products, unbeatable prices, and seamless online
                shopping — all in one place.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-accent-foreground font-semibold rounded-full hover:opacity-90 transition-opacity"
                >
                  Shop Now <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-foreground/15 text-foreground font-semibold rounded-full hover:border-accent hover:text-accent transition-colors"
                >
                  Browse Categories
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
                alt="Yfeey Store hero"
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-6 border-b border-border">
        <div className="container-store flex flex-wrap justify-center gap-8 md:gap-16 text-muted-foreground">
          {[
            { icon: Truck, text: "Free Shipping Over $100" },
            { icon: Shield, text: "Secure Payments" },
            { icon: RotateCcw, text: "30-Day Returns" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-sm">
              <Icon className="h-4 w-4 text-accent" />
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container-store">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground">Featured Products</h2>
              <p className="text-muted-foreground mt-2">Handpicked just for you</p>
            </div>
            <Link to="/shop" className="text-sm font-medium text-accent hover:underline flex items-center gap-1">
              View All <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-secondary">
        <div className="container-store">
          <h2 className="text-3xl font-display font-bold text-foreground text-center mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-center mb-10">Find exactly what you're looking for</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link
                  to="/shop"
                  className="card-hover bg-card rounded-2xl p-6 text-center border border-border/50 block"
                >
                  <span className="text-4xl mb-3 block">{cat.icon}</span>
                  <h3 className="font-semibold text-sm text-card-foreground">{cat.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{cat.count} Products</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20">
        <div className="container-store">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground">Best Sellers</h2>
              <p className="text-muted-foreground mt-2">What our customers love</p>
            </div>
            <Link to="/shop" className="text-sm font-medium text-accent hover:underline flex items-center gap-1">
              View All <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {bestSellers.map((product, i) => (
              <motion.div
                key={product.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-store text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">Limited Time Offer</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3 mb-4">
              Get Up to 30% Off This Season
            </h2>
            <p className="text-primary-foreground/60 max-w-md mx-auto mb-8">
              Shop our exclusive seasonal collection with incredible discounts on premium products.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-accent-foreground font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              Shop the Sale <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container-store">
          <h2 className="text-3xl font-display font-bold text-foreground text-center mb-4">
            What Customers Say
          </h2>
          <p className="text-muted-foreground text-center mb-10">Trusted by thousands of happy shoppers</p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-card rounded-2xl p-6 border border-border/50">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-card-foreground/80 leading-relaxed mb-4">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-card-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-secondary">
        <div className="container-store">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground">From the Blog</h2>
              <p className="text-muted-foreground mt-2">Tips, trends, and shopping guides</p>
            </div>
            <Link to="/blog" className="text-sm font-medium text-accent hover:underline flex items-center gap-1">
              All Posts <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to="/blog"
                className="card-hover bg-card rounded-2xl overflow-hidden border border-border/50 block"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs text-accent font-medium">{post.category}</span>
                  <h3 className="font-semibold text-card-foreground mt-1 mb-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  <p className="text-xs text-muted-foreground mt-3">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container-store max-w-2xl text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            Stay in the Loop
          </h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to get exclusive offers, style tips, and new arrival alerts.
          </p>
          <form
            className="flex gap-3 max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              toast("Thanks for subscribing! 🎉");
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 bg-secondary text-foreground rounded-full text-sm border border-border focus:outline-none focus:ring-2 focus:ring-accent/50"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-accent-foreground text-sm font-semibold rounded-full hover:opacity-90 transition-opacity"
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
