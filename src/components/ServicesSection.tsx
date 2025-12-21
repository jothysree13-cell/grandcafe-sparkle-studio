import { motion } from "framer-motion";
import { Megaphone, TrendingUp, Video, Globe } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Advertising Solutions",
    description: "Impactful campaigns that communicate your brand message clearly and creatively.",
    features: ["Social Media Contents", "TV Commercials & Video Ads", "Theater & Outdoor Advertising", "Print & Creative Designs"],
  },
  {
    icon: TrendingUp,
    title: "Marketing Solutions",
    description: "Strategies designed to reach the right audience at the right time with the right message.",
    features: ["Digital Marketing Campaigns", "Social Media Marketing", "Brand Positioning", "Lead Generation"],
  },
  {
    icon: Video,
    title: "Content Production",
    description: "High-quality visuals that tell your brand story with power and authenticity.",
    features: ["Photography & Videography", "Product & Brand Films", "Animated Videos", "Visual Identity Design"],
  },
  {
    icon: Globe,
    title: "Digital Solutions",
    description: "Your digital presence should support and amplify your marketing goals.",
    features: ["Business Websites", "Campaign Landing Pages", "E-commerce Platforms", "SEO & CRM Automation"],
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm uppercase tracking-widest">What We Do</span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mt-4">
            OUR SERVICES
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-gradient-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-500 overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="text-primary" size={28} />
                </div>
                
                <h3 className="font-display text-2xl text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 font-body">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
