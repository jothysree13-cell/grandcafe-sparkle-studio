import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, User, ArrowLeft, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { useEffect } from "react";

// Blog posts data (same as Blog.tsx for consistency)
const blogPosts = [
  {
    id: 1,
    slug: "visual-storytelling-modern-marketing",
    title: "The Power of Visual Storytelling in Modern Marketing",
    excerpt: "Discover how compelling visual narratives can transform your brand's connection with audiences and drive meaningful engagement.",
    content: `
      <p>In today's fast-paced digital landscape, capturing and maintaining audience attention has become increasingly challenging. Visual storytelling has emerged as one of the most powerful tools in a marketer's arsenal, offering a way to connect with audiences on a deeper, more emotional level.</p>
      
      <h2>Why Visual Storytelling Matters</h2>
      <p>Humans are inherently visual creatures. Research shows that the brain processes images 60,000 times faster than text, and 90% of information transmitted to the brain is visual. This makes visual content not just preferable but essential for effective communication.</p>
      
      <h2>Key Elements of Effective Visual Storytelling</h2>
      <p>Creating compelling visual narratives requires a thoughtful approach that combines creativity with strategy:</p>
      <ul>
        <li><strong>Authenticity:</strong> Audiences can spot inauthentic content instantly. Your visuals should reflect genuine brand values and real experiences.</li>
        <li><strong>Emotion:</strong> The best visual stories evoke emotional responses, whether it's joy, inspiration, or even thoughtful contemplation.</li>
        <li><strong>Consistency:</strong> Maintaining visual consistency across all platforms reinforces brand recognition and builds trust.</li>
        <li><strong>Relevance:</strong> Your visual content should resonate with your target audience's interests, challenges, and aspirations.</li>
      </ul>
      
      <h2>Implementing Visual Storytelling in Your Strategy</h2>
      <p>Start by identifying the core stories that define your brand. What are the values, missions, and experiences that set you apart? Then, translate these narratives into visual formats that work across your marketing channels.</p>
      
      <p>Consider video content, infographics, photography, and interactive media as vehicles for your stories. Each format offers unique advantages and can reach different segments of your audience effectively.</p>
      
      <h2>Measuring Impact</h2>
      <p>Track engagement metrics, conversion rates, and brand sentiment to understand how your visual storytelling efforts are performing. Use these insights to refine your approach and create even more compelling content.</p>
    `,
    category: "Marketing",
    author: "Grandcafe Team",
    date: "Dec 15, 2024",
    thumbnail: "https://images.unsplash.com/photo-1522542550221-31fd8575f9a0?w=1200&q=80",
    readTime: "5 min read",
    metaDescription: "Learn how visual storytelling transforms brand marketing. Discover strategies for creating compelling visual narratives that drive engagement and conversions.",
    keywords: ["visual storytelling", "marketing", "brand strategy", "content marketing", "digital marketing"],
  },
  {
    id: 2,
    slug: "business-digital-presence-2024",
    title: "Why Every Business Needs a Strong Digital Presence in 2024",
    excerpt: "From websites to social media, learn why digital presence is no longer optional but essential for business success.",
    content: `
      <p>The digital transformation has fundamentally changed how businesses operate and connect with customers. In 2024, having a strong digital presence isn't just an advantage—it's a necessity for survival and growth.</p>
      
      <h2>The Digital-First Consumer</h2>
      <p>Today's consumers research products, compare prices, and make purchasing decisions online before ever visiting a physical store. A robust digital presence ensures your business is part of this journey.</p>
      
      <h2>Components of a Strong Digital Presence</h2>
      <ul>
        <li><strong>Professional Website:</strong> Your website is your digital storefront. It should be fast, mobile-friendly, and optimized for search engines.</li>
        <li><strong>Social Media:</strong> Active engagement on relevant social platforms builds community and brand awareness.</li>
        <li><strong>Content Marketing:</strong> Valuable content establishes authority and attracts organic traffic.</li>
        <li><strong>Online Reviews:</strong> Managing your online reputation influences purchasing decisions.</li>
      </ul>
      
      <h2>The ROI of Digital Investment</h2>
      <p>Businesses with strong digital presences see measurable returns through increased visibility, lead generation, and customer engagement. The investment in digital infrastructure pays dividends across all aspects of business operations.</p>
    `,
    category: "Digital",
    author: "Grandcafe Team",
    date: "Dec 10, 2024",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    readTime: "4 min read",
    metaDescription: "Discover why digital presence is essential for business success in 2024. Learn about websites, social media, and content marketing strategies.",
    keywords: ["digital presence", "business strategy", "website", "social media", "2024 trends"],
  },
  {
    id: 3,
    slug: "impactful-tv-commercials-convert",
    title: "Creating Impactful TV Commercials That Convert",
    excerpt: "Behind the scenes of creating television advertisements that not only capture attention but drive real business results.",
    content: `
      <p>Television advertising remains one of the most powerful ways to reach mass audiences and build brand awareness. But creating commercials that truly convert requires a blend of creativity, strategy, and production excellence.</p>
      
      <h2>The Art of the 30-Second Story</h2>
      <p>Every second counts in television advertising. The most effective commercials tell complete stories within tight time constraints, creating emotional connections that lead to action.</p>
      
      <h2>Production Excellence</h2>
      <p>High production values signal quality and professionalism. From cinematography to sound design, every element should reinforce your brand message and resonate with your target audience.</p>
      
      <h2>Measuring Success</h2>
      <p>Modern TV advertising allows for sophisticated tracking and attribution. Understanding how commercials drive website visits, calls, and sales helps optimize future campaigns.</p>
    `,
    category: "Advertising",
    author: "Grandcafe Team",
    date: "Dec 5, 2024",
    thumbnail: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1200&q=80",
    readTime: "6 min read",
    metaDescription: "Learn the secrets of creating TV commercials that convert. Expert insights on storytelling, production, and measuring advertising success.",
    keywords: ["TV commercials", "advertising", "video production", "brand awareness", "marketing"],
  },
  {
    id: 4,
    slug: "brand-identity-design-more-than-logo",
    title: "Brand Identity Design: More Than Just a Logo",
    excerpt: "Understanding the comprehensive approach to brand identity and how it shapes customer perception and loyalty.",
    content: `
      <p>When businesses think about branding, they often focus solely on logos. But brand identity encompasses so much more—it's the complete visual and emotional experience that defines how customers perceive your business.</p>
      
      <h2>Elements of Brand Identity</h2>
      <p>A comprehensive brand identity includes typography, color palettes, imagery style, tone of voice, and the overall personality that makes your brand unique and recognizable.</p>
      
      <h2>Building Brand Consistency</h2>
      <p>Consistency across all touchpoints reinforces brand recognition and builds trust. Every interaction should feel authentically connected to your brand's core identity.</p>
    `,
    category: "Branding",
    author: "Grandcafe Team",
    date: "Nov 28, 2024",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
    readTime: "7 min read",
    metaDescription: "Explore comprehensive brand identity design beyond logos. Learn how visual identity shapes customer perception and builds lasting brand loyalty.",
    keywords: ["brand identity", "logo design", "branding", "visual identity", "design strategy"],
  },
  {
    id: 5,
    slug: "social-media-content-engagement",
    title: "Social Media Content That Drives Engagement",
    excerpt: "Strategies and best practices for creating social media content that resonates with your target audience.",
    content: `
      <p>Social media success isn't about posting frequently—it's about posting content that genuinely connects with your audience and inspires action.</p>
      
      <h2>Understanding Your Audience</h2>
      <p>Effective social media content starts with deep audience understanding. What are their interests, pain points, and aspirations? Content should address these directly.</p>
      
      <h2>Content Formats That Work</h2>
      <p>Different platforms favor different formats. Video content, interactive polls, behind-the-scenes glimpses, and user-generated content all have their place in a balanced content strategy.</p>
    `,
    category: "Social Media",
    author: "Grandcafe Team",
    date: "Nov 20, 2024",
    thumbnail: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80",
    readTime: "5 min read",
    metaDescription: "Master social media content creation. Discover strategies for creating engaging posts that resonate with your audience and drive results.",
    keywords: ["social media", "content creation", "engagement", "social strategy", "digital marketing"],
  },
  {
    id: 6,
    slug: "roi-professional-video-production",
    title: "The ROI of Professional Video Production",
    excerpt: "Breaking down the return on investment for businesses investing in high-quality video content.",
    content: `
      <p>Video content has become essential for modern marketing, but many businesses hesitate at the investment required for professional production. Understanding the ROI helps justify this important expense.</p>
      
      <h2>The Value of Quality</h2>
      <p>Professional video production delivers higher engagement rates, better brand perception, and longer content lifespan compared to amateur alternatives.</p>
      
      <h2>Measuring Video ROI</h2>
      <p>Track metrics like view counts, engagement rates, conversion rates, and brand lift to understand how video content contributes to business objectives.</p>
    `,
    category: "Video",
    author: "Grandcafe Team",
    date: "Nov 15, 2024",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80",
    readTime: "4 min read",
    metaDescription: "Understand the ROI of professional video production. Learn how quality video content drives business results and justifies investment.",
    keywords: ["video production", "ROI", "video marketing", "professional video", "content investment"],
  },
];

