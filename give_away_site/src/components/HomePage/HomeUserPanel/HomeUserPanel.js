import React from 'react';
import "./HomeUserPanel.scss";
import {Link} from "react-router-dom";
const HomeUserPanel = () => {
    return (
        <>
            <div id="user-wrapper">
                <Link to="/zaloguj"><div>Zaloguj</div></Link> 
                <Link to="/zarejstruj"><div>Załóz konto</div></Link> 
            </div>
        </>
    );
};

export default HomeUserPanel;