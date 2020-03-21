import React from 'react';
import Book from './Book';
import Filter from './Filter';

const Library = () => (
    <div>
        <Filter></Filter>
        <div className="shelter">
            {'.'
                .repeat(10)
                .split('')
                .map(() => (
                    <Book></Book>
                ))}
        </div>
    </div>
);

export default Library;
