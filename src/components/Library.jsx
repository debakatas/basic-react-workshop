import React from 'react';
import Book from './Book';

const Library = () => (
    <div>
        {'.'
            .repeat(10)
            .split('')
            .map(() => (
                <Book></Book>
            ))}
    </div>
);

export default Library;
