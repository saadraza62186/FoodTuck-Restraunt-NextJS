import BlogCard from "./BlogCard";

// Server component: fetches blogs from API
export default async function BlogsSection() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH || "http://localhost:3000"}/api/blogs`, {
      cache: "no-store",
    });
    const json = await res.json();
    const blogs = json?.data || [];

    return (
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog: any) => (
            <BlogCard key={blog.id} imageSrc={blog.image} name={blog.title} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-6">Latest Blog Posts</h2>
        <div className="text-red-600">Failed to load blog posts.</div>
      </div>
    );
  }
}
