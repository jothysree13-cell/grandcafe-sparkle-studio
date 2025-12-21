import { motion } from "framer-motion";

const clients = [
  "Fujitech",
  "Hilux Auto Electric",
  "Jomis Foods",
  "Toffee Tone",
  "Centex",
  "Brillex Paint",
  "Crafics Studio",
  "JB Interior",
  "Regal Paints",
  "Artiz Interior",
  "Qtto",
  "Fujitech Express",
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
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {clients.map((client, i) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-muted/50 border border-border rounded-lg p-6 flex items-center justify-center min-h-[100px] hover:border-primary/50 hover:bg-muted transition-all duration-300"
            >
              <span className="font-display text-lg text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
