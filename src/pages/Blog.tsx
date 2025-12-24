import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const blogPosts = [
  {
    id: 1,
    title: "The Power of Visual Storytelling in Modern Marketing",
    excerpt: "Discover how compelling visual narratives can transform your brand's connection with audiences and drive meaningful engagement.",
    category: "Marketing",
    author: "Grandcafe Team",
    date: "Dec 15, 2024",
    thumbnail: "https://images.unsplash.com/photo-1522542550221-31fd8575f9a0?w=800&q=80",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Why Every Business Needs a Strong Digital Presence in 2024",
    excerpt: "From websites to social media, learn why digital presence is no longer optional but essential for business success.",
    category: "Digital",
    author: "Grandcafe Team",
    date: "Dec 10, 2024",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Creating Impactful TV Commercials That Convert",
    excerpt: "Behind the scenes of creating television advertisements that not only capture attention but drive real business results.",
    category: "Advertising",
    author: "Grandcafe Team",
    date: "Dec 5, 2024",
    thumbnail: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Brand Identity Design: More Than Just a Logo",
    excerpt: "Understanding the comprehensive approach to brand identity and how it shapes customer perception and loyalty.",
    category: "Branding",
    author: "Grandcafe Team",
    date: "Nov 28, 2024",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Social Media Content That Drives Engagement",
    excerpt: "Strategies and best practices for creating social media content that resonates with your target audience.",
    category: "Social Media",
    author: "Grandcafe Team",
    date: "Nov 20, 2024",
    thumbnail: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
    readTime: "5 min read",
  },
  {
    id: 6,
    title: "The ROI of Professional Video Production",
    excerpt: "Breaking down the return on investment for businesses investing in high-quality video content.",
    category: "Video",
    author: "Grandcafe Team",
    date: "Nov 15, 2024",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    readTime: "4 min read",
  },
];

const categories = ["All", "Marketing", "Digital", "Advertising", "Branding", "Social Media", "Video"];

const Blog = () => {
  useScrollToTop();
  
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-dark">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-body text-sm uppercase tracking-widest">Insights</span>
            <h1 className="font-display text-5xl md:text-7xl text-foreground mt-4">
              OUR BLOG
            </h1>
            <p className="text-muted-foreground text-lg mt-6 font-body">
              Industry insights, creative trends, and marketing strategies from our team 
              of experts. Stay informed and inspired.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-body transition-all duration-300 ${
                  i === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-4">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-body uppercase tracking-wider rounded">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User size={14} />
                      {post.author}
                    </span>
                  </div>
                  
                  <h2 className="font-display text-xl text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-sm font-body line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-body group-hover:gap-3 transition-all duration-300">
                    Read More <ArrowRight size={16} />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
