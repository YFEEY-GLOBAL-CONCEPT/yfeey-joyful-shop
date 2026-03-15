import { Plus, Info } from "lucide-react";
import { useCart } from "@/context/CartContext";
import type { MenuItem } from "@/data/restaurant";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";

interface MenuItemCardProps {
  item: MenuItem;
  showAddToCart?: boolean;
}

const MenuItemCard = ({ item, showAddToCart = false }: MenuItemCardProps) => {
  const { addToCart } = useCart();

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(item);
    toast.success(`${item.name} added to order`);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="card-hover bg-card overflow-hidden border border-border/30 group cursor-pointer">
          <div className="aspect-[4/3] overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
          </div>
          <div className="p-5">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-display text-lg font-semibold text-card-foreground">{item.name}</h3>
              <span className="text-primary font-semibold whitespace-nowrap">€{item.price}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">{item.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex gap-1.5 flex-wrap">
                {item.tags?.map((tag) => (
                  <span key={tag} className="text-[10px] font-medium px-2 py-0.5 bg-accent/10 text-accent">{tag}</span>
                ))}
              </div>
              {showAddToCart && (
                <button onClick={handleAdd} className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition-opacity">
                  <Plus className="h-3.5 w-3.5" /> Add
                </button>
              )}
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">{item.name}</DialogTitle>
          <DialogDescription className="text-primary font-semibold text-lg">
            €{item.price}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="aspect-video overflow-hidden rounded-md">
            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
          </div>
          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
          <div className="flex gap-2 flex-wrap">
            {item.tags?.map((tag) => (
              <span key={tag} className="text-xs font-medium px-2 py-1 bg-accent/10 text-accent rounded-full">{tag}</span>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          {showAddToCart && (
            <button onClick={handleAdd} className="flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity rounded-md">
              <Plus className="h-4 w-4" /> Add to Order
            </button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MenuItemCard;
