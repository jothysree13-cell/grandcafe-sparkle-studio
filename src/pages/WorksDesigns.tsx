import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PortfolioFilter } from "@/components/PortfolioFilter";
import { MediaModal } from "@/components/MediaModal";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { ZoomIn, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const designProjects = [
  {
    title: "Fujitech Brand Identity",
    category: "Branding",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
  },
  {
    title: "Jomis Foods Packaging",
    category: "Packaging Design",
    thumbnail: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
  },
  {
    title: "Centex Marketing Collateral",
    category: "Print Design",
    thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80",
  },
  {
    title: "Artiz Interior Catalog",
    category: "Publication Design",
    thumbnail: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
  },
  {
    title: "Brillex Paint Campaign",
    category: "Advertising Design",
    thumbnail: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=600&q=80",
  },
  {
    title: "Spectra Decor Visual Identity",
    category: "Branding",
    thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
  },
  {
    title: "Qtto Social Media Kit",
    category: "Social Media Design",
    thumbnail: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80",
  },
  {
    title: "Toffee Tone Billboard",
    category: "Outdoor Advertising",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80",
  },
  {
    title: "Regal Paints Product Line",
    category: "Packaging Design",
    thumbnail: "https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=600&q=80",
  },
];

const WorksDesigns = () => {
  useScrollToTop();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof designProjects[0] | null>(null);

  const categories = useMemo(() => {
    return [...new Set(designProjects.map((p) => p.category))];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return designProjects;
    return designProjects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="min-h-screen bg-background">
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* Mobile Sticky Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="flex items-center px-4 py-4">
          <button 
            onClick={() => navigate('/')}
            className="p-2 -ml-2"
          >
            <ArrowLeft size={24} className="text-foreground" />
          </button>
          <h1 className="font-display text-xl text-foreground ml-2">Designs</h1>
        </div>
        
        {/* Mobile Horizontal Scrollable Filter */}
        <div className="overflow-x-auto scrollbar-hide border-t border-border">
          <div className="flex gap-2 px-4 py-3 min-w-max">
            <button
              onClick={() => setActiveFilter("All")}
              className={`px-4 py-2 rounded-full text-sm font-body whitespace-nowrap transition-all ${
                activeFilter === "All"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-body whitespace-nowrap transition-all ${
                  activeFilter === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero - Hidden on Mobile */}
      <section className="hidden md:block pt-32 pb-16 bg-gradient-dark">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-body text-sm uppercase tracking-widest">Our Work</span>
            <h1 className="font-display text-5xl md:text-7xl text-foreground mt-4">
              DESIGN PROJECTS
            </h1>
            <p className="text-muted-foreground text-lg mt-6 font-body">
              Creative design solutions spanning brand identity, packaging, print materials, 
              and visual communications that make lasting impressions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Projects Grid */}
      <section className="pt-32 md:pt-0 py-6 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Desktop Filter */}
          <div className="hidden md:block">
            <PortfolioFilter
              categories={categories}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
            >
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="break-inside-avoid"
                >
                  <div
                    onClick={() => setSelectedImage(project)}
                    className="group cursor-pointer block"
                  >
                    <div className="relative rounded-lg overflow-hidden">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                          <ZoomIn className="text-primary-foreground" size={24} />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-primary text-xs uppercase tracking-wider font-body">
                          {project.category}
                        </span>
                        <h3 className="font-display text-xl text-foreground mt-1">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>
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

      <MediaModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        type="image"
        src={selectedImage?.thumbnail.replace('w=600', 'w=1200') || ""}
        title={selectedImage?.title || ""}
      />
    </main>
  );
};

export default WorksDesigns;
