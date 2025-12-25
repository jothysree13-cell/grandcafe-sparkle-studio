import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { motion, AnimatePresence } from "framer-motion";

type MediaItem = {
  type: "video" | "image";
  src: string;
};

interface MediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  // Support both single media (legacy) and multiple media items
  type?: "video" | "image";
  src?: string;
  media?: MediaItem[];
}

export const MediaModal = ({ isOpen, onClose, title, type, src, media }: MediaModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Build media array from either prop format
  const mediaItems: MediaItem[] = media && media.length > 0 
    ? media 
    : (type && src ? [{ type, src }] : []);

  useEffect(() => {
    if (!isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen]);

  const handleClose = () => {
    setCurrentIndex(0);
    onClose();
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  const currentMedia = mediaItems[currentIndex];

  if (!currentMedia) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-6xl w-[95vw] p-0 bg-background border-border overflow-hidden">
        <VisuallyHidden>
          <DialogTitle>{title}</DialogTitle>
        </VisuallyHidden>
        
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-primary transition-colors"
        >
          <X className="text-foreground" size={20} />
        </button>

        <div className="relative w-full">
          <AnimatePresence mode="wait">
            {currentMedia.type === "video" ? (
              <motion.div
                key={`video-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="aspect-video w-full bg-black"
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
                key={`image-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative aspect-video flex items-center justify-center bg-black/90"
              >
                <img
                  src={currentMedia.src}
                  alt={title}
                  className="max-w-full max-h-full object-contain"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Arrows */}
          {mediaItems.length > 1 && (
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

        {/* Bottom Info & Thumbnails */}
        <div className="p-4 bg-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display text-xl text-foreground">{title}</h3>
            {mediaItems.length > 1 && (
              <span className="text-muted-foreground text-sm font-body">
                {currentIndex + 1} / {mediaItems.length}
              </span>
            )}
          </div>

          {/* Thumbnails */}
          {mediaItems.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {mediaItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative flex-shrink-0 w-20 h-14 rounded-md overflow-hidden border-2 transition-all ${
                    index === currentIndex
                      ? "border-primary"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  {item.type === "video" ? (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <Play size={16} className="text-primary" />
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
        </div>
      </DialogContent>
    </Dialog>
  );
};