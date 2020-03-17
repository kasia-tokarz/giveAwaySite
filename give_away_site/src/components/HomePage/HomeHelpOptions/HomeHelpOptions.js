import React, { useState, useEffect } from 'react';
import './HomeHelpOptions.scss';
import StepsBanner from '../../Common/StepsBanner/StepsBanner';
const HomeHelpOptions = () => {


    const allOptionsArray = [
        {
            name: 'fundations',
            id: 0,
            activePage: 0,
            description: 'W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.',
            values: [{
                title: 'Organizacja "Lorem Ipsum 1"',
                titleSubText: "Quis varius quam quiqse id diam vel quam elementum pulvinar.",
                description: 'Egestat, sed, tempus'
            },
            {
                title: 'Organizacja "Lorem Ipsum 2"',
                titleSubText: "Quis varius quam quiqse id diam vel quam elementum pulvinar.",
                description: 'Egestat, sed, tempus'
            },
            {
                title: 'Organizacja "Lorem Ipsum 22"',
                titleSubText: "Quis varius quam quiqse id diam vel quam elementum pulvinar.",
                description: 'Egestat, sed, tempus'
            },
            {
                title: 'Organizacja "Lorem Ipsum 23"',
                titleSubText: "Quis varius quam quiqse id diam vel quam elementum pulvinar.",
                description: 'Egestat, sed, tempus'
            }
            ]
        },
        {
            name: 'organisations',
            id: 1,
            activePage: 0,
            description: 'Opis organizacji',
            values: [{
                title: 'Organizacja "Lorem Ipsum 3"',
                titleSubText: "Quis varius quam quiqse id diam vel quam elementum pulvinar.",
                description: 'Egestat, sed, tempus'
            },
            {
                title: 'Organizacja "Lorem Ipsum 4"',
                titleSubText: "Quis varius quam quiqse id diam vel quam elementum pulvinar.",
                description: 'Egestat, sed, tempus'
            }
            ]
        },
        {
            name: 'localCharities',
            id: 2,
            activePage: 0,
            description: 'todo',
            values: [{
                title: 'Organizacja "Lorem Ipsum 5"',
                titleSubText: "Quis varius quam quiqse id diam vel quam elementum pulvinar.",
                description: 'Egestat, sed, tempus'
            },
            {
                title: 'Organizacja "Lorem Ipsum 6"',
                titleSubText: "Quis varius quam quiqse id diam vel quam elementum pulvinar.",
                description: 'Egestat, sed, tempus'
            }
            ]
        },




    ];

    const [allOptions] = useState(allOptionsArray);
    const [activeOption, setActiveOption] = useState(allOptions[0]);
    const [activeOptionId, setActiveOptionId] = useState(0);
    const [activePage, setActivePage] = useState(1);

const setVisibleOption = id => {
    
    setActiveOptionId(id);
    setActivePage(1);
}

    useEffect(() => {
        setActiveOption(allOptions[activeOptionId]);
    });

    return (
        <>
            <StepsBanner title="Komu pomagamy?" />
            <div id="section-help">
                <div id="banner-choose">

                    <div onClick={() => setVisibleOption(0)} className={activeOptionId === 0 ? 'active' : ''}>
                        Fundacjom
                    </div>
                    <div onClick={() => setVisibleOption(1)} className={activeOptionId === 1 ? 'active' : ''}>
                        <p>Organizacjom</p>
                        <p>pozarządowym</p>
                    </div>
                    <div onClick={() => setVisibleOption(2)} className={activeOptionId === 2 ? 'active' : ''}>
                        <p>Lokalnym</p>
                        <p>zbiórkom</p>
                    </div>


                </div>
                <p id="help-text">{activeOption.description}</p>

                <ul>

                    <li className="first-list">
                        {activeOption.values
                            .slice((activePage - 1) * 3, activePage * 3)
                            .map(value => {
                                return (
                                    <>

                                        <p className="header-list">{value.title}</p>
                                        <p className="help-list">{value.description}</p>
                                        <p className="inner-text">{value.titleSubText}</p>
                                    </>

                                );


                            })}

                        

                    </li>



                </ul>
                <hr />

                <div id="help-toogle">
                
                    {activeOption.values
                        .map((value, i) => {
                            if (i % 3 === 0) {
                                return <div key={i} className={activePage === i / 3 + 1 ? 'activePage pageButton' : 'pageButton'} onClick={() => setActivePage(i / 3 + 1)} key={i}>{i / 3 + 1}</div>
                            }

                        })}


                    {/* <div id="first-toogle" className="toogle-list">1</div>
                    <div id="second-toogle" className="toogle-list">2</div>
                    <div id="third-toogle" className="toogle-list">3</div> */}
                </div>
            </div>
        </>
    );
};
export default HomeHelpOptions;