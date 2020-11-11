import React from 'react';

import './CounterOutput.css';

const counterOutput = (props) => (
    <div className="CounterOutput">
        Current Counter: {props.value.map((item) => <p>{item.id}</p>)}
    </div>
);

export default counterOutput;