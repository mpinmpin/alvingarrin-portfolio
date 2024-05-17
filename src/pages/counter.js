import Head from "next/head";
import { useState } from "react";

const Counter = () => {

    const [counter, setCounter] = useState(0)
    
    const handleClick = () => {
        setCounter(counter + 1);
    }

    return ( 
        <>
            <Head>
                <title>Counter</title>
            </Head>
            <div className="counter">
                <p>You have clicked: {counter} times</p>
                <button className="button-global" onClick={handleClick}>click here</button>
            </div>
        </>
        
     );
}
 
export default Counter;