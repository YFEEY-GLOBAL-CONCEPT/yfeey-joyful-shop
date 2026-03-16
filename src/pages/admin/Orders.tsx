import { useCMS, type Order } from "@/context/CMSContext";
import { toast } from "sonner";

const statusOptions: Order["status"][] = ["pending", "confirmed", "preparing", "delivered", "cancelled"];

const AdminOrders = () => {
  const { orders, updateOrderStatus } = useCMS();

  const handleStatus = (id: string, status: Order["status"]) => {
    updateOrderStatus(id, status);
    toast.success(`Order status updated to ${status}`);
  };

  return (
    <div>
      <h1 className="text-2xl font-display font-semibold text-foreground mb-6">Order Management</h1>

      <div className="bg-card border border-border/30 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/30 bg-secondary">
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Order ID</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Customer</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Contact</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Total</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Date</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-b border-border/20 hover:bg-secondary/50 transition-colors">
                <td className="px-4 py-3 text-sm font-medium text-foreground">#{o.id}</td>
                <td className="px-4 py-3">
                  <p className="text-sm font-medium text-foreground">{o.customerName}</p>
                  <p className="text-xs text-muted-foreground">{o.address}</p>
                </td>
                <td className="px-4 py-3">
                  <p className="text-xs text-muted-foreground">{o.email}</p>
                  <p className="text-xs text-muted-foreground">{o.phone}</p>
                </td>
                <td className="px-4 py-3 text-sm font-medium text-foreground">£{o.total}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{new Date(o.createdAt).toLocaleDateString()}</td>
                <td className="px-4 py-3">
                  <select value={o.status} onChange={(e) => handleStatus(o.id, e.target.value as Order["status"])} className="text-xs px-2 py-1 bg-secondary border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-accent/50">
                    {statusOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {orders.length === 0 && <p className="text-center text-muted-foreground py-8">No orders yet.</p>}
      </div>
    </div>
  );
};

export default AdminOrders;
