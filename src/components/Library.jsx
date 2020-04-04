import React, { useState, useEffect } from 'react';

import Book from './Book';
import NoBook from './NoBook';
import Filter from './Filter';

const Library = ({ books }) => {
    const [filteredBooks, setFilteredBooks] = useState(
        books
    );

    useEffect(() => {
        setFilteredBooks(books);
    }, [books]);

    return (
        <div className="library-wrapper">
            <Filter
                filteredBooks={filteredBooks}
                setFilteredBooks={setFilteredBooks}
            />
            <div className="shelter">
                {Object.entries(filteredBooks).map(
                    ([id, book]) => (
                        <Book
                            key={id}
                            author={book.author}
                            available={book.available}
                            cover={book.cover}
                            title={book.title}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default Library;
