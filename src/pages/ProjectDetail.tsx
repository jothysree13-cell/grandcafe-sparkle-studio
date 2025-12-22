import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SimilarWorksSlider } from "@/components/SimilarWorksSlider";
import { ChatWidget } from "@/components/ChatWidget";
import { CallbackModal } from "@/components/CallbackModal";

// Project data with descriptions
const allProjects: Record<string, { title: string; category: string; description: string; thumbnail: string }[]> = {
  video: [
    { title: "Fujitech Corporate Film", category: "Brand Film", description: "A compelling corporate film showcasing Fujitech's innovative technology solutions and company culture.", thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80" },
    { title: "Toffee Tone Product Launch", category: "TV Commercial", description: "An energetic TV commercial introducing Toffee Tone's new product line to the market.", thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80" },
    { title: "JB Interior Showcase", category: "Promotional Video", description: "A visually stunning promotional video highlighting JB Interior's premium design services.", thumbnail: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80" },
    { title: "Suminter Organic Story", category: "Documentary", description: "A documentary-style film telling the story of Suminter's commitment to organic farming.", thumbnail: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80" },
    { title: "Brillex Paint TVC", category: "TV Commercial", description: "A vibrant TV commercial showcasing Brillex Paint's premium color range.", thumbnail: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80" },
    { title: "Regal Paints Brand Film", category: "Brand Film", description: "A brand film celebrating Regal Paints' legacy of quality and innovation.", thumbnail: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80" },
    { title: "Hilux Auto Electric", category: "Explainer Video", description: "An informative explainer video demonstrating Hilux Auto Electric's automotive solutions.", thumbnail: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80" },
    { title: "FinRight Motion Graphics", category: "Animated Video", description: "Dynamic motion graphics explaining FinRight's financial services in an engaging way.", thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" },
  ],
  photoshoot: [
    { title: "Fujitech Product Photography", category: "Product Photography", description: "High-end product photography showcasing Fujitech's technology products.", thumbnail: "https://images.unsplash.com/photo-1606318005254-bdb2bcd14d34?w=800&q=80" },
    { title: "Jomis Foods Campaign", category: "Food Photography", description: "Appetizing food photography for Jomis Foods marketing campaign.", thumbnail: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&q=80" },
    { title: "Artiz Interior Editorial", category: "Interior Photography", description: "Editorial interior photography capturing Artiz's stunning design projects.", thumbnail: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80" },
    { title: "Fashion Brand Lookbook", category: "Fashion Photography", description: "Stylish fashion photography for a premium clothing brand lookbook.", thumbnail: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80" },
    { title: "Brillex Paint Corporate", category: "Corporate Photography", description: "Professional corporate photography for Brillex Paint's team and facilities.", thumbnail: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80" },
    { title: "Toffee Tone Product Showcase", category: "Product Photography", description: "Creative product photography highlighting Toffee Tone's product range.", thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80" },
    { title: "Spectra Decor Spaces", category: "Interior Photography", description: "Beautiful interior photography showcasing Spectra Decor's design excellence.", thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80" },
    { title: "Suminter Organic Products", category: "Food Photography", description: "Fresh and natural food photography for Suminter's organic product line.", thumbnail: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&q=80" },
    { title: "Corporate Team Portraits", category: "Corporate Photography", description: "Professional team portrait photography for corporate branding.", thumbnail: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=800&q=80" },
    { title: "Luxury Fashion Editorial", category: "Fashion Photography", description: "High-fashion editorial photography for a luxury clothing brand.", thumbnail: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80" },
    { title: "Regal Paints Products", category: "Product Photography", description: "Vibrant product photography showcasing Regal Paints' color collection.", thumbnail: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80" },
    { title: "Gourmet Food Collection", category: "Food Photography", description: "Delicious gourmet food photography for culinary marketing.", thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80" },
  ],
  designs: [
    { title: "Fujitech Brand Identity", category: "Branding", description: "Complete brand identity design for Fujitech including logo, colors, and guidelines.", thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80" },
    { title: "Jomis Foods Packaging", category: "Packaging Design", description: "Eye-catching packaging design for Jomis Foods product line.", thumbnail: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80" },
    { title: "Centex Marketing Collateral", category: "Print Design", description: "Comprehensive print design for Centex's marketing materials.", thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80" },
    { title: "Artiz Interior Catalog", category: "Publication Design", description: "Elegant catalog design showcasing Artiz Interior's portfolio.", thumbnail: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80" },
    { title: "Brillex Paint Campaign", category: "Advertising Design", description: "Creative advertising design for Brillex Paint's marketing campaign.", thumbnail: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=800&q=80" },
    { title: "Spectra Decor Visual Identity", category: "Branding", description: "Modern visual identity design for Spectra Decor.", thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80" },
    { title: "Qtto Social Media Kit", category: "Social Media Design", description: "Engaging social media design kit for Qtto's digital presence.", thumbnail: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80" },
    { title: "Toffee Tone Billboard", category: "Outdoor Advertising", description: "Impactful billboard design for Toffee Tone's outdoor campaign.", thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80" },
    { title: "Regal Paints Product Line", category: "Packaging Design", description: "Premium packaging design for Regal Paints' product line.", thumbnail: "https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=800&q=80" },
  ],
};

const typeLabels: Record<string, string> = {
  video: "Video Projects",
  photoshoot: "Photoshoot",
  designs: "Designs",
};

const ProjectDetail = () => {
  const { type, slug } = useParams();
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);

  const projects = allProjects[type || ""] || [];
  const project = projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!project) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-16 container mx-auto px-6 text-center">
          <h1 className="font-display text-4xl text-foreground">Project Not Found</h1>
          <Button onClick={() => navigate(-1)} className="mt-6">
            <ArrowLeft size={16} className="mr-2" />
            Go Back
          </Button>
        </div>
        <Footer />
      </main>
    );
  }

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
              to={`/works/${type}`}
              className="inline-flex items-center gap-2 text-primary font-body text-sm uppercase tracking-widest hover:underline mb-8"
            >
              <ArrowLeft size={16} />
              Back to {typeLabels[type || ""]}
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full aspect-video object-cover"
                />
              </div>

              <div>
                <span className="text-primary text-sm uppercase tracking-widest font-body">
                  {project.category}
                </span>
                <h1 className="font-display text-4xl md:text-5xl text-foreground mt-2">
                  {project.title}
                </h1>
                <p className="text-muted-foreground text-lg mt-6 font-body leading-relaxed">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mt-8">
                  <Button
                    onClick={() => setIsChatOpen(true)}
                    className="gap-2"
                    size="lg"
                  >
                    <MessageCircle size={20} />
                    Chat Now
                  </Button>
                  <Button
                    onClick={() => setIsCallbackOpen(true)}
                    variant="outline"
                    className="gap-2"
                    size="lg"
                  >
                    <Phone size={20} />
                    Request Callback
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Similar Works Slider */}
      <SimilarWorksSlider
        projects={projects}
        currentSlug={slug || ""}
        type={type || ""}
      />

      <Footer />

      {/* Chat Widget */}
      <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* Callback Modal */}
      <CallbackModal isOpen={isCallbackOpen} onClose={() => setIsCallbackOpen(false)} />
    </main>
  );
};

export default ProjectDetail;
