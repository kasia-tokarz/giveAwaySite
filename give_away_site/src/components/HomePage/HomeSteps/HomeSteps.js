import React from 'react';
import "./HomeSteps.scss"

const HomeSteps = () => {
    return (
        <>
            <div className="steps">
                <p>Wystarczą 4 proste kroki</p>
                <div className="svg-icon-three"></div>
            </div>

            <div id="section-steps">
                <div className="one-step" >
                    <div id="step-one"></div>
                    <p>Wybierz rzeczy</p>
                    <hr/>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                  
                </div>
                <div className="one-step" >
                    <div id="step-two"></div>
                    <p>Spakuj je</p>
                    <hr/>
                    <p>skorzystaj z worków na śmieci</p>
                    
                </div>
                <div className="one-step" >
                    <div id="step-three"></div>
                    <p>Zdecyduj komu chcesz pomóc</p>
                    <hr/>
                    <p>wybierz zaufane miejsce</p>
                   
                </div>
                <div className="one-step" >
                    <div id="step-four"></div>
                    <p>Zamów kuriera</p>
                    <hr/>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                    
                </div>

            </div>
            <div id="section-give">
                <div id="give-wrapper">
                    <p className="give-text">ODDAJ</p>
                    <p className="give-text">RZECZY</p>
                </div>
            </div>
        </>
    );
};

export default HomeSteps;