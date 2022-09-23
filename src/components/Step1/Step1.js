import React from 'react';
import Step2 from '../Step2/Step2';

const Step1 = (props) => {
    return (
        <div style={{ border: '2px solid red', margin: '20px' }}>
            <h3>This is step-1</h3>
            <h6>step1:{props.count}</h6>
            <Step2 count={props.count}></Step2>
        </div>
    );
};

export default Step1;