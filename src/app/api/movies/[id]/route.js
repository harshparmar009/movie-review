import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoDB";
import mongoose from "mongoose";
import Movie from "@/models/Movies";

export async function GET(_request, context) {
  const { params } = context;

  if (!mongoose.Types.ObjectId.isValid(params.id)) {
    return NextResponse.json({ error: "Invalid movie ID" }, { status: 400 });
  }

  try {
    await connectToDB();

    const movie = await Movie.findById(params.id);

    if (!movie) {
      return NextResponse.json({ error: "Movie not found" }, { status: 404 });
    }

    return NextResponse.json(movie, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
