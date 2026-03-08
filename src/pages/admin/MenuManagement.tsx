import { useState } from "react";
import { useCMS } from "@/context/CMSContext";
import { Plus, Trash2, Edit2, X } from "lucide-react";
import { toast } from "sonner";
import type { MenuItem } from "@/data/restaurant";

const AdminMenu = () => {
  const { menuItemsList, categories, addMenuItem, updateMenuItem, deleteMenuItem, addCategory, deleteCategory } = useCMS();
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", description: "", price: "", category: "", image: "", tags: "", featured: false, popular: false });
  const [newCat, setNewCat] = useState({ name: "", description: "" });
  const [showCatForm, setShowCatForm] = useState(false);

  const resetForm = () => {
    setForm({ name: "", description: "", price: "", category: "", image: "", tags: "", featured: false, popular: false });
    setEditingId(null);
    setShowForm(false);
  };

  const handleEdit = (item: MenuItem) => {
    setForm({ name: item.name, description: item.description, price: String(item.price), category: item.category, image: item.image, tags: item.tags?.join(", ") || "", featured: !!item.featured, popular: !!item.popular });
    setEditingId(item.id);
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data: MenuItem = {
      id: editingId || `item-${Date.now()}`,
      name: form.name,
      description: form.description,
      price: parseFloat(form.price),
      category: form.category,
      image: form.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
      tags: form.tags ? form.tags.split(",").map((t) => t.trim()) : undefined,
      featured: form.featured,
      popular: form.popular,
    };
    if (editingId) {
      updateMenuItem(editingId, data);
      toast.success("Menu item updated");
    } else {
      addMenuItem(data);
      toast.success("Menu item added");
    }
    resetForm();
  };

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    addCategory({ id: newCat.name.toLowerCase().replace(/\s+/g, "-"), name: newCat.name, description: newCat.description });
    toast.success("Category added");
    setNewCat({ name: "", description: "" });
    setShowCatForm(false);
  };

  const inputClass = "w-full px-4 py-2.5 bg-secondary text-sm border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground";

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-display font-semibold text-foreground">Menu Management</h1>
        <div className="flex gap-2">
          <button onClick={() => setShowCatForm(!showCatForm)} className="flex items-center gap-1.5 px-4 py-2 bg-secondary text-foreground text-sm font-medium hover:bg-secondary/80 transition-colors">
            <Plus className="h-4 w-4" /> Category
          </button>
          <button onClick={() => { resetForm(); setShowForm(true); }} className="flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
            <Plus className="h-4 w-4" /> Add Item
          </button>
        </div>
      </div>

      {/* Category Form */}
      {showCatForm && (
        <div className="bg-card border border-border/30 p-5 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-foreground">Add Category</h2>
            <button onClick={() => setShowCatForm(false)}><X className="h-4 w-4 text-muted-foreground" /></button>
          </div>
          <form onSubmit={handleAddCategory} className="flex gap-3">
            <input value={newCat.name} onChange={(e) => setNewCat({ ...newCat, name: e.target.value })} placeholder="Category name" required className={inputClass + " flex-1"} />
            <input value={newCat.description} onChange={(e) => setNewCat({ ...newCat, description: e.target.value })} placeholder="Description" className={inputClass + " flex-1"} />
            <button type="submit" className="px-4 py-2 bg-accent text-accent-foreground text-sm font-medium hover:opacity-90">Add</button>
          </form>
          <div className="flex gap-2 flex-wrap mt-3">
            {categories.map((c) => (
              <span key={c.id} className="inline-flex items-center gap-1 px-3 py-1 bg-secondary text-sm text-foreground">
                {c.name}
                <button onClick={() => { deleteCategory(c.id); toast.success("Category deleted"); }} className="text-muted-foreground hover:text-destructive"><X className="h-3 w-3" /></button>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Menu Item Form */}
      {showForm && (
        <div className="bg-card border border-border/30 p-5 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-foreground">{editingId ? "Edit Item" : "Add Menu Item"}</h2>
            <button onClick={resetForm}><X className="h-4 w-4 text-muted-foreground" /></button>
          </div>
          <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Item name" required className={inputClass} />
            <input value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} placeholder="Price" type="number" step="0.01" required className={inputClass} />
            <input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} placeholder="Image URL" className={inputClass} />
            <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} required className={inputClass}>
              <option value="">Select category</option>
              {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
            <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Description" required className={inputClass + " sm:col-span-2 resize-none"} rows={2} />
            <input value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} placeholder="Tags (comma-separated)" className={inputClass} />
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 text-sm text-foreground">
                <input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} className="accent-accent" /> Featured
              </label>
              <label className="flex items-center gap-2 text-sm text-foreground">
                <input type="checkbox" checked={form.popular} onChange={(e) => setForm({ ...form, popular: e.target.checked })} className="accent-accent" /> Popular
              </label>
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                {editingId ? "Update Item" : "Add Item"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Items Table */}
      <div className="bg-card border border-border/30 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/30 bg-secondary">
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Item</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Category</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Price</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Tags</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {menuItemsList.map((item) => (
              <tr key={item.id} className="border-b border-border/20 hover:bg-secondary/50 transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <img src={item.image} alt={item.name} className="w-10 h-10 object-cover" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.name}</p>
                      <p className="text-xs text-muted-foreground truncate max-w-[200px]">{item.description}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-muted-foreground capitalize">{item.category}</td>
                <td className="px-4 py-3 text-sm font-medium text-foreground">${item.price}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-1 flex-wrap">
                    {item.tags?.map((t) => <span key={t} className="text-[10px] px-2 py-0.5 bg-accent/10 text-accent">{t}</span>)}
                    {item.featured && <span className="text-[10px] px-2 py-0.5 bg-primary/10 text-primary">Featured</span>}
                  </div>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button onClick={() => handleEdit(item)} className="p-1.5 text-muted-foreground hover:text-foreground"><Edit2 className="h-4 w-4" /></button>
                    <button onClick={() => { deleteMenuItem(item.id); toast.success("Item deleted"); }} className="p-1.5 text-muted-foreground hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminMenu;
