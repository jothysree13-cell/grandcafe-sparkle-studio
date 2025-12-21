import { motion } from "framer-motion";
import { 
  Store, Utensils, GraduationCap, Home, Paintbrush, Factory, 
  Smartphone, Cpu, Fuel, Car, Plane, Leaf, Scissors, Shirt 
} from "lucide-react";

const industries = [
  { icon: Store, name: "Brands & Startups" },
  { icon: Utensils, name: "Food Products" },
  { icon: GraduationCap, name: "Education" },
  { icon: Home, name: "Interiors" },
  { icon: Paintbrush, name: "Paint" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Smartphone, name: "Electronics" },
  { icon: Cpu, name: "Technology" },
  { icon: Fuel, name: "Petroleum" },
  { icon: Car, name: "Automotive" },
  { icon: Plane, name: "Travel & Tourism" },
  { icon: Leaf, name: "Spices" },
  { icon: Scissors, name: "Salon" },
  { icon: Shirt, name: "Clothing" },
];

export const IndustriesSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm uppercase tracking-widest">Expertise Across</span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mt-4">
            INDUSTRIES WE SERVE
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group flex flex-col items-center gap-3 p-4 rounded-lg bg-muted/30 border border-transparent hover:border-primary/30 hover:bg-muted/50 transition-all duration-300"
            >
              <industry.icon className="text-muted-foreground group-hover:text-primary transition-colors duration-300" size={28} />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center font-body">
                {industry.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
