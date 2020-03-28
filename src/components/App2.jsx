import React from 'react';

const App = () => (
    <div className="app">
        <div className="clients-wrapper">
            <h1 className="cartel">
                <span>Biblioteca Paranormal</span>
                <small>0.00</small>
            </h1>

            <div className="clients">
                <div className="create-user__wrapper">
                    <form className="create-user">
                        <input
                            type="text"
                            placeholder="Nickname"
                            name="nickname"
                        />
                        <button type="submit">+</button>
                    </form>

                    <small className="error">
                        Algo salio masl!
                    </small>
                </div>
                <div className="user user__highlight">
                    <button type="button">Deumus</button>
                    <figure className="user__books">
                        <img
                            src="http://debakatas.com/cover/enlasmontanasdelalocura.jpg"
                            alt="En las montañas de la Locura"
                        />
                    </figure>
                </div>
            </div>
        </div>
        <div className="library-wrapper">
            <form className="filter">
                <input
                    className="filter__search"
                    type="text"
                    placeholder="Nombre, autor..."
                />
                <div className="filter__options">
                    <small>10 de 10 Libros</small>

                    <label htmlFor="filterCheckbox">
                        <input
                            type="checkbox"
                            id="filterCheckbox"
                        />
                        <small>Solo disponibles</small>
                    </label>
                </div>
            </form>
            <div className="shelter">
                <div className="book book--unavailable">
                    <figure className="book__img book-flip">
                        <div className="book-flip__inner">
                            <div className="book-flip__front">
                                <img
                                    src="http://debakatas.com/cover/enlasmontanasdelalocura.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="book-flip__back">
                                <h2 className="book__title">
                                    En las montañas de la
                                    Locura
                                </h2>
                                <h3 className="book__author">
                                    H.P Lovecraft
                                </h3>
                            </div>
                        </div>
                    </figure>
                    <button type="button">
                        No disponible
                    </button>
                </div>
                <div className="book">
                    <figure className="book__img book-flip">
                        <div className="book-flip__inner">
                            <div className="book-flip__front">
                                <img
                                    src="http://debakatas.com/cover/enlasmontanasdelalocura.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="book-flip__back">
                                <h2 className="book__title">
                                    En las montañas de la
                                    Locura
                                </h2>
                                <h3 className="book__author">
                                    H.P Lovecraft
                                </h3>
                            </div>
                        </div>
                    </figure>
                    <button type="button">Pedir</button>
                </div>
                <div className="no-book">
                    <button type="button">
                        Ningún libro encontrado...
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default App;
