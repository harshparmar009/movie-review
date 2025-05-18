// app/api/movies/[id]/route.js

import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoDB";
import Movie from "@/models/Movies";


// GET /api/movies/[id]
export async function GET(request, context) {
  const { params } = context;
  try {
    await connectToDB();

    const movie = await Movie.findById(params.id);

    if (!movie) {
      return NextResponse.json({ error: 'Movie not found' }, { status: 404 });
    }

    return NextResponse.json(movie, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}