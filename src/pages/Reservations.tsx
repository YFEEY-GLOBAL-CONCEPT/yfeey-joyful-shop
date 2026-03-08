import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, Users, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import Footer from "@/components/Footer";

const Reservations = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Reservation confirmed! We look forward to seeing you.");
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-[var(--nav-height)]">
        <section className="section-padding">
          <div className="container-restaurant max-w-lg text-center">
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
              <CheckCircle className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl font-display font-semibold text-foreground mb-4">Reservation Confirmed!</h2>
              <p className="text-muted-foreground mb-8">
                Thank you for your reservation. We've sent a confirmation to your email. We look forward to welcoming you.
              </p>
              <button onClick={() => setSubmitted(false)} className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity">
                Make Another Reservation
              </button>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-[var(--nav-height)]">
      <section className="py-16 bg-secondary text-center">
        <div className="container-restaurant">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">Reservations</span>
          <h1 className="text-4xl sm:text-5xl font-display font-semibold text-foreground mt-2 mb-4">Book Your Table</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Reserve your spot for a memorable dining experience.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-restaurant max-w-2xl">
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { icon: CalendarDays, label: "Choose Date", desc: "Select your preferred date" },
              { icon: Clock, label: "Pick Time", desc: "Choose a convenient time" },
              { icon: Users, label: "Party Size", desc: "How many guests?" },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="text-center p-5 bg-card rounded-2xl border border-border/50">
                <Icon className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-display font-semibold text-card-foreground">{label}</h3>
                <p className="text-xs text-muted-foreground mt-1">{desc}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border/50 p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-card-foreground mb-1.5 block">Full Name</label>
                <input type="text" required className="w-full px-4 py-3 bg-secondary rounded-xl text-sm border border-border focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="John Doe" />
              </div>
              <div>
                <label className="text-sm font-medium text-card-foreground mb-1.5 block">Phone Number</label>
                <input type="tel" required className="w-full px-4 py-3 bg-secondary rounded-xl text-sm border border-border focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="(212) 555-0198" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-card-foreground mb-1.5 block">Email</label>
              <input type="email" required className="w-full px-4 py-3 bg-secondary rounded-xl text-sm border border-border focus:outline-none focus:ring-2 focus:ring-accent/50" placeholder="john@example.com" />
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              <div>
                <label className="text-sm font-medium text-card-foreground mb-1.5 block">Date</label>
                <input type="date" required className="w-full px-4 py-3 bg-secondary rounded-xl text-sm border border-border focus:outline-none focus:ring-2 focus:ring-accent/50" />
              </div>
              <div>
                <label className="text-sm font-medium text-card-foreground mb-1.5 block">Time</label>
                <select required className="w-full px-4 py-3 bg-secondary rounded-xl text-sm border border-border focus:outline-none focus:ring-2 focus:ring-accent/50">
                  <option value="">Select time</option>
                  {["11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"].map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-card-foreground mb-1.5 block">Guests</label>
                <select required className="w-full px-4 py-3 bg-secondary rounded-xl text-sm border border-border focus:outline-none focus:ring-2 focus:ring-accent/50">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                  ))}
                  <option value="9+">9+ Guests</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-card-foreground mb-1.5 block">Special Requests</label>
              <textarea rows={3} className="w-full px-4 py-3 bg-secondary rounded-xl text-sm border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none" placeholder="Allergies, celebrations, seating preferences..." />
            </div>
            <button type="submit" className="w-full py-3.5 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity text-sm">
              Confirm Reservation
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reservations;
