import React from 'react';

const Step2 = (props) => {
    return (
        <div style={{ border: '2px solid blue', margin: '20px' }}>
            <h3>This step-2</h3>
            <h6>STEP: {props.count}</h6>
        </div>
    );
};

export default Step2;