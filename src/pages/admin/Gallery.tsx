import { useState } from "react";
import { useCMS } from "@/context/CMSContext";
import { Plus, Trash2, X } from "lucide-react";
import { toast } from "sonner";

const AdminGallery = () => {
  const { gallery, addGalleryImage, deleteGalleryImage } = useCMS();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ src: "", alt: "", category: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addGalleryImage({ id: `img-${Date.now()}`, ...form });
    toast.success("Image added to gallery");
    setForm({ src: "", alt: "", category: "" });
    setShowForm(false);
  };

  const inputClass = "w-full px-4 py-2.5 bg-secondary text-sm border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground";

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-display font-semibold text-foreground">Gallery Management</h1>
        <button onClick={() => setShowForm(!showForm)} className="flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
          <Plus className="h-4 w-4" /> Add Image
        </button>
      </div>

      {showForm && (
        <div className="bg-card border border-border/30 p-5 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-foreground">Add Gallery Image</h2>
            <button onClick={() => setShowForm(false)}><X className="h-4 w-4 text-muted-foreground" /></button>
          </div>
          <form onSubmit={handleSubmit} className="grid sm:grid-cols-3 gap-3">
            <input value={form.src} onChange={(e) => setForm({ ...form, src: e.target.value })} placeholder="Image URL" required className={inputClass} />
            <input value={form.alt} onChange={(e) => setForm({ ...form, alt: e.target.value })} placeholder="Alt text" required className={inputClass} />
            <div className="flex gap-2">
              <input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} placeholder="Category (e.g. Food)" required className={inputClass + " flex-1"} />
              <button type="submit" className="px-4 py-2 bg-accent text-accent-foreground text-sm font-medium hover:opacity-90">Add</button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {gallery.map((img) => (
          <div key={img.id} className="relative group aspect-square overflow-hidden bg-secondary">
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
              <button onClick={() => { deleteGalleryImage(img.id); toast.success("Image removed"); }} className="opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-destructive text-destructive-foreground">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-foreground/60 px-2 py-1">
              <p className="text-[10px] text-background truncate">{img.category} · {img.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminGallery;