// Related posts component
const RelatedPosts = ({ currentId, category }: { currentId: number; category: string }) => {
  const related = blogPosts
    .filter((post) => post.id !== currentId)
    .slice(0, 3);

  return (
    <section className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl text-foreground mb-8">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {related.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="group">
              <div className="aspect-[16/10] rounded-lg overflow-hidden mb-4">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <span className="text-primary text-xs uppercase tracking-wider">{post.category}</span>
              <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors mt-1">
                {post.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find post by slug or id (for backward compatibility)
  const post = blogPosts.find(
    (p) => p.slug === slug || p.id.toString() === slug
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Update document title and meta tags for SEO
  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Grandcafe Production Blog`;
      
      // Update meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', post.metaDescription || post.excerpt);

      // Update meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', post.keywords?.join(', ') || '');

      // Add Open Graph tags
      const ogTags = [
        { property: 'og:title', content: post.title },
        { property: 'og:description', content: post.metaDescription || post.excerpt },
        { property: 'og:image', content: post.thumbnail },
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: window.location.href },
      ];

      ogTags.forEach(({ property, content }) => {
        let tag = document.querySelector(`meta[property="${property}"]`);
        if (!tag) {
          tag = document.createElement('meta');
          tag.setAttribute('property', property);
          document.head.appendChild(tag);
        }
        tag.setAttribute('content', content);
      });

      // Add Twitter Card tags
      const twitterTags = [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: post.title },
        { name: 'twitter:description', content: post.metaDescription || post.excerpt },
        { name: 'twitter:image', content: post.thumbnail },
      ];

      twitterTags.forEach(({ name, content }) => {
        let tag = document.querySelector(`meta[name="${name}"]`);
        if (!tag) {
          tag = document.createElement('meta');
          tag.setAttribute('name', name);
          document.head.appendChild(tag);
        }
        tag.setAttribute('content', content);
      });
    }
  }, [post]);

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-16 text-center">
          <h1 className="font-display text-4xl text-foreground">Article Not Found</h1>
          <p className="text-muted-foreground mt-4">The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary mt-6 hover:gap-3 transition-all">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  // Structured Data (JSON-LD) for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    image: post.thumbnail,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Grandcafe Production",
      logo: {
        "@type": "ImageObject",
        url: "/logo.png",
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": window.location.href,
    },
    keywords: post.keywords?.join(', '),
  };

  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(post.title);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-8 bg-gradient-dark">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              Back to Blog
            </Link>
            
            <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-body uppercase tracking-wider rounded mb-4">
              {post.category}
            </span>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground max-w-4xl leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 mt-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <User size={16} />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-[21/9] rounded-xl overflow-hidden"
          >
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Share Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="lg:sticky lg:top-32 flex lg:flex-col gap-4">
                <span className="text-muted-foreground text-sm flex items-center gap-2">
                  <Share2 size={16} />
                  <span className="lg:hidden">Share</span>
                </span>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Share on Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </motion.aside>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-8"
            >
              <div
                className="prose prose-lg prose-invert max-w-none
                  prose-headings:font-display prose-headings:text-foreground
                  prose-p:text-muted-foreground prose-p:font-body prose-p:leading-relaxed
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-foreground
                  prose-ul:text-muted-foreground prose-li:marker:text-primary
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                "
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              {post.keywords && (
                <div className="mt-12 pt-8 border-t border-border">
                  <h3 className="text-sm text-muted-foreground mb-4">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-3"
            >
              <div className="lg:sticky lg:top-32 space-y-8">
                {/* Author Card */}
                <div className="p-6 bg-card rounded-xl border border-border">
                  <h3 className="font-display text-lg text-foreground mb-4">About the Author</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <User className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">{post.author}</p>
                      <p className="text-muted-foreground text-sm">Creative Team</p>
                    </div>
                  </div>
                </div>

                {/* Newsletter CTA */}
                <div className="p-6 bg-primary/10 rounded-xl border border-primary/20">
                  <h3 className="font-display text-lg text-foreground mb-2">Stay Updated</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Get the latest insights and creative inspiration delivered to your inbox.
                  </p>
                  <Link
                    to="/blog"
                    className="inline-block w-full py-2 bg-primary text-primary-foreground text-center rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    View All Articles
                  </Link>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <RelatedPosts currentId={post.id} category={post.category} />

      <Footer />
    </main>
  );
};

export default BlogDetail;
