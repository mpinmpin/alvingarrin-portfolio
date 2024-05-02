import Head from "next/head";
import Link from 'next/link';


export const getStaticProps = async () => {
  
  try {
    const res = await fetch('https://alvingarrin.vercel.app/api/data');
    
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();

    return {
      props: { blogs: data }
    };

  } catch (error) {
    console.error('Error fetching data:', error.message);
    return {
      props: { blogs: [] }, // Empty array if data fetching fails
      // Revalidate the page after a certain period
      revalidate: 1 // seconds
    };
  }
}

const Blogs = ({ blogs }) => {
  return (
    <>
      <Head>
        <title>My Site | Blogs</title>
      </Head>
      {blogs.length === 0 ? (
        <div className="error-message">
          <p>Failed to fetch blogs. Please try again later.</p>
        </div>
      ) : (
        <div className="blog-list">
          <h2>Blogs</h2>
          {blogs.map(blog => (
            <div className="blog-preview" key={blog.id} >
              <Link href={`/blogs/${blog.id}`}>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
 
export default Blogs;