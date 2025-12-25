import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, MessageCircle, Phone, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SimilarWorksSlider } from "@/components/SimilarWorksSlider";
import { ChatWidget } from "@/components/ChatWidget";
import { CallbackModal } from "@/components/CallbackModal";
import { useScrollToTop } from "@/hooks/useScrollToTop";

type MediaItem = {
  type: "video" | "image";
  src: string;
};

type VideoProject = {
  title: string;
  category: string;
  thumbnail: string;
  duration: string;
  description: string;
  media: MediaItem[];
};

const videoProjects: VideoProject[] = [
  {
    title: "Fujitech Corporate Film",
    category: "Brand Film",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80",
    duration: "2:30",
    description: "A compelling corporate film showcasing Fujitech's innovative technology solutions and company culture. This brand film captures the essence of the company's vision and values.",
    media: [
      { type: "video", src: "https://www.shutterstock.com/shutterstock/videos/3828552431/preview/stock-footage-man-in-winter-clothing-sitting-on-wooden-porch-of-dark-blue-cabin-with-two-dogs-static-shot.webm" },
      { type: "image", src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80" },
      { type: "image", src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80" },
    ],
  },
  {
    title: "Toffee Tone Product Launch",
    category: "TV Commercial",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80",
    duration: "0:45",
    description: "An energetic TV commercial introducing Toffee Tone's new product line to the market with vibrant visuals and catchy music.",
    media: [
      { type: "video", src: "https://www.shutterstock.com/shutterstock/videos/3511533635/preview/stock-footage-water-being-sprayed-over-fresh-organic-blueberries-healthy-eating-concept.webm" },
      { type: "image", src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80" },
    ],
  },
  {
    title: "JB Interior Showcase",
    category: "Promotional Video",
    thumbnail: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
    duration: "1:15",
    description: "A visually stunning promotional video highlighting JB Interior's premium design services and exceptional craftsmanship.",
    media: [
      { type: "video", src: "https://www.shutterstock.com/shutterstock/videos/1110919865/preview/stock-footage-woman-cutting-cucumbers-on-a-cutting-board-for-healthy-vegetable-dinner.webm" },
      { type: "image", src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80" },
      { type: "image", src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80" },
      { type: "image", src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80" },
    ],
  },
  {
    title: "Suminter Organic Story",
    category: "Documentary",
    thumbnail: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80",
    duration: "5:00",
    description: "A documentary-style film telling the story of Suminter's commitment to organic farming and sustainable practices.",
    media: [
      { type: "video", src: "https://www.shutterstock.com/shutterstock/videos/3511533635/preview/stock-footage-water-being-sprayed-over-fresh-organic-blueberries-healthy-eating-concept.webm" },
      { type: "image", src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&q=80" },
    ],
  },
  {
    title: "Brillex Paint TVC",
    category: "TV Commercial",
    thumbnail: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80",
    duration: "0:30",
    description: "A vibrant TV commercial showcasing Brillex Paint's premium color range with stunning visuals and creative storytelling.",
    media: [
      { type: "video", src: "https://www.shutterstock.com/shutterstock/videos/3828552431/preview/stock-footage-man-in-winter-clothing-sitting-on-wooden-porch-of-dark-blue-cabin-with-two-dogs-static-shot.webm" },
      { type: "image", src: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&q=80" },
      { type: "image", src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&q=80" },
    ],
  },
  {
    title: "Regal Paints Brand Film",
    category: "Brand Film",
    thumbnail: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&q=80",
    duration: "3:00",
    description: "A brand film celebrating Regal Paints' legacy of quality and innovation in the paint industry.",
    media: [
      { type: "video", src: "https://www.shutterstock.com/shutterstock/videos/1110919865/preview/stock-footage-woman-cutting-cucumbers-on-a-cutting-board-for-healthy-vegetable-dinner.webm" },
      { type: "image", src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&q=80" },
    ],
  },
  {
    title: "Hilux Auto Electric",
    category: "Explainer Video",
    thumbnail: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
    duration: "1:45",
    description: "An informative explainer video demonstrating Hilux Auto Electric's automotive solutions and cutting-edge technology.",
    media: [
      { type: "video", src: "https://www.shutterstock.com/shutterstock/videos/3511533635/preview/stock-footage-water-being-sprayed-over-fresh-organic-blueberries-healthy-eating-concept.webm" },
      { type: "image", src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80" },
      { type: "image", src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80" },
    ],
  },
  {
    title: "FinRight Motion Graphics",
    category: "Animated Video",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    duration: "1:00",
    description: "Dynamic motion graphics explaining FinRight's financial services in an engaging and easy-to-understand way.",
    media: [
      { type: "video", src: "https://www.shutterstock.com/shutterstock/videos/3828552431/preview/stock-footage-man-in-winter-clothing-sitting-on-wooden-porch-of-dark-blue-cabin-with-two-dogs-static-shot.webm" },
      { type: "image", src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" },
    ],
  },
];

const VideoProjectDetail = () => {
  useScrollToTop();
  const { slug } = useParams();
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);

  const project = videoProjects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  const goNext = () => {
    if (project) {
      setCurrentMediaIndex((prev) => (prev + 1) % project.media.length);
    }
  };

  const goPrev = () => {
    if (project) {
      setCurrentMediaIndex((prev) => (prev - 1 + project.media.length) % project.media.length);
    }
  };

  if (!project) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-16 container mx-auto px-6 text-center">
          <h1 className="font-display text-4xl text-foreground">Project Not Found</h1>
          <Button asChild className="mt-6">
            <Link to="/works/video">
              <ArrowLeft size={16} className="mr-2" />
              Back to Video Projects
            </Link>
          </Button>
        </div>
        <Footer />
      </main>
    );
  }

  const currentMedia = project.media[currentMediaIndex];

  // Transform projects for similar works slider
  const similarProjects = videoProjects.map((p) => ({
    title: p.title,
    category: p.category,
    description: p.description,
    thumbnail: p.thumbnail,
  }));

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/works/video"
              className="inline-flex items-center gap-2 text-primary font-body text-sm uppercase tracking-widest hover:underline mb-8"
            >
              <ArrowLeft size={16} />
              Back to Video Projects
            </Link>

            {/* Main Media Viewer */}
            <div className="relative rounded-lg overflow-hidden bg-black mb-6">
              <AnimatePresence mode="wait">
                {currentMedia.type === "video" ? (
                  <motion.div
                    key={`video-${currentMediaIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="aspect-video w-full"
                  >
                    <video
                      src={currentMedia.src}
                      controls
                      autoPlay
                      className="w-full h-full object-contain"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </motion.div>
                ) : (
                  <motion.div
                    key={`image-${currentMediaIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="aspect-video w-full flex items-center justify-center"
                  >
                    <img
                      src={currentMedia.src}
                      alt={project.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Arrows */}
              {project.media.length > 1 && (
                <>
                  <button
                    onClick={goPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-background/80 flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <ChevronLeft className="text-foreground" size={24} />
                  </button>
                  <button
                    onClick={goNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-background/80 flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <ChevronRight className="text-foreground" size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {project.media.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-4 mb-8">
                {project.media.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMediaIndex(index)}
                    className={`relative flex-shrink-0 w-28 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentMediaIndex
                        ? "border-primary ring-2 ring-primary/30"
                        : "border-border opacity-60 hover:opacity-100"
                    }`}
                  >
                    {item.type === "video" ? (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <Play size={20} className="text-primary" />
                      </div>
                    ) : (
                      <img
                        src={item.src}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Project Info */}
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <span className="text-primary text-sm uppercase tracking-widest font-body">
                  {project.category}
                </span>
                <h1 className="font-display text-4xl md:text-5xl text-foreground mt-2">
                  {project.title}
                </h1>
                <p className="text-muted-foreground text-lg mt-6 font-body leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-display text-lg text-foreground mb-4">Project Details</h3>
                  <div className="space-y-3 text-sm font-body">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="text-foreground">{project.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Category</span>
                      <span className="text-foreground">{project.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Media Files</span>
                      <span className="text-foreground">{project.media.length}</span>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={() => setIsChatOpen(true)}
                  className="gap-2 w-full"
                  size="lg"
                >
                  <MessageCircle size={20} />
                  Chat Now
                </Button>
                <Button
                  onClick={() => setIsCallbackOpen(true)}
                  variant="outline"
                  className="gap-2 w-full"
                  size="lg"
                >
                  <Phone size={20} />
                  Request Callback
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Similar Works Slider */}
      <SimilarWorksSlider
        projects={similarProjects}
        currentSlug={slug || ""}
        type="video"
      />

      <Footer />

      {/* Chat Widget */}
      <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* Callback Modal */}
      <CallbackModal isOpen={isCallbackOpen} onClose={() => setIsCallbackOpen(false)} />
    </main>
  );
};

export default VideoProjectDetail;