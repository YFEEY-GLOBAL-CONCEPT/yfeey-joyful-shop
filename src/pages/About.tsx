import { Heart, Target, Users, Award } from "lucide-react";
import Footer from "@/components/Footer";

const values = [
  { icon: Heart, title: "Customer First", desc: "Every decision starts with what's best for our customers." },
  { icon: Target, title: "Quality Focus", desc: "We curate only the finest products from trusted brands." },
  { icon: Users, title: "Community", desc: "Building a global community of conscious shoppers." },
  { icon: Award, title: "Excellence", desc: "Striving for excellence in every interaction." },
];

const About = () => {
  return (
    <div className="min-h-screen pt-[var(--nav-height)]">
      <section className="bg-secondary py-20">
        <div className="container-store max-w-3xl text-center">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">About Yfeey Store</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're on a mission to make premium products accessible to everyone through a seamless, 
            trustworthy online shopping experience.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-store">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 2024, Yfeey Store began with a simple idea: everyone deserves access to quality 
                products at fair prices. What started as a small online shop has grown into a marketplace 
                trusted by thousands of customers worldwide.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We carefully curate every product in our catalog, partnering with brands that share our 
                commitment to quality, sustainability, and customer satisfaction.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80"
                alt="Yfeey Store team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container-store">
          <h2 className="text-3xl font-display font-bold text-foreground text-center mb-12">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card rounded-2xl p-6 border border-border/50 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
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
