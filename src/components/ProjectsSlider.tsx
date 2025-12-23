import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, Camera, Palette } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
const projects = [
  {
    title: "Fujitech Corporate Film",
    category: "Video",
    type: "Brand Film",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80",
    link: "/works/video/fujitech-corporate-film",
    icon: Play,
  },
  {
    title: "Fashion Lookbook",
    category: "Photoshoot",
    type: "Fashion",
    thumbnail: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
    link: "/works/photoshoot/fashion-lookbook",
    icon: Camera,
  },
  {
    title: "Toffee Tone Branding",
    category: "Design",
    type: "Brand Identity",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    link: "/works/designs/toffee-tone-branding",
    icon: Palette,
  },
  {
    title: "Brillex Paint TVC",
    category: "Video",
    type: "TV Commercial",
    thumbnail: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80",
    link: "/works/video/brillex-paint-tvc",
    icon: Play,
  },
  {
    title: "Product Photography",
    category: "Photoshoot",
    type: "E-commerce",
    thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    link: "/works/photoshoot/product-photography",
    icon: Camera,
  },
  {
    title: "Social Media Campaign",
    category: "Design",
    type: "Digital Design",
    thumbnail: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80",
    link: "/works/designs/social-media-campaign",
    icon: Palette,
  },
];

export const ProjectsSlider = () => {
  const apiRef = useRef<CarouselApi>();
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const api = apiRef.current;
    if (!api) return;

    intervalRef.current = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [apiRef.current]);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-body text-sm uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mt-4">
            OUR PROJECTS
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Carousel
            setApi={(api) => { apiRef.current = api; }}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project, i) => (
                <CarouselItem
                  key={project.title}
                  className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <Link to={project.link} className="group block">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                          <project.icon className="text-primary-foreground" size={24} />
                        </div>
                      </div>
                      <div className="absolute top-3 left-3 px-3 py-1 bg-primary/90 rounded-full text-xs text-primary-foreground font-body">
                        {project.category}
                      </div>
                    </div>
                    <span className="text-primary text-xs uppercase tracking-wider font-body">
                      {project.type}
                    </span>
                    <h3 className="font-display text-xl text-foreground mt-1 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 bg-background border-border hover:bg-primary hover:text-primary-foreground hover:border-primary" />
            <CarouselNext className="hidden md:flex -right-4 bg-background border-border hover:bg-primary hover:text-primary-foreground hover:border-primary" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};
