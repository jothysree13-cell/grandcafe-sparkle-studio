import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PortfolioFilter } from "@/components/PortfolioFilter";
import { Play } from "lucide-react";

const videoProjects = [
  {
    title: "Fujitech Corporate Film",
    category: "Brand Film",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80",
    duration: "2:30",
  },
  {
    title: "Toffee Tone Product Launch",
    category: "TV Commercial",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80",
    duration: "0:45",
  },
  {
    title: "JB Interior Showcase",
    category: "Promotional Video",
    thumbnail: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
    duration: "1:15",
  },
  {
    title: "Suminter Organic Story",
    category: "Documentary",
    thumbnail: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80",
    duration: "5:00",
  },
  {
    title: "Brillex Paint TVC",
    category: "TV Commercial",
    thumbnail: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80",
    duration: "0:30",
  },
  {
    title: "Regal Paints Brand Film",
    category: "Brand Film",
    thumbnail: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&q=80",
    duration: "3:00",
  },
  {
    title: "Hilux Auto Electric",
    category: "Explainer Video",
    thumbnail: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
    duration: "1:45",
  },
  {
    title: "FinRight Motion Graphics",
    category: "Animated Video",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    duration: "1:00",
  },
];

const WorksVideo = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = useMemo(() => {
    return [...new Set(videoProjects.map((p) => p.category))];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return videoProjects;
    return videoProjects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

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
              VIDEO PROJECTS
            </h1>
            <p className="text-muted-foreground text-lg mt-6 font-body">
              Powerful visual storytelling through brand films, commercials, animated videos, 
              and documentary content that captivates and converts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <PortfolioFilter
            categories={categories}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center animate-glow-pulse">
                        <Play className="text-primary-foreground ml-1" size={28} />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-background/80 rounded text-xs text-foreground font-body">
                      {project.duration}
                    </div>
                  </div>
                  <span className="text-primary text-xs uppercase tracking-wider font-body">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl text-foreground mt-1 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground font-body">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default WorksVideo;
