// models/Blog.js
import mongoose, { Schema } from 'mongoose';

const blogSchema = new Schema(
    {
        id: Number,
        title: String,
        body: String,
        author: String,
    },
    {
        timestamps: true,
    });

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

export default Blog;




// models/Blog.js
// import mongoose, { Schema } from 'mongoose';

// let Blog;

// try {
//     // Attempt to retrieve the existing model
//     Blog = mongoose.model('Blog');
// } catch (error) {
//     // If the model does not exist, define it
//     const blogSchema = new Schema({
//         id: Number,
//         title: String,
//         body: String,
//         author: String,
//     }, {
//         timestamps: true,
//     });

//     Blog = mongoose.model('Blog', blogSchema);
// }

// export default Blog;


