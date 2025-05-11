export default function BlogCard({ title, content, image }) {
    return (
      <div className="border rounded p-4 shadow-md">
        {image && <img src={image} alt={title} className="w-full h-48 object-cover mb-4" />}
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{content.slice(0, 100)}...</p>
      </div>
    );
  }
  