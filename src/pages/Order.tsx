import { useState } from "react";
import { Minus, Plus, X, ArrowRight, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { menuItems, menuCategories } from "@/data/restaurant";
import MenuItemCard from "@/components/MenuItemCard";
import { toast } from "sonner";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.4 } }),
};

const OrderPage = () => {
  const { items, updateQuantity, removeFromCart, clearCart, totalPrice, totalItems } = useCart();
  const [activeCategory, setActiveCategory] = useState("all");
  const [showCheckout, setShowCheckout] = useState(false);

  const filtered = activeCategory === "all" ? menuItems : menuItems.filter((i) => i.category === activeCategory);
  const deliveryFee = totalPrice > 50 ? 0 : 5.99;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Order placed successfully! 🎉");
    clearCart();
    setShowCheckout(false);
  };

  return (
    <div className="min-h-screen pt-[var(--nav-height)]">
      <section className="py-16 bg-secondary text-center">
        <div className="container-restaurant">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">Order</span>
          <h1 className="text-4xl sm:text-5xl font-display font-semibold text-foreground mt-2 mb-4">Order Online</h1>
          <p className="text-muted-foreground max-w-md mx-auto">Browse our menu and order for delivery or pickup.</p>
        </div>
      </section>

      <div className="container-restaurant section-padding">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
              <button onClick={() => setActiveCategory("all")} className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${activeCategory === "all" ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground/70"}`}>All</button>
              {menuCategories.map((cat) => (
                <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${activeCategory === cat.id ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground/70"}`}>{cat.name}</button>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {filtered.map((item, i) => (
                <motion.div key={item.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <MenuItemCard item={item} showAddToCart />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-[calc(var(--nav-height)+2rem)] bg-card border border-border/30 p-6">
              <h3 className="font-display text-xl font-semibold text-card-foreground mb-4 flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" /> Your Order
              </h3>

              {items.length === 0 ? (
                <p className="text-sm text-muted-foreground py-8 text-center">Your order is empty. Add items from the menu.</p>
              ) : (
                <>
                  <div className="flex flex-col gap-3 mb-6 max-h-80 overflow-y-auto">
                    {items.map((ci) => (
                      <div key={ci.item.id} className="flex items-center gap-3 pb-3 border-b border-border/30">
                        <img src={ci.item.image} alt={ci.item.name} className="w-12 h-12 object-cover" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-card-foreground truncate">{ci.item.name}</p>
                          <p className="text-xs text-muted-foreground">£{ci.item.price}</p>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <button onClick={() => updateQuantity(ci.item.id, ci.quantity - 1)} className="w-6 h-6 bg-secondary flex items-center justify-center"><Minus className="h-3 w-3" /></button>
                          <span className="text-sm font-medium w-5 text-center">{ci.quantity}</span>
                          <button onClick={() => updateQuantity(ci.item.id, ci.quantity + 1)} className="w-6 h-6 bg-secondary flex items-center justify-center"><Plus className="h-3 w-3" /></button>
                        </div>
                        <button onClick={() => removeFromCart(ci.item.id)} className="text-muted-foreground hover:text-destructive"><X className="h-4 w-4" /></button>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 text-sm border-t border-border pt-4 mb-4">
                    <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>£{totalPrice.toFixed(2)}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Delivery</span><span>{deliveryFee === 0 ? "Free" : `£${deliveryFee.toFixed(2)}`}</span></div>
                    <div className="flex justify-between font-semibold text-base pt-2 border-t border-border"><span>Total</span><span>£{(totalPrice + deliveryFee).toFixed(2)}</span></div>
                  </div>

                  {!showCheckout ? (
                    <button onClick={() => setShowCheckout(true)} className="w-full py-3 bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                      Checkout <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <form onSubmit={handleCheckout} className="space-y-3">
                      <input type="text" placeholder="Full Name" required className="w-full px-4 py-2.5 bg-secondary text-sm border border-border focus:outline-none focus:ring-2 focus:ring-accent/50" />
                      <input type="tel" placeholder="Phone Number" required className="w-full px-4 py-2.5 bg-secondary text-sm border border-border focus:outline-none focus:ring-2 focus:ring-accent/50" />
                      <input type="email" placeholder="Email" required className="w-full px-4 py-2.5 bg-secondary text-sm border border-border focus:outline-none focus:ring-2 focus:ring-accent/50" />
                      <input type="text" placeholder="Delivery Address" required className="w-full px-4 py-2.5 bg-secondary text-sm border border-border focus:outline-none focus:ring-2 focus:ring-accent/50" />
                      <button type="submit" className="w-full py-3 bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity">
                        Place Order — £{(totalPrice + deliveryFee).toFixed(2)}
                      </button>
                    </form>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderPage;
