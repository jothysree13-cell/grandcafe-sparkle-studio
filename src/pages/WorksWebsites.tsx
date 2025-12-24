import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ExternalLink, Monitor, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const websiteProjects = [
  {
    title: "Fujitech Corporate",
    category: "Business Website",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    description: "Modern corporate website with advanced product showcase and dealer locator.",
    tags: ["React", "SEO", "Responsive"],
  },
  {
    title: "Crafics Studio Portfolio",
    category: "Portfolio Website",
    thumbnail: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
    description: "Creative portfolio showcasing design works with immersive galleries.",
    tags: ["Animation", "Gallery", "CMS"],
  },
  {
    title: "Jomis Foods E-commerce",
    category: "E-commerce Platform",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    description: "Full-featured online store with inventory management and payment integration.",
    tags: ["E-commerce", "Payments", "Inventory"],
  },
  {
    title: "FinRight Dashboard",
    category: "Web Application",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    description: "Financial management dashboard with real-time analytics and reporting.",
    tags: ["Dashboard", "Analytics", "API"],
  },
  {
    title: "Suminter India Organic",
    category: "Corporate Website",
    thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    description: "Sustainable farming company website with interactive product catalog.",
    tags: ["Corporate", "Catalog", "Multi-language"],
  },
  {
    title: "Hilux Auto Electric",
    category: "Business Website",
    thumbnail: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    description: "Automotive parts distributor with product search and dealer network.",
    tags: ["B2B", "Search", "Directory"],
  },
];

const WorksWebsites = () => {
  useScrollToTop();
  
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-dark">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-body text-sm uppercase tracking-widest">Our Work</span>
            <h1 className="font-display text-5xl md:text-7xl text-foreground mt-4">
              WEBSITE PROJECTS
            </h1>
            <p className="text-muted-foreground text-lg mt-6 font-body">
              Digital experiences that drive business growth. From corporate websites to 
              e-commerce platforms, we build solutions that perform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {websiteProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <div className="relative rounded-lg overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500">
                  {/* Browser Mockup */}
                  <div className="bg-muted px-4 py-3 flex items-center gap-2 border-b border-border">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-destructive/50" />
                      <div className="w-3 h-3 rounded-full bg-accent" />
                      <div className="w-3 h-3 rounded-full bg-primary/50" />
                    </div>
                    <div className="flex-1 bg-background/50 rounded px-3 py-1 text-xs text-muted-foreground text-center">
                      www.{project.title.toLowerCase().replace(/\s/g, "")}.com
                    </div>
                    <div className="flex gap-2">
                      <Monitor size={14} className="text-muted-foreground" />
                      <Smartphone size={14} className="text-muted-foreground" />
                    </div>
                  </div>
                  
                  {/* Screenshot */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="hero" size="lg">
                        View Project
                        <ExternalLink className="ml-2" size={16} />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div className="p-6">
                    <span className="text-primary text-xs uppercase tracking-wider font-body">
                      {project.category}
                    </span>
                    <h3 className="font-display text-2xl text-foreground mt-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-2 font-body">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full font-body"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default WorksWebsites;
