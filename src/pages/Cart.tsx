import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ArrowLeft, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Footer from "@/components/Footer";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalPrice } = useCart();
  const shipping = totalPrice > 100 ? 0 : 9.99;

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-[var(--nav-height)]">
        <div className="container-store py-20 text-center">
          <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-display font-bold text-foreground mb-2">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-6">Looks like you haven't added any items yet.</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-accent-foreground font-semibold rounded-full"
          >
            Start Shopping
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-[var(--nav-height)]">
      <div className="container-store py-10">
        <Link to="/shop" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="h-4 w-4" /> Continue Shopping
        </Link>
        <h1 className="text-3xl font-display font-bold text-foreground mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="flex gap-4 bg-card rounded-xl p-4 border border-border/50">
                <Link to={`/product/${product.id}`} className="w-24 h-24 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link to={`/product/${product.id}`} className="font-medium text-card-foreground text-sm hover:text-accent line-clamp-1">
                    {product.name}
                  </Link>
                  <p className="text-xs text-muted-foreground mt-0.5">{product.category}</p>
                  <p className="font-bold text-card-foreground mt-2">${product.price.toFixed(2)}</p>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                  <div className="flex items-center border border-border rounded-full">
                    <button onClick={() => updateQuantity(product.id, quantity - 1)} className="p-1.5 text-muted-foreground hover:text-foreground">
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="px-3 text-xs font-medium text-foreground">{quantity}</span>
                    <button onClick={() => updateQuantity(product.id, quantity + 1)} className="p-1.5 text-muted-foreground hover:text-foreground">
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-card rounded-2xl p-6 border border-border/50 h-fit sticky top-24">
            <h2 className="font-display font-bold text-lg text-card-foreground mb-5">Order Summary</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span className="text-card-foreground font-medium">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span className="text-card-foreground font-medium">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between">
                <span className="font-semibold text-card-foreground">Total</span>
                <span className="font-bold text-lg text-card-foreground">${(totalPrice + shipping).toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full mt-6 px-6 py-3.5 bg-accent text-accent-foreground font-semibold rounded-full hover:opacity-90 transition-opacity">
              Proceed to Checkout
            </button>
            {shipping > 0 && (
              <p className="text-xs text-muted-foreground text-center mt-3">
                Free shipping on orders over $100
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
