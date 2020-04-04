import React, { useState, useEffect } from 'react';
import Library from './Library';
import Clients from './Clients';

const BACK_URL =
    'https://gist.githubusercontent.com/Nikodermus/b80cd38c2314414a22d6588f735748fa/raw/25785388fc6b24acf9aeb7ee1b1f9d0f4d140f5f/paranormal-library.json';

const App = () => {
    const [clients, setClients] = useState({});

    const [books, setBooks] = useState({});

    const [profit, setProfit] = useState(0);

    const [pricePerMinute, setPricePerMinute] = useState(0);

    useEffect(() => {
        fetch(BACK_URL)
            .then((res) => res.json())
            .then((data) => {
                setBooks(data.books);
                setPricePerMinute(data.minutePrice);
            });
    }, []); // component did mount

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
            <Library books={books} />
        </div>
    );
};

// component will mount
// component did mount

export default App;
