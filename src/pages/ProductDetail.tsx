import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, ShoppingCart, Heart, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen pt-[var(--nav-height)] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-display font-bold text-foreground mb-2">Product Not Found</h2>
          <Link to="/shop" className="text-accent hover:underline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) addToCart(product);
    toast.success(`${qty}x ${product.name} added to cart`);
  };

  return (
    <div className="min-h-screen pt-[var(--nav-height)]">
      <div className="container-store py-8">
        <Link to="/shop" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="aspect-square rounded-2xl overflow-hidden bg-secondary">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <span className="text-xs text-accent font-semibold uppercase tracking-wider">{product.category}</span>
            <h1 className="text-3xl font-display font-bold text-foreground mt-2 mb-3">{product.name}</h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? "fill-accent text-accent" : "text-border"}`} />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-foreground">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
                  <span className="bg-accent/10 text-accent text-xs font-bold px-2.5 py-1 rounded-full">-{discount}%</span>
                </>
              )}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

            {product.specs && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-foreground mb-2">Key Features</h3>
                <div className="flex flex-wrap gap-2">
                  {product.specs.map((spec) => (
                    <span key={spec} className="text-xs bg-secondary text-muted-foreground px-3 py-1.5 rounded-full">{spec}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center gap-1 mb-4">
              <span className={`w-2 h-2 rounded-full ${product.inStock ? "bg-green-500" : "bg-destructive"}`} />
              <span className="text-sm text-muted-foreground">{product.inStock ? "In Stock" : "Out of Stock"}</span>
            </div>

            {/* Quantity + Add */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-border rounded-full">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-2.5 text-muted-foreground hover:text-foreground">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 text-sm font-medium text-foreground">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="p-2.5 text-muted-foreground hover:text-foreground">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-accent-foreground font-semibold rounded-full hover:opacity-90 transition-opacity"
              >
                <ShoppingCart className="h-4 w-4" /> Add to Cart
              </button>
              <button className="p-3.5 border-2 border-border rounded-full text-muted-foreground hover:text-accent hover:border-accent transition-colors">
                <Heart className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl font-display font-bold text-foreground mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>

      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetail;
