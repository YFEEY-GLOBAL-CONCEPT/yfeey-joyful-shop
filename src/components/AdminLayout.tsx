import { Link, useLocation, Outlet } from "react-router-dom";
import { LayoutDashboard, UtensilsCrossed, ShoppingCart, CalendarDays, Image, Home, LogOut } from "lucide-react";

const sidebarLinks = [
  { label: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { label: "Menu Items", path: "/admin/menu", icon: UtensilsCrossed },
  { label: "Orders", path: "/admin/orders", icon: ShoppingCart },
  { label: "Reservations", path: "/admin/reservations", icon: CalendarDays },
  { label: "Gallery", path: "/admin/gallery", icon: Image },
];

const AdminLayout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border/30 flex flex-col fixed inset-y-0 left-0 z-40">
        <div className="p-6 border-b border-border/30">
          <Link to="/admin" className="font-display text-xl font-semibold text-foreground">
            Restaurant<span className="text-accent">Hub</span>
          </Link>
          <p className="text-xs text-muted-foreground mt-1">Admin CMS</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {sidebarLinks.map(({ label, path, icon: Icon }) => {
            const active = location.pathname === path;
            return (
              <Link key={path} to={path} className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium transition-colors ${active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`}>
                <Icon className="h-4 w-4" /> {label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-border/30">
          <Link to="/" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
            <Home className="h-4 w-4" /> View Website
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 ml-64">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
