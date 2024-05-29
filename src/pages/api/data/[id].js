// export default function handler(req, res) {
//     const { pid } = req.query
//     res.end(`Post: ${pid}`)
//   }



import connectDB from '@/utils/connectDB';
import Blog from '@/models/Blog';

export default async function handler(req, res) {
  const { method, query: { id } } = req;

  await connectDB();

  switch (method) {
    case 'GET':
      try {
        const blog = await Blog.findOne({ id }); // Find by id
        if (!blog) {
          return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(blog);
      } catch (error) {
        console.error('Error fetching blog:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
      break;
    // Add other cases for handling different HTTP methods (optional)
    default:
      res.setHeader('Allow', ['GET']); // Allowed methods for this route
      res.status(405).json({ message: `Method ${method} not allowed` });
  }
}