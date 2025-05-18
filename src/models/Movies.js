import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  content: String,
  image: String,
  release: Number,
  rating: Number,
  director: {
    type: [String], 
    required: true,
  },
  writer: {
    type: [String], 
    required: true,
  },
  cast: {
    type: [String], 
    required: true,
  },
  movieLink: {
    type: [String], 
    required: true,
  },
  ticketLink: String,
  genres: {
    type: [String], 
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Movie || mongoose.model("Movie", MovieSchema);
