import { DollarSign, ShoppingCart, CalendarDays, UtensilsCrossed } from "lucide-react";
import { useCMS } from "@/context/CMSContext";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const { stats, orders, reservations } = useCMS();

  const statCards = [
    { label: "Total Revenue", value: `£${stats.totalRevenue.toLocaleString()}`, icon: DollarSign, color: "text-accent" },
    { label: "Total Orders", value: stats.totalOrders, icon: ShoppingCart, color: "text-primary" },
    { label: "Reservations", value: stats.totalReservations, icon: CalendarDays, color: "text-accent" },
    { label: "Menu Items", value: stats.totalMenuItems, icon: UtensilsCrossed, color: "text-primary" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-display font-semibold text-foreground mb-6">Dashboard</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statCards.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-card border border-border/30 p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">{label}</span>
              <Icon className={`h-5 w-5 ${color}`} />
            </div>
            <p className="text-2xl font-semibold text-foreground">{value}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-card border border-border/30 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-lg font-semibold text-foreground">Recent Orders</h2>
            <Link to="/admin/orders" className="text-xs text-primary hover:text-accent transition-colors">View All</Link>
          </div>
          <div className="space-y-3">
            {orders.slice(0, 5).map((o) => (
              <div key={o.id} className="flex items-center justify-between py-2 border-b border-border/20 last:border-0">
                <div>
                  <p className="text-sm font-medium text-foreground">{o.customerName}</p>
                  <p className="text-xs text-muted-foreground">{new Date(o.createdAt).toLocaleDateString()}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium">£{o.total}</span>
                  <span className={`text-[10px] font-medium px-2 py-0.5 ${o.status === "delivered" ? "bg-accent/10 text-accent" : o.status === "cancelled" ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary"}`}>
                    {o.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Reservations */}
        <div className="bg-card border border-border/30 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-lg font-semibold text-foreground">Upcoming Reservations</h2>
            <Link to="/admin/reservations" className="text-xs text-primary hover:text-accent transition-colors">View All</Link>
          </div>
          <div className="space-y-3">
            {reservations.slice(0, 5).map((r) => (
              <div key={r.id} className="flex items-center justify-between py-2 border-b border-border/20 last:border-0">
                <div>
                  <p className="text-sm font-medium text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.date} at {r.time} · {r.guests} guests</p>
                </div>
                <span className={`text-[10px] font-medium px-2 py-0.5 ${r.status === "confirmed" ? "bg-accent/10 text-accent" : r.status === "cancelled" ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary"}`}>
                  {r.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
