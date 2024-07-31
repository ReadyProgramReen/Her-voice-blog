import { connectDB } from "@/server/config/db"

const { NextResponse } = require("next/server")
import {writeFile} from 'fs/promises'

const LoadDb = async ()=>{
    await connectDB();
}

LoadDb();

export async function GET(req){

    return  NextResponse.json({msg:'API working'})
}

// Api for storing blog data
export async function POST(req){
    const formData = await req.formData();
    const timeStamp = Date.now();

    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer =  Buffer.from(imageByteData);
    const path = `./public/${timeStamp}_${image.name}`;
    await writeFile(path,buffer);
    const imgUrl = `/${timeStamp}_${image.name}`

    const blogData ={
        title:`${formData.get('title')}`,
        description:`${formData.get('description')}`,
        category: `${formData.get('category')}`,
        author:`${formData.get('author')}`,
        image:`${imgUrl}`,
        authorImg :`${formData.get('authorImg')}`
    }

    return NextResponse.json({imgUrl})

}