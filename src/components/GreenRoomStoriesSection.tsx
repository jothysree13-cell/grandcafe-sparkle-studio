import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';

interface StoryItem {
  id: number;
  type: 'image' | 'video';
  thumbnail: string;
  src: string;
  title: string;
}

const stories: StoryItem[] = [
  {
    id: 1,
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'Behind the Scenes'
  },
  {
    id: 2,
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400&h=400&fit=crop',
    src: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=800&h=800&fit=crop',
    title: 'Studio Session'
  },
  {
    id: 3,
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=400&fit=crop',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'Creative Process'
  },
  {
    id: 4,
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop',
    src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=800&fit=crop',
    title: 'Team Moments'
  },
  {
    id: 5,
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=400&fit=crop',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'On Location'
  },
  {
    id: 6,
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=400&h=400&fit=crop',
    src: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=800&h=800&fit=crop',
    title: 'Equipment Setup'
  },
  {
    id: 7,
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?w=400&h=400&fit=crop',
    src: 'https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?w=800&h=800&fit=crop',
    title: 'Pre-production'
  },
  {
    id: 8,
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=400&h=400&fit=crop',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'Final Cut'
  }
];

export const GreenRoomStoriesSection = () => {
  const [selectedStory, setSelectedStory] = useState<StoryItem | null>(null);

  return (
    <section className="py-8 md:py-20 px-4 md:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-xs md:text-sm font-medium tracking-wider uppercase"
          >
            Behind The Scenes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2"
          >
            Green Room Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground mt-2 md:mt-4 max-w-2xl mx-auto text-sm md:text-base hidden md:block"
          >
            Explore the moments behind our creative process
          </motion.p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative aspect-square rounded-lg md:rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedStory(story)}
            >
              <img
                src={story.thumbnail}
                alt={story.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
              
              {story.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/90 flex items-center justify-center">
                    <Play size={16} className="text-primary ml-0.5 md:w-5 md:h-5" />
                  </div>
                </div>
              )}
              
              <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3 hidden md:block">
                <p className="text-white text-xs md:text-sm font-medium truncate">{story.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedStory && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedStory(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setSelectedStory(null)}
          >
            <X size={24} className="text-white" />
          </button>
          
          <div 
            className="max-w-4xl w-full max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedStory.type === 'video' ? (
              <div className="aspect-video">
                <iframe
                  src={selectedStory.src}
                  className="w-full h-full rounded-xl"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            ) : (
              <img
                src={selectedStory.src}
                alt={selectedStory.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
              />
            )}
          </div>
        </motion.div>
      )}
    </section>
  );
};
