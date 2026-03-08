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
      <section className="bg-secondary py-16 text-center">
        <div className="container-restaurant">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">Contact</span>
          <h1 className="text-4xl sm:text-5xl font-display font-semibold text-foreground mt-2 mb-4">Get in Touch</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Have a question or want to book a private event? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-restaurant">
          <div className="grid md:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 bg-secondary text-foreground border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/50" required maxLength={100} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 bg-secondary text-foreground border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/50" required maxLength={255} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className="w-full px-4 py-3 bg-secondary text-foreground border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none" required maxLength={1000} />
              </div>
              <button type="submit" className="px-7 py-3.5 bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </form>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">Visit Us</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We're located in the heart of New York City. Drop by for a meal or reach out and our team will respond within 24 hours.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "hello@restauranthub.com" },
                  { icon: Phone, label: "Phone", value: "(212) 555-0198" },
                  { icon: MapPin, label: "Address", value: "123 Culinary Ave, New York, NY 10001" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{label}</p>
                      <p className="text-sm text-muted-foreground">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border border-border/30 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2!2d-73.9857!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjIiTiA3M8KwNTknMDguNSJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Restaurant location"
                />
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
