import { motion } from "framer-motion";

const clients = [
  "Fujitec",
  "Hilux Auto Electric",
  "Jomis Foods",
  "Toffee Tone",
  "Centex",
  "Brillex Paint",
  "Crafics Studio",
  "JB Interior",
  "Regal Paints",
  "Artiz Interior",
  "QTTO",
  "Fujitec Express",
  "FinRight",
  "Suminter India Organic",
  "Spectra Decor",
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
            Partnering with leading brands across industries
          </p>
        </motion.div>

        {/* Clients Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {clients.map((client, i) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group cursor-default flex items-center justify-center min-h-[80px]"
              >
                <p className="font-display text-foreground text-sm md:text-base text-center group-hover:text-primary transition-colors">
                  {client}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
