export const getStaticPaths = async () => {
    const res = await fetch('https://alvingarrin.vercel.app/api/data');
    // const res = await fetch('http://localhost:3000/api/data');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(blog => {
      return {
        params: { 
          id: blog.id.toString() 
        }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://alvingarrin.vercel.app/api/data/' + id);
    // const res = await fetch('http://localhost:3000/api/data/' + id);
    const data = await res.json();
  
    return {
      props: { blog: data }
    }
  }

const Details = ({ blog }) => {
    return ( 
      <div className="blog-details">
      {/* { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && ( */}
          <article>
              <h2>{ blog.title }</h2>
              <p>Written by { blog.author }</p>
              <div className='blog-paragraph'>{ blog.body }</div>
              {/* <button 
                className='button-global' 
                onClick={handleClick}>delete blog
              </button> */}
          </article>
      {/* )} */}
  </div>
     );
}
 
export default Details;