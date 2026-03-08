import { blogPosts } from "@/data/products";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen pt-[var(--nav-height)]">
      <section className="bg-secondary py-12">
        <div className="container-store">
          <h1 className="text-3xl font-display font-bold text-foreground">Blog</h1>
          <p className="text-muted-foreground mt-2">Tips, trends, and shopping guides</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-store">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.id} className="card-hover bg-card rounded-2xl overflow-hidden border border-border/50">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <span className="text-xs text-accent font-medium">{post.category}</span>
                  <h2 className="font-semibold text-card-foreground mt-1 mb-2">{post.title}</h2>
                  <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
