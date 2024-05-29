import Head from "next/head";
import useFetchData from '@/hooks/useFetchData';

const Scratch = () => {
    
    const { data: blog, loading, error } = useFetchData('https://alvingarrin.vercel.app/api/data');

    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error.message}</p>;
    }
  
    return (
      <div>
        <h1>{blog.title}</h1>
        <p>{blog.author}</p>
      </div>
    );
}
 
export default Scratch;