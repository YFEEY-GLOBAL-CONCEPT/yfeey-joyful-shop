import { Link } from "react-router-dom";
import { Star, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="card-hover bg-card rounded-xl overflow-hidden border border-border/50">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {discount > 0 && (
            <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-2.5 py-1 rounded-full">
              -{discount}%
            </span>
          )}
          <button
            onClick={handleAdd}
            className="absolute bottom-3 right-3 bg-primary text-primary-foreground p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>

        {/* Info */}
        <div className="p-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            {product.category}
          </p>
          <h3 className="font-medium text-card-foreground text-sm leading-snug mb-2 line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.round(product.rating)
                    ? "fill-accent text-accent"
                    : "text-border"
                }`}
              />
            ))}
            <span className="text-[11px] text-muted-foreground ml-1">({product.reviews})</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-card-foreground">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
