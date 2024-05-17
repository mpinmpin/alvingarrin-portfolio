import Head from "next/head";
import Link from 'next/link';

// import styles from "@/styles/Home.module.css";


const Home = () => {
  
  return (
    <>
      <Head>
        <title>Alvin Garrin | Home</title>
      </Head>
      <div className="home">
        <div>
          <h2>Hi, I&lsquo;m Alvin</h2>
          <h3>Web Developer</h3>
          <p>I build and design web apps and sites. I work with HTML5, CSS3, JavaScript, React and Next. <Link className="home-about" href="/about">More about me..</Link></p>
        </div>
      </div>
    </>
  );
}
 
export default Home;