import { motion } from "framer-motion";
import { Search, Lightbulb, Palette, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Understand",
    description: "We dive deep into your brand goals, audience, and market landscape.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Strategize",
    description: "Data-driven and insight-led planning for maximum impact.",
  },
  {
    icon: Palette,
    step: "03",
    title: "Create",
    description: "Strong visuals and compelling messaging that resonates.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Execute",
    description: "Multi-channel rollout with precision and creativity.",
  },
  {
    icon: BarChart3,
    step: "05",
    title: "Optimize",
    description: "Continuous improvement for better ROI and results.",
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm uppercase tracking-widest">How We Work</span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mt-4">
            OUR PROCESS
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-body">
            Strategy First. Creativity Next. Results Always.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative group"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon Circle */}
                  <div className="relative z-10 w-20 h-20 rounded-full bg-card border-2 border-border flex items-center justify-center mb-6 group-hover:border-primary group-hover:shadow-glow transition-all duration-500">
                    <step.icon className="text-muted-foreground group-hover:text-primary transition-colors duration-300" size={32} />
                  </div>
                  
                  {/* Step Number */}
                  <span className="font-display text-5xl text-primary/20 mb-2">{step.step}</span>
                  
                  <h3 className="font-display text-xl text-foreground mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm font-body">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
