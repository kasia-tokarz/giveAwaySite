import React, { useRef } from 'react';
import HomeHeader from "../HomeUserPanel/HomeUserPanel";
import {Link} from "react-router-dom";
import HomeThreeColumns from "../HomeThreeColumns/HomeThreeColumns";
import "./Home.scss";
import HomeSteps from '../HomeSteps/HomeSteps';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomeUserPanel from '../HomeUserPanel/HomeUserPanel';
import HomeHelpOptions from '../HomeHelpOptions/HomeHelpOptions';
import HomeContactForm from '../HomeContactForm/HomeContactForm';
import { DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const Home = () => {
    const myRef = useRef(0)
    const executeScroll = (name) => {
        scroller.scrollTo(name, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    };
    return (
        <>
            <div id="wrapper">
                <div id="background-left"></div>
                <div id="background-right">
                    <HomeUserPanel />
                    <nav id="nav-wrapper">
                        <a>Start</a>
                        <a onClick={() => executeScroll('homeSteps')}>O co chodzi?</a>
                        <a onClick={() => executeScroll('aboutUs')}>O nas</a>
                        <a onClick={() => executeScroll('fundation')}>Fundacja i organizacje</a>
                        <a onClick={() => executeScroll('form')}>Kontakt</a>
                    </nav>
                    <div id="home-text">
                        <p>Zacznij pomagć! </p>
                        <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                        <div id="svg-icon"></div>
                    </div>
                    <div id="text-wrapper">
                        <Link to="/zaloguj"><div>ODDAJ RZECZY</div></Link>
                        <Link to="/zaloguj"><div>ZORGANIZUJ ZBIÓRKĘ</div></Link>
                    </div>
                </div>
            </div>
            <HomeThreeColumns />
            <Element name="homeSteps">
                <HomeSteps />
            </Element>
            <Element name="aboutUs">
                <HomeAbout />
            </Element>
            <Element name="fundation">
                <HomeHelpOptions />
            </Element>
            <Element name="form">
                <HomeContactForm />
            </Element>
        </>
    );
};
export default Home;
