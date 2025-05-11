import BlogForm from "@/components/BlogForm";

export default function AdminPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Create New Blog</h1>
      <BlogForm />
    </div>
  );
}
