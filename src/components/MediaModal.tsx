import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface MediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "video" | "image";
  src: string;
  title: string;
}

export const MediaModal = ({ isOpen, onClose, type, src, title }: MediaModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-[95vw] p-0 bg-background border-border overflow-hidden">
        <VisuallyHidden>
          <DialogTitle>{title}</DialogTitle>
        </VisuallyHidden>
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-primary transition-colors"
        >
          <X className="text-foreground" size={20} />
        </button>

        <div className="relative w-full">
          {type === "video" ? (
            <div className="aspect-video w-full bg-black">
              <iframe
                src={src}
                title={title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="relative max-h-[85vh] flex items-center justify-center bg-black/90">
              <img
                src={src}
                alt={title}
                className="max-w-full max-h-[85vh] object-contain"
              />
            </div>
          )}
        </div>

        <div className="p-4 bg-card">
          <h3 className="font-display text-xl text-foreground">{title}</h3>
        </div>
      </DialogContent>
    </Dialog>
  );
};
