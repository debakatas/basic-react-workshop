import React from 'react';

import Book from './Book';
import NoBook from './NoBook';
import Filter from './Filter';

const Library = ({ books }) => (
    <div className="library-wrapper">
        <Filter />
        <div className="shelter">
            {Object.entries(books).map(([id, book]) => (
                <Book
                    key={id}
                    author={book.author}
                    available={book.available}
                    cover={book.cover}
                    title={book.title}
                />
            ))}
        </div>
    </div>
);

export default Library;
