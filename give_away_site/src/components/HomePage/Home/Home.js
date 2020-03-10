import React from 'react';
import HomeHeader from "../HomeUserPanel/HomeUserPanel";
import HomeThreeColumns from "../HomeThreeColumns/HomeThreeColumns";
import "./Home.scss";
import HomeSteps from '../HomeSteps/HomeSteps';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomeUserPanel from '../HomeUserPanel/HomeUserPanel';
import HomeHelpOptions from '../HomeHelpOptions/HomeHelpOptions';
import HomeContactForm from '../HomeContactForm/HomeContactForm';



const Home = () => {
    return (
        <>
            <div id="wrapper">
                <div id="background-left"></div>
                <div id="background-right">
                    <HomeUserPanel />
                    <div id="nav-wrapper">
                        <div>Start</div>
                        <div>O co chodzi?</div>
                        <div>O nas</div>
                        <div>Fundacja i organizacje</div>
                        <div>Kontakt</div>
                    </div>

                    <div id="home-text">
                        <p>Zacznij pomagć! </p>
                        <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                        <div id="svg-icon"></div>
                    </div>
                    <div id="text-wrapper">
                        <div>ODDAJ RZECZY</div>
                        <div>ZORGANIZUJ ZBIÓRKĘ</div>
                    </div>
                </div>
            </div>
            <HomeThreeColumns />
            <HomeSteps/>
            <HomeAbout />
            <HomeHelpOptions />
            <HomeContactForm />
        </>
    );
};

export default Home;