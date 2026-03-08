import { useCMS, type Reservation } from "@/context/CMSContext";
import { toast } from "sonner";

const statusOptions: Reservation["status"][] = ["pending", "confirmed", "cancelled"];

const AdminReservations = () => {
  const { reservations, updateReservationStatus } = useCMS();

  const handleStatus = (id: string, status: Reservation["status"]) => {
    updateReservationStatus(id, status);
    toast.success(`Reservation ${status}`);
  };

  return (
    <div>
      <h1 className="text-2xl font-display font-semibold text-foreground mb-6">Reservation Management</h1>

      <div className="bg-card border border-border/30 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/30 bg-secondary">
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Guest</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Contact</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Date & Time</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Guests</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Request</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Status</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((r) => (
              <tr key={r.id} className="border-b border-border/20 hover:bg-secondary/50 transition-colors">
                <td className="px-4 py-3 text-sm font-medium text-foreground">{r.name}</td>
                <td className="px-4 py-3">
                  <p className="text-xs text-muted-foreground">{r.email}</p>
                  <p className="text-xs text-muted-foreground">{r.phone}</p>
                </td>
                <td className="px-4 py-3 text-sm text-foreground">{r.date} at {r.time}</td>
                <td className="px-4 py-3 text-sm text-foreground">{r.guests}</td>
                <td className="px-4 py-3 text-xs text-muted-foreground max-w-[150px] truncate">{r.specialRequest || "—"}</td>
                <td className="px-4 py-3">
                  <select value={r.status} onChange={(e) => handleStatus(r.id, e.target.value as Reservation["status"])} className="text-xs px-2 py-1 bg-secondary border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-accent/50">
                    {statusOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {reservations.length === 0 && <p className="text-center text-muted-foreground py-8">No reservations yet.</p>}
      </div>
    </div>
  );
};

export default AdminReservations;
