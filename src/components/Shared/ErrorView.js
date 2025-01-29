/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
// import './ErrorView.css';

const ErrorView = ({ onRetry }) => {
    return (
        <div className="error-view">
            <p>Something went wrong. Please try again</p>
            <button onClick={onRetry}>Try Again</button>
        </div>
    );
};

export default ErrorView;