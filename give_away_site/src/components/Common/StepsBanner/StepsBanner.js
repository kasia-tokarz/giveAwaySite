import React from 'react';
import "./StepsBanner.scss";
const StepsBanner = ({ title }) => {
    return (
        <>
            <div className="steps">
                <p>{title}</p>
                <div className="svg-icon-three"></div>
            </div>
        </>
    );
};
export default StepsBanner;