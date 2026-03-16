import { Leaf, Heart, Users, Award } from "lucide-react";
import Footer from "@/components/Footer";

const values = [
  { icon: Heart, title: "Passion", desc: "Every dish is made with love and dedication to the craft." },
  { icon: Leaf, title: "Fresh Ingredients", desc: "Locally sourced, seasonal produce for the finest flavors." },
  { icon: Users, title: "Community", desc: "A place where everyone feels welcome and at home." },
  { icon: Award, title: "Excellence", desc: "Striving for perfection in every plate we serve." },
];

const About = () => {
  return (
    <div className="min-h-screen pt-[var(--nav-height)]">
      <section className="bg-secondary py-20">
        <div className="container-restaurant max-w-3xl text-center">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">About Us</span>
          <h1 className="text-4xl sm:text-5xl font-display font-semibold text-foreground mt-2 mb-4">Our Story</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Founded by Chef Marco Bellini, Yfeey Hub brings together the finest seasonal ingredients with techniques refined over two decades.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-restaurant">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-semibold text-foreground mb-4">From Farm to Table</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                What started as a small neighborhood bistro has grown into one of the city's most beloved dining destinations. Our philosophy is simple: let the ingredients speak for themselves.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We work directly with local farmers and artisans to bring you the freshest seasonal produce, sustainable seafood, and premium cuts — all prepared with care in our open kitchen.
              </p>
            </div>
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80"
                alt="Chef preparing dishes"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container-restaurant">
          <h2 className="text-3xl font-display font-semibold text-foreground text-center mb-12">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card p-6 border border-border/30 text-center">
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
