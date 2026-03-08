import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { MenuItem, MenuCategory } from "@/data/restaurant";
import { menuItems as defaultMenuItems, menuCategories as defaultCategories, galleryImages as defaultGallery } from "@/data/restaurant";

export interface Order {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  items: { item: MenuItem; quantity: number }[];
  total: number;
  status: "pending" | "confirmed" | "preparing" | "delivered" | "cancelled";
  createdAt: string;
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  specialRequest: string;
  status: "pending" | "confirmed" | "cancelled";
  createdAt: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

interface CMSContextType {
  menuItemsList: MenuItem[];
  categories: MenuCategory[];
  orders: Order[];
  reservations: Reservation[];
  gallery: GalleryImage[];
  addMenuItem: (item: MenuItem) => void;
  updateMenuItem: (id: string, item: Partial<MenuItem>) => void;
  deleteMenuItem: (id: string) => void;
  addCategory: (cat: MenuCategory) => void;
  deleteCategory: (id: string) => void;
  addOrder: (order: Order) => void;
  updateOrderStatus: (id: string, status: Order["status"]) => void;
  addReservation: (res: Reservation) => void;
  updateReservationStatus: (id: string, status: Reservation["status"]) => void;
  addGalleryImage: (img: GalleryImage) => void;
  deleteGalleryImage: (id: string) => void;
  stats: { totalOrders: number; totalRevenue: number; totalReservations: number; totalMenuItems: number };
}

const CMSContext = createContext<CMSContextType | null>(null);

export const useCMS = () => {
  const ctx = useContext(CMSContext);
  if (!ctx) throw new Error("useCMS must be inside CMSProvider");
  return ctx;
};

// Seed some demo orders/reservations
const seedOrders: Order[] = [
  { id: "o1", customerName: "Emily Parker", email: "emily@test.com", phone: "555-0101", address: "123 Main St", items: [], total: 86, status: "delivered", createdAt: "2026-03-06T18:30:00" },
  { id: "o2", customerName: "James Wilson", email: "james@test.com", phone: "555-0102", address: "456 Oak Ave", items: [], total: 124, status: "preparing", createdAt: "2026-03-07T19:00:00" },
  { id: "o3", customerName: "Sarah Chen", email: "sarah@test.com", phone: "555-0103", address: "789 Pine Rd", items: [], total: 52, status: "pending", createdAt: "2026-03-08T12:15:00" },
];

const seedReservations: Reservation[] = [
  { id: "r1", name: "Michael Brown", email: "michael@test.com", phone: "555-0201", date: "2026-03-10", time: "7:00 PM", guests: "4", specialRequest: "Anniversary dinner", status: "confirmed", createdAt: "2026-03-05T10:00:00" },
  { id: "r2", name: "Lisa Johnson", email: "lisa@test.com", phone: "555-0202", date: "2026-03-11", time: "8:00 PM", guests: "2", specialRequest: "", status: "pending", createdAt: "2026-03-07T14:30:00" },
];

export const CMSProvider = ({ children }: { children: ReactNode }) => {
  const [menuItemsList, setMenuItems] = useState<MenuItem[]>(defaultMenuItems);
  const [categories, setCategories] = useState<MenuCategory[]>(defaultCategories);
  const [orders, setOrders] = useState<Order[]>(seedOrders);
  const [reservations, setReservations] = useState<Reservation[]>(seedReservations);
  const [gallery, setGallery] = useState<GalleryImage[]>(defaultGallery);

  const addMenuItem = useCallback((item: MenuItem) => setMenuItems((p) => [...p, item]), []);
  const updateMenuItem = useCallback((id: string, updates: Partial<MenuItem>) => setMenuItems((p) => p.map((i) => (i.id === id ? { ...i, ...updates } : i))), []);
  const deleteMenuItem = useCallback((id: string) => setMenuItems((p) => p.filter((i) => i.id !== id)), []);
  const addCategory = useCallback((cat: MenuCategory) => setCategories((p) => [...p, cat]), []);
  const deleteCategory = useCallback((id: string) => setCategories((p) => p.filter((c) => c.id !== id)), []);
  const addOrder = useCallback((order: Order) => setOrders((p) => [order, ...p]), []);
  const updateOrderStatus = useCallback((id: string, status: Order["status"]) => setOrders((p) => p.map((o) => (o.id === id ? { ...o, status } : o))), []);
  const addReservation = useCallback((res: Reservation) => setReservations((p) => [res, ...p]), []);
  const updateReservationStatus = useCallback((id: string, status: Reservation["status"]) => setReservations((p) => p.map((r) => (r.id === id ? { ...r, status } : r))), []);
  const addGalleryImage = useCallback((img: GalleryImage) => setGallery((p) => [...p, img]), []);
  const deleteGalleryImage = useCallback((id: string) => setGallery((p) => p.filter((i) => i.id !== id)), []);

  const stats = {
    totalOrders: orders.length,
    totalRevenue: orders.filter((o) => o.status !== "cancelled").reduce((s, o) => s + o.total, 0),
    totalReservations: reservations.length,
    totalMenuItems: menuItemsList.length,
  };

  return (
    <CMSContext.Provider value={{ menuItemsList, categories, orders, reservations, gallery, addMenuItem, updateMenuItem, deleteMenuItem, addCategory, deleteCategory, addOrder, updateOrderStatus, addReservation, updateReservationStatus, addGalleryImage, deleteGalleryImage, stats }}>
      {children}
    </CMSContext.Provider>
  );
};
