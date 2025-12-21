import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)`
        }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl md:text-6xl text-primary-foreground mb-6">
            READY TO CREATE SOMETHING AMAZING?
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 font-body max-w-2xl mx-auto">
            Let's collaborate to build powerful brand experiences that drive real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="xl" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-display text-lg tracking-wider uppercase hover:scale-105 transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              size="xl" 
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary font-display text-lg tracking-wider uppercase hover:scale-105 transition-all duration-300"
            >
              View Our Work
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
