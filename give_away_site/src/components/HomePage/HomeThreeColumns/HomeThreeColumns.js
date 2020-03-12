import React from 'react';
import "./HomeThreeColumns.scss";

const HomeThreeColumns = () => {
    return (
        <>
            <div id="three-columns-wrapper">
                <div className="three-wrapper">
                    <h2 id="three-number">10</h2>
                    <p id="three-header">ODDANYCH WORKÓW</p>
                    <p id="three-text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className="three-wrapper">
                    <h2 id="three-number">5</h2>
                    <p id="three-header">WSPARTYCH ORGANIZACJI</p>
                    <p id="three-text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className="three-wrapper">
                    <h2 id="three-number">7</h2>
                    <p id="three-header">ZORGANIZOWANYCH ZBIÓREK</p>
                    <p id="three-text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
            </div>
        </>
    );
};
export default HomeThreeColumns;