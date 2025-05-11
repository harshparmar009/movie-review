"use client";
import { useState } from "react";

export default function BlogForm() {
  const [form, setForm] = useState({ title: "", content: "", image: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/movies", {
      method: "POST",
      body: JSON.stringify(form),
    });
    setForm({ title: "", content: "", image: "" });
    alert("Blog posted!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Title"
        className="border p-2 w-full"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <textarea
        placeholder="Content"
        className="border p-2 w-full"
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      />
      <input
        type="text"
        placeholder="Image URL"
        className="border p-2 w-full"
        value={form.image}
        onChange={(e) => setForm({ ...form, image: e.target.value })}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
        Post Blog
      </button>
    </form>
  );
}
