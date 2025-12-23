import { motion } from "framer-motion";
import { MapPin, Globe } from "lucide-react";

const clientLocations = [
  { name: "Kerala", country: "India" },
  { name: "Bangalore", country: "India" },
  { name: "Chennai", country: "India" },
  { name: "Mumbai", country: "India" },
  { name: "Gujarat", country: "India" },
  { name: "Rajasthan", country: "India" },
  { name: "Delhi", country: "India" },
  { name: "Dubai", country: "UAE" },
  { name: "Abu Dhabi", country: "UAE" },
  { name: "Canada", country: "North America" },
];

const regions = [
  { name: "India", count: 7, color: "bg-primary" },
  { name: "Middle East", count: 2, color: "bg-chart-2" },
  { name: "North America", count: 1, color: "bg-chart-3" },
];

export const ClientsSection = () => {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm uppercase tracking-widest">Trusted By</span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mt-4">
            OUR CLIENTS
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-2xl mx-auto">
            Serving clients across India, Middle East, and North America
          </p>
        </motion.div>

        {/* Region Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {regions.map((region, i) => (
            <div
              key={region.name}
              className="flex items-center gap-3 px-6 py-4 bg-muted/30 rounded-xl border border-border"
            >
              <Globe className="text-primary" size={24} />
              <div>
                <p className="text-foreground font-display text-lg">{region.name}</p>
                <p className="text-muted-foreground text-sm">{region.count} Location{region.count > 1 ? 's' : ''}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Location Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {clientLocations.map((location, i) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative p-4 bg-background rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group cursor-default"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                  <MapPin size={16} className="text-primary" />
                </div>
                <p className="font-display text-foreground text-sm group-hover:text-primary transition-colors">
                  {location.name}
                </p>
                <p className="text-muted-foreground text-xs mt-0.5">{location.country}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
