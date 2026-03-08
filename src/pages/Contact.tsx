import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-[var(--nav-height)]">
      <section className="bg-secondary py-12">
        <div className="container-store">
          <h1 className="text-3xl font-display font-bold text-foreground">Contact Us</h1>
          <p className="text-muted-foreground mt-2">We'd love to hear from you</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-store">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary text-foreground rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                  required
                  maxLength={100}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary text-foreground rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                  required
                  maxLength={255}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary text-foreground rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                  required
                  maxLength={1000}
                />
              </div>
              <button
                type="submit"
                className="px-7 py-3.5 bg-accent text-accent-foreground font-semibold rounded-full hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-display font-bold text-foreground mb-4">Get in Touch</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Have a question, feedback, or need support? Reach out and our team will respond within 24 hours.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "support@yfeey.com" },
                  { icon: Phone, label: "Phone", value: "+1 (800) 123-4567" },
                  { icon: MapPin, label: "Address", value: "Lagos, Nigeria" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{label}</p>
                      <p className="text-sm text-muted-foreground">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
