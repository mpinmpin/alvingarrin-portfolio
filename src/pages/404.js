import Head from "next/head";
import Link from "next/link";

const NotFound = () => {
    return ( 
      <>
        <Head>
          <title>Error 404</title>
        </Head>
        <div className="not-found">
          <h2>Sorry</h2>
          <p>Error 404. This page cannot be found</p>
          <div className="not-found-link">
          <Link href='/'>Back to the homepage</Link>
          </div>
          
        </div> </>
       
     );
}
 
export default NotFound;