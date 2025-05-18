import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema(
{
    title:{
        type: String,
        require: true,
    },
    image:{
        type: String,
        require: true,
    },
    
},

{ timestamps: true})

export default mongoose.model.Article || mongoose.model("Article", ArticleSchema)