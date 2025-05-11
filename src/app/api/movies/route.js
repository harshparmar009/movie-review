import { connectToDB } from "@/lib/mongoDB";
import Movie from "@/models/Movies";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDB();
  const movies = await Movie.find().sort({ createdAt: -1 });
  return NextResponse.json(movies);
}

export async function POST(req) {
  const { title, content, image } = await req.json();
  await connectToDB();
  const newMovie = await Movie.create({ title, content, image });
  return NextResponse.json(newMovie, { status: 201 });
}
