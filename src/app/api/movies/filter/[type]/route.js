// app/api/movies/filter/[type]/route.js
import { NextResponse } from 'next/server';
import { connectToDB } from "@/lib/mongoDB";
import Movie from '@/models/Movies';

export async function GET(request, context) {
    const { params } = context;
    try {
        await connectToDB();

  const { type } = params;
  const currentYear = new Date().getFullYear();
  let filter = {};

  switch (type) {
    case "top":
      filter.rating = { $gte: 8 };
      break;
    case "recent":
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
      filter.createdAt = { $gte: sixMonthsAgo };
      break;
    case "coming":
      filter.release = { $gt: currentYear };
      break;
    case "released":
      filter.release = { $gte: currentYear - 1, $lte: currentYear };
      break;
    default:
      return NextResponse.json({ error: "Invalid type" }, { status: 400 });
  }

  const movies = await Movie.find(filter).sort({ createdAt: -1 });
  return NextResponse.json(movies, { status: 200 });

    }catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
  

}
