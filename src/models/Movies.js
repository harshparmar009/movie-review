import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  content: String,
  image: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Movie || mongoose.model("Movie", MovieSchema);
