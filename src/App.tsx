import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import { CMSProvider } from "@/context/CMSContext";
import Navbar from "@/components/Navbar";
import AdminLayout from "@/components/AdminLayout";
import Index from "./pages/Index";
import MenuPage from "./pages/Menu";
import Order from "./pages/Order";
import Reservations from "./pages/Reservations";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminMenu from "./pages/admin/MenuManagement";
import AdminOrders from "./pages/admin/Orders";
import AdminReservations from "./pages/admin/Reservations";
import AdminGallery from "./pages/admin/Gallery";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CMSProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/order" element={<Order />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="menu" element={<AdminMenu />} />
                <Route path="orders" element={<AdminOrders />} />
                <Route path="reservations" element={<AdminReservations />} />
                <Route path="gallery" element={<AdminGallery />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </CMSProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
