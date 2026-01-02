import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PortfolioFilter } from "@/components/PortfolioFilter";
import { MediaModal } from "@/components/MediaModal";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { Camera, ZoomIn, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const photoshootProjects = [
  {
    title: "Fujitech Product Photography",
    category: "Product Photography",
    thumbnail: "https://images.unsplash.com/photo-1606318005254-bdb2bcd14d34?w=600&q=80",
  },
  {
    title: "Jomis Foods Campaign",
    category: "Food Photography",
    thumbnail: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=80",
  },
  {
    title: "Artiz Interior Editorial",
    category: "Interior Photography",
    thumbnail: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
  },
  {
    title: "Fashion Brand Lookbook",
    category: "Fashion Photography",
    thumbnail: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
  },
  {
    title: "Brillex Paint Corporate",
    category: "Corporate Photography",
    thumbnail: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80",
  },
  {
    title: "Toffee Tone Product Showcase",
    category: "Product Photography",
    thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
  },
  {
    title: "Spectra Decor Spaces",
    category: "Interior Photography",
    thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
  },
  {
    title: "Suminter Organic Products",
    category: "Food Photography",
    thumbnail: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=600&q=80",
  },
  {
    title: "Corporate Team Portraits",
    category: "Corporate Photography",
    thumbnail: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=600&q=80",
  },
  {
    title: "Luxury Fashion Editorial",
    category: "Fashion Photography",
    thumbnail: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
  },
  {
    title: "Regal Paints Products",
    category: "Product Photography",
    thumbnail: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
  },
  {
    title: "Gourmet Food Collection",
    category: "Food Photography",
    thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
  },
];

const WorksPhotoshoot = () => {
  useScrollToTop();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof photoshootProjects[0] | null>(null);

  const categories = useMemo(() => {
    return [...new Set(photoshootProjects.map((p) => p.category))];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return photoshootProjects;
    return photoshootProjects.filter((p) => p.category === activeFilter);
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
          <h1 className="font-display text-xl text-foreground ml-2">Photoshoots</h1>
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
            <span className="text-primary font-body text-sm uppercase tracking-widest flex items-center gap-2">
              <Camera size={16} />
              Our Work
            </span>
            <h1 className="font-display text-5xl md:text-7xl text-foreground mt-4">
              PHOTOSHOOT PORTFOLIO
            </h1>
            <p className="text-muted-foreground text-lg mt-6 font-body">
              Capturing moments that tell your brand story. From product photography to 
              corporate portraits, we create stunning visuals that make an impact.
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <div
                    onClick={() => setSelectedImage(project)}
                    className="group cursor-pointer block"
                  >
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                          <ZoomIn className="text-primary-foreground" size={24} />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-4">
                        <span className="text-primary text-xs uppercase tracking-wider font-body">
                          {project.category}
                        </span>
                        <h3 className="font-display text-lg text-foreground mt-1 group-hover:text-primary transition-colors duration-300">
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

export default WorksPhotoshoot;
