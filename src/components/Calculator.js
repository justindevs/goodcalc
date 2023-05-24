import {useState} from "react";

function Calculator() {

    const [result, setResult] = useState('');
    const calcTemp = (event) => {
        setResult((event.target.value * 9/5) + 32);
    }

    return (
        <div>
            <div>
                <label>
                    Temp in C
                </label>
                <input onChange={calcTemp}/>
            </div>
            <div>
                Result {result}
            </div>
        </div>
    );
}

export default Calculator;
