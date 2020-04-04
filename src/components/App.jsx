import React, { useState, useEffect } from 'react';
import Library from './Library';
import Clients from './Clients';

const App = () => {
    const [clients, setClients] = useState({});

    const [books, setBooks] = useState({});

    const [profit, setProfit] = useState(0);

    const [pricePerMinute, setPricePerMinute] = useState(0);

    useEffect(() => {
        console.log(document.querySelector('.app'));
    }); // component did update (component did mount)

    // component will mount (component did update)
    console.log(document.querySelector('.app'));

    return (
        <div className="app">
            <div className="clients-wrapper">
                <h1 className="cartel">
                    <span>Biblioteca Paranormal</span>
                    <small>{profit}</small>
                    <button
                        type="button"
                        onClick={() => {
                            setProfit(10);
                        }}
                    >
                        Cambiar profit
                    </button>
                </h1>

                <Clients />
            </div>
            <Library />
        </div>
    );
};

// component will mount
// component did mount

export default App;
