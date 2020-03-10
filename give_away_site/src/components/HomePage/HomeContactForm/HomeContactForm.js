import React, { useState } from 'react';
import "./HomeContactForm.scss";
import StepsBanner from '../../Common/StepsBanner/StepsBanner';

const HomeContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const validateEmail = (email) => {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return (
        <>
            <div id="form-section">
                <div id="form-wrapper">
                    <div id="form-left"></div>
                    <div id="form-right">
                        <form>
                            <div className="title-row">
                                <p>Skontaktuj się z nami</p>
                                <div id="vector-icon"></div>
                            </div>

                            <div className="form-row">
                                <div className="form">
                                    <label>Wpisz swoje imię</label>
                                    <input
                                        type="name"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        placeholder="Krzysztof" />
                                    {name.length > 0 ? <p className="error-message">Podane imie jest nieprawidłowe!</p> : ''}
                                </div>

                                <div className="form">
                                    <label>Wpisz swój email</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="abc@xyz.pl" />
                                    {validateEmail(email) ? <p className="error-message">Podany email jest nierpawidlowy!</p> : ''}
                                </div>
                            </div>

                            <div className="form-row" id="text-area-row">
                                <div className="form-full">
                                    <label>Wpisz swoją wiadomość</label>
                                    <textarea
                                        type="message"
                                        value={message}
                                        onChange={e => setMessage(e.target.value)}
                                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                                    {message.length < 120 ? <p className="error-message">Podany tekst jest nieprawidłowy!</p> : ''}
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-full">
                                    <div className="button-wrapper">
                                        <button>Wyślij</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeContactForm;