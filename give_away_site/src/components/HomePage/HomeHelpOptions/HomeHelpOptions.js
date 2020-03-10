import React from 'react';
import './HomeHelpOptions.scss';
import StepsBanner from '../../Common/StepsBanner/StepsBanner';

const HomeHelpOptions = () => {
    return (
        <>

            <StepsBanner title="Komu pomagamy?" />
            <div id="section-help">
                <div id="banner-choose">
                    <div>Fundacjom</div>
                    <div>
                        <p>Organizacjom</p> <p>pozarządowym</p></div>
                    <div><p>Lokalnym</p> <p>zbiórkom</p></div>
                </div>
                <p id="help-text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                <ul>
                    <li id="first-list" >
                        <p className="header-list">Fundacja  “Dbam o Zdrowie”</p>
                        <p className="help-list">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p> 
                        <p className="inner-text">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                        <hr/>
                    </li>
                    
                    <li id="first-list" >
                        <p className="header-list">Fundacja  “Dla dzieci”</p>
                        <p className="help-list">ubrania, meble, zabawki</p> 
                        <p className="inner-text">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                        <hr/>
                    </li>
                    
                    <li id="first-list" >
                        <p className="header-list">Fundacja  “Bez domu”</p>
                        <p className="help-list">ubrania, jedzenie, ciepłe koce</p> 
                        <p className="inner-text">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                    </li>
                </ul>

                <div id="help-toogle">
                    <div id="first-toogle" className="toogle-list">1</div>
                    <div id="second-toogle" className="toogle-list">2</div>
                    <div id="third-toogle" className="toogle-list">3</div>
                </div>
            </div>
        </>
    );
};

export default HomeHelpOptions;