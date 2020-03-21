// This JSON will be our "back-end" (data)
import React, { useEffect } from 'react';
import Library from './Library';
import Clients from './Clients';

const API_URL =
    'https://gist.githubusercontent.com/Nikodermus/b80cd38c2314414a22d6588f735748fa/raw/25785388fc6b24acf9aeb7ee1b1f9d0f4d140f5f/paranormal-library.json';

const App = () => {
    const [info, setInfo] = React.useState({
        minutePrice: 0,
        books: {},
    });

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => setInfo(data));
    }, []);

    return (
        <div className="app">
            <Clients></Clients>
            <Library books={info.books}></Library>
        </div>
    );
};

export default App;
