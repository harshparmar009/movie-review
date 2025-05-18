"use client";

import { useState } from "react";
import TagInput from "../TagInput";
// import {TagInput} from '@/components/TagInput'

export default function MovieForm() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    genres: [],
    cast: [],
    director: [],
    writer: [],
    rating: "",
    movieLink: "",
    ticketLink: "",
    release: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [genreInput, setGenreInput] = useState("");
  const [castInput, setCastInput] = useState("");
  const [directorInput, setDirectorInput] = useState("");
  const [writerInput, setWriterInput] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!imageFile) {
      alert("Please select an image.");
      return;
    }
  
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("content", form.content);
    formData.append("genres", JSON.stringify(form.genres));
    formData.append("cast", JSON.stringify(form.cast));
    formData.append("director", JSON.stringify(form.director));
    formData.append("writer", JSON.stringify(form.writer));
    formData.append("rating", parseFloat(form.rating));
    formData.append("movieLink", form.movieLink);
    formData.append("ticketLink", form.ticketLink);
    formData.append("release", form.release);
    formData.append("image", imageFile);
  
    setLoading(true);
    const res = await fetch("/api/movies", {
      method: "POST",
      body: formData,
    });
    setLoading(false);
  
    if (res.ok) {
      setForm({
        title: "",
        content: "",
        genres: [],
        cast: [],
        director: [],
        writer: [],
        rating: "",
        movieLink: "",
        ticketLink:"",
        release: "",
      });

      setGenreInput("");
      setCastInput("");
      setDirectorInput("");
      setWriterInput("");

      setImageFile(null);
      alert("Movie posted!");
    } else {
      const error = await res.json();
      alert("Error: " + error.error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">

<label className="block font-medium mb-4">Movie Title</label>
    <input
        type="text"
        placeholder="Title"
        className="border p-2 w-full"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        required
        disabled={loading}
      />

<label className="block font-medium mb-4">Movie Description</label>
      <textarea
        placeholder="Content"
        className="border p-2 w-full"
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
        required
        disabled={loading}
      />

<label className="block font-medium mb-4">Movie Thumbnail</label>
      <input
        type="file"
        accept="image/*"
        className="border p-2 w-full"
        onChange={(e) => setImageFile(e.target.files[0])}
        required
        disabled={loading}
      />

{/* Genres Tag Input */}
<TagInput
  label="Genres"
  values={form.genres}
  inputValue={genreInput}
  setInputValue={setGenreInput}
  onAdd={(val) => setForm({ ...form, genres: [...form.genres, val] })}
  onRemove={(index) => setForm({ ...form, genres: form.genres.filter((_, i) => i !== index) })}
/>

{/* Cast Tag Input */}
<TagInput
  label="Cast"
  values={form.cast}
  inputValue={castInput}
  setInputValue={setCastInput}
  onAdd={(val) => setForm({ ...form, cast: [...form.cast, val] })}
  onRemove={(index) => setForm({ ...form, cast: form.cast.filter((_, i) => i !== index) })}
/>

{/* Director Tag Input */}
<TagInput
  label="Director"
  values={form.director}
  inputValue={directorInput}
  setInputValue={setDirectorInput}
  onAdd={(val) => setForm({ ...form, director: [...form.director, val] })}
  onRemove={(index) => setForm({ ...form, director: form.director.filter((_, i) => i !== index) })}
/>

{/* Writer Tag Input */}
<TagInput
  label="Writer"
  values={form.writer}
  inputValue={writerInput}
  setInputValue={setWriterInput}
  onAdd={(val) => setForm({ ...form, writer: [...form.writer, val] })}
  onRemove={(index) => setForm({ ...form, writer: form.writer.filter((_, i) => i !== index) })}
/>

<label className="block font-medium mb-4">Rating</label>
<input
  type="number"
  placeholder="Rating (e.g., 8.5)"
  className="border p-2 w-full"
  value={form.rating}
  required
  onChange={(e) => setForm({ ...form, rating: e.target.value })}
  disabled={loading}
/>

<label className="block font-medium mb-4">Movie Trailer</label>
<input
  type="url"
  placeholder="Movie Trailer Link"
  className="border p-2 w-full"
  value={form.movieLink}
  required
  onChange={(e) => setForm({ ...form, movieLink: e.target.value })}
  disabled={loading}
/>

<label className="block font-medium mb-4">Movie Buy Link</label>
<input
  type="url"
  placeholder="Movie Ticket Link"
  className="border p-2 w-full"
  value={form.ticketLink}
  required
  onChange={(e) => setForm({ ...form, ticketLink: e.target.value })}
  disabled={loading}
/>

<label className="block font-medium mb-4">Movie Release</label>
<input
  type="number"
  placeholder="Movie Release Year"
  className="border p-2 w-full"
  value={form.release}
  required
  onChange={(e) => setForm({ ...form, release: e.target.value })}
  disabled={loading}
/>


      <button
        className={`bg-blue-500 text-white px-4 py-2 rounded ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        type="submit"
        disabled={loading}
      >
        {loading ? (
          <div className="flex items-center justify-center gap-2">
            <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Uploading...
          </div>
        ) : (
          "Post Movie"
        )}
      </button>
    </form>
  );
}


