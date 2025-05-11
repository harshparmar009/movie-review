import BlogCard from "@/components/BlogCard";

async function getBlogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function HomePage() {
  const blogs = await getBlogs();

  return (
    <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blog._id} {...blog} />
      ))}
    </main>
  );
}
