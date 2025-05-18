import { connectToDB } from "@/lib/mongoDB";
import Movie from "@/models/Movies";
import { NextResponse } from "next/server";
import streamifier from "streamifier";
import cloudinary from "@/lib/cloudinary";

// POST Request - Create new movie with Cloudinary upload
export async function POST(req) {
  try {
    const formData = await req.formData();
    const title = formData.get("title");
    const content = formData.get("content");
    const file = formData.get("image");

    
    let genres = formData.get("genres");
    let cast = formData.get("cast");
    let director = formData.get("director");
    let writer = formData.get("writer");

    const rating = parseFloat(formData.get("rating")) || 0;
    const movieLink = formData.get("movieLink");
    const ticketLink = formData.get("ticketLink");
    const release = parseFloat(formData.get("release")) || 0

      try {
        genres = JSON.parse(genres);
        cast = JSON.parse(cast);
        director = JSON.parse(director);
        writer = JSON.parse(writer);
      } catch (err) {
        return Response.json({ error: "Invalid JSON format in one of the fields." }, { status: 400 });
      }

      // Validate that all are non-empty arrays
      if (
        !Array.isArray(genres) || genres.length === 0 ||
        !Array.isArray(cast) || cast.length === 0 ||
        !Array.isArray(director) || director.length === 0 ||
        !Array.isArray(writer) || writer.length === 0
      ) {
        return Response.json({ error: "Please fill all details!" }, { status: 400 });
      }

     if(!movieLink || !ticketLink){
      return NextResponse.json({ error: "Upload right URL" }, { status: 400 });

     } 
    
    if (!file || typeof file.arrayBuffer !== "function") {
      return NextResponse.json({ error: "Invalid image file" }, { status: 400 });
    }


    const buffer = Buffer.from(await file.arrayBuffer());

    // Upload image to Cloudinary
    const uploadFromBuffer = (buffer) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "movie-posters" },
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        );
        streamifier.createReadStream(buffer).pipe(stream);
      });
    };

    const result = await uploadFromBuffer(buffer);
    const imageUrl = result.secure_url;

    await connectToDB();
    const newMovie = await Movie.create({
      title,
      content,
      image: imageUrl,
      genres,
      cast,
      director,
      writer,
      rating,
      movieLink,
      ticketLink,
      release,
    });

    return NextResponse.json(newMovie, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}


// GET Request - Fetch all movies from MongoDB
export async function GET() {
  try {
    await connectToDB();
    const movies = await Movie.find().sort({ createdAt: -1 }); // Get movies sorted by creation date
    return NextResponse.json(movies);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
