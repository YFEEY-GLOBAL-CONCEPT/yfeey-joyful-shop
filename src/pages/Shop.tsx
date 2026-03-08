import { useState, useMemo } from "react";
import { SlidersHorizontal } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { products, categories } from "@/data/products";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  const filtered = useMemo(() => {
    let result = selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

    switch (sortBy) {
      case "price-low": return [...result].sort((a, b) => a.price - b.price);
      case "price-high": return [...result].sort((a, b) => b.price - a.price);
      case "rating": return [...result].sort((a, b) => b.rating - a.rating);
      default: return result;
    }
  }, [selectedCategory, sortBy]);

  return (
    <div className="min-h-screen pt-[var(--nav-height)]">
      <section className="bg-secondary py-12">
        <div className="container-store">
          <h1 className="text-3xl font-display font-bold text-foreground">Shop All Products</h1>
          <p className="text-muted-foreground mt-2">Browse our curated collection of premium products</p>
        </div>
      </section>

      <section className="py-10">
        <div className="container-store">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 text-sm rounded-full font-medium transition-colors ${
                  selectedCategory === "all"
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-sm rounded-full font-medium transition-colors ${
                    selectedCategory === cat.id
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 text-sm bg-secondary text-foreground rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent/50"
            >
              <option value="popular">Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-16">No products found in this category.</p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
