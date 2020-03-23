// This JSON will be our "back-end" (data)
import React, { useEffect, useState } from 'react';
import Library from './Library';
import Clients from './Clients';

const API_URL =
    'https://gist.githubusercontent.com/Nikodermus/b80cd38c2314414a22d6588f735748fa/raw/25785388fc6b24acf9aeb7ee1b1f9d0f4d140f5f/paranormal-library.json';

const App = () => {
    const [books, setBooks] = useState({});
    const [clients, setClients] = useState({});
    const [activeUser, setActiveUser] = useState('');
    const [profit, setProfit] = useState(0);
    const [minutePrice, setMinutePrice] = useState(0);

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                setBooks(data.books);
                setMinutePrice(data.minutePrice);
            });
    }, []);

    return (
        <div className="app">
            <Clients
                activeUser={activeUser}
                setActiveUser={setActiveUser}
                clients={clients}
                setClients={setClients}
                profit={profit}
                setProfit={setProfit}
                setBooks={setBooks}
                minutePrice={minutePrice}
            ></Clients>
            <Library
                setBooks={setBooks}
                setClients={setClients}
                books={books}
                activeUser={activeUser}
                clients={clients}
            ></Library>
        </div>
    );
};

export default App;
