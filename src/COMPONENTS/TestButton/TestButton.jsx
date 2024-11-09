import React from 'react';
import styles from './TestButton.module.scss';
import './test.js';

const TestButton = ({children, ...props}) => {

   


    return (
        <button data-type="shadow" {...props}>{children}</button>
    );
};


export default TestButton;