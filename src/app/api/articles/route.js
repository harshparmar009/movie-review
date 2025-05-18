import { connectToDB } from "@/lib/mongoDB";
import cloudinary from "@/lib/cloudinary";
import { NextResponse } from "next/server";
import streamifier from "streamifier";
import Articles from "@/models/Articles";

export async function POST(req){
    try {
        
    } catch (error) {
        
    }
}

export async function GET(){
    try {
        await connectToDB();
        const articles = await Articles.find().sort({ createdAt: -1 })
        return NextResponse.json(articles);
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}