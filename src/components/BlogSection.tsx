import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BLOG_POSTS } from "@/pages/BlogPost";

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Blog</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Bilgi Köşesi
          </h2>
          <p className="text-muted-foreground text-lg">
            Azerbaycan'da eğitim hakkında güncel bilgiler ve rehberler.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.slice(0, 9).map((post, index) => (
            <motion.article
              key={post.title + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-gold/20 transition-all duration-300 flex flex-col"
            >
              <div className="h-44 overflow-hidden shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex flex-col grow">
                <span className="text-xs text-muted-foreground">{post.date}</span>
                <h3 className="font-display text-base font-semibold text-foreground mt-1 mb-2 line-clamp-2 group-hover:text-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.id}`}
                  className="mt-auto inline-flex items-center text-gold text-sm font-medium group-hover:gap-2 transition-all cursor-pointer w-fit"
                >
                  Devamını Oku <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
