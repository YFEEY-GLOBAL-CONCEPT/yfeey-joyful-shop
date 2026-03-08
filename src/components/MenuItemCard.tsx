import { Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import type { MenuItem } from "@/data/restaurant";
import { toast } from "sonner";

interface MenuItemCardProps {
  item: MenuItem;
  showAddToCart?: boolean;
}

const MenuItemCard = ({ item, showAddToCart = false }: MenuItemCardProps) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(item);
    toast.success(`${item.name} added to order`);
  };

  return (
    <div className="card-hover bg-card rounded-none overflow-hidden border border-border/30 group">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display text-lg font-semibold text-card-foreground">{item.name}</h3>
          <span className="text-primary font-semibold whitespace-nowrap">${item.price}</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5 flex-wrap">
            {item.tags?.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-accent/10 text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
          {showAddToCart && (
            <button
              onClick={handleAdd}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              <Plus className="h-3.5 w-3.5" /> Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
