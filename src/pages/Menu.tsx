import { useState } from "react";
import { motion } from "framer-motion";
import { menuItems, menuCategories } from "@/data/restaurant";
import MenuItemCard from "@/components/MenuItemCard";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4 } }),
};

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filtered = activeCategory === "all" ? menuItems : menuItems.filter((i) => i.category === activeCategory);

  return (
    <div className="min-h-screen pt-[var(--nav-height)]">
      <section className="py-16 bg-secondary text-center">
        <div className="container-restaurant">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">Explore</span>
          <h1 className="text-4xl sm:text-5xl font-display font-semibold text-foreground mt-2 mb-4">Our Menu</h1>
          <p className="text-muted-foreground max-w-md mx-auto">Carefully crafted dishes using the finest seasonal ingredients.</p>
        </div>
      </section>

      <section className="py-8 border-b border-border sticky top-[var(--nav-height)] bg-background z-30">
        <div className="container-restaurant">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <button onClick={() => setActiveCategory("all")} className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${activeCategory === "all" ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground/70 hover:text-foreground"}`}>All</button>
            {menuCategories.map((cat) => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${activeCategory === cat.id ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground/70 hover:text-foreground"}`}>{cat.name}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-restaurant">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <motion.div key={item.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <MenuItemCard item={item} />
              </motion.div>
            ))}
          </div>
          {filtered.length === 0 && <p className="text-center text-muted-foreground py-12">No items in this category yet.</p>}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MenuPage;
