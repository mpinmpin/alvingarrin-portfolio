import Head from "next/head";

const Scratch = () => {
    return ( 
        <>
            <Head>
                <title>Scratch</title>
            </Head>
            <div className="about">
                <h2>This is scratch</h2>
                <p>{10+12}</p>
            </div>
        </>
     );
}
 
export default Scratch;