// This JSON will be our "back-end" (data)
import React from 'react';
import Book from './Book';

const API_URL =
    'https://gist.githubusercontent.com/Nikodermus/b80cd38c2314414a22d6588f735748fa/raw/cd43c2054f0ba351cdeb20417ec6e790e8146a93/paranormal-library.json';

const App = () => (
    <div>
        <Book></Book>
        <p>Biblioteca Paranormal</p>
    </div>
);

export default App;
