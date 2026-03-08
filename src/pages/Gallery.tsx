import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { galleryImages } from "@/data/restaurant";
import Footer from "@/components/Footer";

const categories = ["All", ...Array.from(new Set(galleryImages.map((img) => img.category)))];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "All" ? galleryImages : galleryImages.filter((img) => img.category === active);

  return (
    <div className="min-h-screen pt-[var(--nav-height)]">
      <section className="py-16 bg-secondary text-center">
        <div className="container-restaurant">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">Gallery</span>
          <h1 className="text-4xl sm:text-5xl font-display font-semibold text-foreground mt-2 mb-4">Our Gallery</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            A visual journey through our food, spaces, and memorable moments.
          </p>
        </div>
      </section>

      <section className="py-8 border-b border-border">
        <div className="container-restaurant flex gap-2 flex-wrap justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                active === cat ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground/70 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-restaurant">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="aspect-square rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => setLightbox(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-background/80 hover:text-background" onClick={() => setLightbox(null)}>
              <X className="h-8 w-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightbox}
              alt="Gallery"
              className="max-w-full max-h-[85vh] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;
