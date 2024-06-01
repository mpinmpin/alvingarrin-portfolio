import connectDB from '@/utils/connectDB';
import Blog from '@/models/Blog';

export default async function handler(req, res) {
  await connectDB();

  try {
    const data = await Blog.find();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}










// // pages/api/data.js
// import connectDB from '../../../utils/mongoatlas';
// import Blog from '../../../models/Blog';
// import { NextResponse } from "next/server";

// export async function POST(request) {
//   const { id, title, body, author } = await request.json();
//   await connectDB();
//   await Blog.create({ title, description });
//   return NextResponse.json({ message: "Blog Created" }, { status: 201 });
// }

// export async function GET() {
//   await connectDB();
//   const topics = await Blog.find();
//   return NextResponse.json({ topics });
// }

// export async function DELETE(request) {
//   const id = request.nextUrl.searchParams.get("id");
//   await connectDB();
//   await Blog.findByIdAndDelete(id);
//   return NextResponse.json({ message: "Blog deleted" }, { status: 200 });
// }





