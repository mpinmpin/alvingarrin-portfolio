import Head from "next/head";
import { useState } from "react";

const BMICalculator = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBMI] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const calculateBMI = () => {
        if (!weight || !height) {
            setErrorMessage('Please input your height and weight.');
            setBMI(null);
            return;
          }

        const weightInPounds = parseFloat(weight);
        const heightInInches = parseFloat(height / 100);
        const calculatedBMI = (weightInPounds / (heightInInches * heightInInches));
        
        setBMI(calculatedBMI.toFixed(2));
        setErrorMessage('');
    };

    return (
         <>
            <Head>
                <title>BMI Calculator</title>
            </Head>
            <div className="bmi">
                <h2>BMI Calculator</h2>
                <div>
                    <label>Weight (kg):</label>
                    <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    />
                </div>
                <div>
                    <label>Height (cm):</label>
                    <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    />
                    </div>
                <button className='button-global' onClick={calculateBMI}>Calculate BMI</button>
                {errorMessage && <p>{errorMessage}</p>}
                {bmi && <p>Your BMI is: {bmi}</p>}
            </div>
        </>
        
     );
}
 
export default BMICalculator;