import React from 'react';
import Book from './Book';
import Filter from './Filter';

const Library = () => (
    <div>
        <Filter></Filter>
        {'.'
            .repeat(10)
            .split('')
            .map(() => (
                <Book></Book>
            ))}
    </div>
);

export default Library;
