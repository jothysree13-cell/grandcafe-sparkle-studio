import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  category: string;
  description: string;
  thumbnail: string;
}

interface SimilarWorksSliderProps {
  projects: Project[];
  currentSlug: string;
  type: string;
}

export const SimilarWorksSlider = ({ projects, currentSlug, type }: SimilarWorksSliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const similarProjects = projects.filter(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") !== currentSlug
  );

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 320;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (similarProjects.length === 0) return null;

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Similar Works</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="rounded-full"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="rounded-full"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {similarProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-72 md:w-80"
              style={{ scrollSnapAlign: "start" }}
            >
              <Link
                to={`/works/${type}/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-primary text-xs uppercase tracking-widest">
                      {project.category}
                    </span>
                    <h3 className="font-display text-lg text-white mt-1">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <div className="mt-3 group-hover:opacity-0 transition-opacity">
                  <span className="text-primary text-xs uppercase tracking-widest">
                    {project.category}
                  </span>
                  <h3 className="font-display text-lg text-foreground mt-1">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
