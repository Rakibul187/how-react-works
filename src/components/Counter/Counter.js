import React from 'react';
import { useState } from 'react';
import Details from '../Details/Details';
import Step1 from '../Step1/Step1';

const Counter = (props) => {
    const [count, setCount] = useState(0)
    const Add = () => {
        setCount(count + 1)
    }
    return (
        <div style={{ border: '2px solid black', margin: '20px' }}>
            <h3>{count}</h3>
            <button onClick={Add}>Increase</button>
            <Details locaton={props.location} ></Details>
            <Step1 count={count}></Step1>
        </div>
    );
};

export default Counter;