import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Grid, MessageCircle, Menu, X, Video, Camera, Palette, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const workTypes = [
  {
    title: 'Videos',
    path: '/works/video',
    icon: Video,
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=300&fit=crop'
  },
  {
    title: 'Photoshoots',
    path: '/works/photoshoot',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=400&h=300&fit=crop'
  },
  {
    title: 'Designs',
    path: '/works/designs',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop'
  },
  {
    title: 'Websites',
    path: '/works/websites',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
  }
];

const MobileFooter = () => {
  const [isWorksOpen, setIsWorksOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { icon: Home, label: 'Home', path: '/', action: 'link' },
    { icon: Grid, label: 'Works', path: '/works', action: 'modal' },
    { icon: MessageCircle, label: 'Chat', path: '#chat', action: 'chat' },
    { icon: Menu, label: 'Menu', path: '/menu', action: 'menu' }
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.action === 'modal') {
      setIsWorksOpen(true);
    } else if (item.action === 'chat') {
      // Trigger chat widget - you can customize this
      const chatButton = document.querySelector('[data-chat-trigger]') as HTMLButtonElement;
      if (chatButton) chatButton.click();
    }
  };

  return (
    <>
      {/* Mobile Footer Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-t border-border">
        <div className="flex items-center justify-around py-2 px-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = item.action === 'modal' 
              ? location.pathname.startsWith('/works')
              : isActive(item.path);

            if (item.action === 'link') {
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-colors ${
                    active ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  <Icon size={20} />
                  <span className="text-[10px] font-medium">{item.label}</span>
                </Link>
              );
            }

            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-colors ${
                  active || (item.action === 'modal' && isWorksOpen)
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}
              >
                <Icon size={20} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Works Modal */}
      <AnimatePresence>
        {isWorksOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-black/60 z-50"
              onClick={() => setIsWorksOpen(false)}
            />

            {/* Bottom Sheet */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background rounded-t-3xl overflow-hidden"
            >
              {/* Handle */}
              <div className="flex justify-center pt-3 pb-2">
                <div className="w-10 h-1 bg-muted-foreground/30 rounded-full" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-border">
                <h3 className="text-lg font-semibold text-foreground">Our Works</h3>
                <button
                  onClick={() => setIsWorksOpen(false)}
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                >
                  <X size={20} className="text-muted-foreground" />
                </button>
              </div>

              {/* Work Types Grid */}
              <div className="p-4 grid grid-cols-2 gap-3 pb-8">
                {workTypes.map((work) => {
                  const Icon = work.icon;
                  return (
                    <Link
                      key={work.title}
                      to={work.path}
                      onClick={() => setIsWorksOpen(false)}
                      className="group relative overflow-hidden rounded-xl aspect-[4/3]"
                    >
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center gap-2">
                        <Icon size={16} className="text-white" />
                        <span className="text-white font-medium text-sm">{work.title}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for content above footer */}
      <div className="md:hidden h-16" />
    </>
  );
};

export default MobileFooter;
