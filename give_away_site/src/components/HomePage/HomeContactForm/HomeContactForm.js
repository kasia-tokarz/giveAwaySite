import React, { useState, useEffect } from 'react';
import "./HomeContactForm.scss";
import StepsBanner from '../../Common/StepsBanner/StepsBanner';

const HomeContactForm = () => {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(false);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [message, setMessage] = useState("");
    const [messageError, setMessageError] = useState(false);



    const validateName = () => {
        if (name.trim().length !== name.trim().split(' ').join('').length) {
            setNameError(true);
            return false;
        } else {
            setNameError(false);
            return true;
        }
    }

    const validateMessage = () => {
        if (message.length < 10) {
            setMessageError(true);
            return false;


        }

        setMessageError(false);
        return true;
    }

    const validateEmail = () => {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const result = re.test(email);

        setEmailError(!result);
        return result;

    }

    useEffect(() => {
        







    });

    const validateAndSubmit = (ev) => {
        ev.preventDefault();
        if (validateName() && validateEmail() && validateMessage()) {
            
            fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
                method: "POST",
                body: JSON.stringify({
                    name,
                    email,
                    message
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error("Błąd sieci!");
                    }
                })
                .then(data => {
                    alert("saved!");
                })
                .catch(err => {
                    alert("Pojawiły się błędy - " + err.message);
                });

        }




    }

    return (
        <>
            <div id="form-section">
                <div id="form-wrapper">
                    <div id="form-left"></div>
                    <div id="form-right">
                        <form onSubmit={validateAndSubmit}>
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
                                    {nameError ? <p className="error-message">Podane imie jest nieprawidłowe!</p> : ''}
                                </div>

                                <div className="form">
                                    <label>Wpisz swój email</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="abc@xyz.pl" />
                                    {emailError ? <p className="error-message">Podany email jest nierpawidlowy!</p> : ''}
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
                                    {messageError ? <p className="error-message">Podany tekst jest nieprawidłowy!</p> : ''}
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