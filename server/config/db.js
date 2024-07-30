import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://maureenekeugo1:hFG944uzohHWrFKd@deployment1.xfziql5.mongodb.net/blog-app')
    console.log('DB connected')
}