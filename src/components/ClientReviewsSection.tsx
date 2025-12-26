import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Review {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    text: "Grandcafe Production exceeded our expectations. Their creative vision and attention to detail transformed our brand's visual identity completely.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "StartupHub",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    text: "Working with this team was a game-changer for our company. The video production quality is unmatched in the industry.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Brand Manager",
    company: "Fashion Forward",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    text: "Their photoshoot work captured our products beautifully. Professional, creative, and incredibly easy to work with.",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Creative Director",
    company: "Media Plus",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    text: "Exceptional quality and creativity. They delivered beyond what we imagined possible for our campaign.",
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Product Manager",
    company: "InnovateTech",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    text: "From concept to execution, every step was handled with professionalism. Highly recommend their services!",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Founder",
    company: "Digital Dreams",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    text: "The team's dedication to quality is evident in every frame. Our website redesign was a massive success thanks to them.",
  },
];

export const ClientReviewsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      if (!isHovered && scrollContainer) {
        scrollPosition += 0.5;
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  // Duplicate reviews for seamless loop
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="py-10 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 mb-6 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-2xl md:text-5xl text-foreground mb-2 md:mb-4">
            CLIENT <span className="text-primary">REVIEWS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-xs md:text-base">
            Hear what our clients have to say about working with us
          </p>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex gap-3 md:gap-6 overflow-hidden cursor-grab active:cursor-grabbing"
        style={{ scrollBehavior: "auto" }}
      >
        {duplicatedReviews.map((review, index) => (
          <motion.div
            key={`${review.id}-${index}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-[280px] md:w-[650px] h-[160px] md:h-[320px] bg-card border border-border rounded-lg md:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex h-full">
              {/* Left side - Image (60%) */}
              <div className="w-[60%] flex-shrink-0 h-full">
                <img
                  src={review.image}
                  alt={review.company}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right side - Text (40%) */}
              <div className="w-[40%] p-3 md:p-6 flex flex-col justify-center">
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-2 md:mb-4 line-clamp-4 md:line-clamp-none">
                  "{review.text}"
                </p>
                <p className="text-primary font-semibold text-xs md:text-base">{review.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
