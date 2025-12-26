import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { Play, Images, ArrowLeft } from "lucide-react";

type VideoProject = {
  title: string;
  category: string;
  thumbnail: string;
  duration: string;
  mediaCount: number;
};

const videoProjects: VideoProject[] = [
  {
    title: "Fujitech Corporate Film",
    category: "Brand Film",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80",
    duration: "2:30",
    mediaCount: 3,
  },
  {
    title: "Toffee Tone Product Launch",
    category: "TV Commercial",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80",
    duration: "0:45",
    mediaCount: 2,
  },
  {
    title: "JB Interior Showcase",
    category: "Promotional Video",
    thumbnail: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
    duration: "1:15",
    mediaCount: 4,
  },
  {
    title: "Suminter Organic Story",
    category: "Documentary",
    thumbnail: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80",
    duration: "5:00",
    mediaCount: 2,
  },
  {
    title: "Brillex Paint TVC",
    category: "TV Commercial",
    thumbnail: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80",
    duration: "0:30",
    mediaCount: 3,
  },
  {
    title: "Regal Paints Brand Film",
    category: "Brand Film",
    thumbnail: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&q=80",
    duration: "3:00",
    mediaCount: 2,
  },
  {
    title: "Hilux Auto Electric",
    category: "Explainer Video",
    thumbnail: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
    duration: "1:45",
    mediaCount: 3,
  },
  {
    title: "FinRight Motion Graphics",
    category: "Animated Video",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    duration: "1:00",
    mediaCount: 2,
  },
];

const mobileCategories = [
  "All",
  "Brand Film",
  "TV Commercial",
  "Promotional Video",
  "Documentary",
  "Explainer Video",
  "Animated Video",
];

const WorksVideo = () => {
  useScrollToTop();
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = useMemo(() => {
    return [...new Set(videoProjects.map((p) => p.category))];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return videoProjects;
    return videoProjects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const getProjectSlug = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* Mobile Sticky Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="flex items-center px-4 py-3">
          <Link to="/" className="mr-3">
            <ArrowLeft size={24} className="text-foreground" />
          </Link>
          <h1 className="font-display text-xl text-foreground">Videos</h1>
        </div>
        
        {/* Mobile Sticky Filter */}
        <div className="px-4 pb-3 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 whitespace-nowrap">
            {mobileCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-3 py-1.5 rounded-full text-xs font-body transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero - Desktop Only */}
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
      <section className="py-4 md:py-16 pt-28 md:pt-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Desktop Filter */}
          <div className="hidden md:block mb-8">
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setActiveFilter("All")}
                className={`px-4 py-2 rounded-full text-sm font-body transition-all duration-300 ${
                  activeFilter === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-body transition-all duration-300 ${
                    activeFilter === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8"
            >
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Link
                    to={`/works/video/${getProjectSlug(project.title)}`}
                    className="group cursor-pointer block"
                  >
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-2 md:mb-4">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center animate-glow-pulse">
                          <Play className="text-primary-foreground ml-0.5 md:ml-1" size={20} />
                        </div>
                      </div>
                      <div className="absolute bottom-2 md:bottom-3 right-2 md:right-3 px-1.5 md:px-2 py-0.5 md:py-1 bg-background/80 rounded text-[10px] md:text-xs text-foreground font-body">
                        {project.duration}
                      </div>
                      {project.mediaCount > 1 && (
                        <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 px-1.5 md:px-2 py-0.5 md:py-1 bg-background/80 rounded text-[10px] md:text-xs text-foreground font-body flex items-center gap-1">
                          <Images size={12} />
                          {project.mediaCount}
                        </div>
                      )}
                    </div>
                    <span className="text-primary text-[10px] md:text-xs uppercase tracking-wider font-body">
                      {project.category}
                    </span>
                    <h3 className="font-display text-sm md:text-xl text-foreground mt-0.5 md:mt-1 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                      {project.title}
                    </h3>
                  </Link>
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