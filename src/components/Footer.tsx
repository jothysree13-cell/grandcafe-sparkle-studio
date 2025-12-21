import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                <span className="font-display text-2xl text-primary-foreground">G</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl tracking-wide text-foreground">GRANDCAFE</span>
                <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Productions</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Strategy First. Creativity Next. Results Always. We help brands connect, communicate, and convert.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Video Projects", "Designs", "Websites", "Blog"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              {["Advertising Solutions", "Marketing Solutions", "Content Production", "Digital & Web Solutions"].map(
                (service) => (
                  <li key={service}>
                    <span className="text-muted-foreground text-sm">{service}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary mt-1" />
                <span className="text-muted-foreground text-sm">hello@grandcafeproductions.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary mt-1" />
                <span className="text-muted-foreground text-sm">+91 XXX XXX XXXX</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-1" />
                <span className="text-muted-foreground text-sm">Creative Studios, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Grandcafe Productions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
