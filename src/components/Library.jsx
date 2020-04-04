import React, { useState, useEffect } from 'react';

import Book from './Book';
import NoBook from './NoBook';
import Filter from './Filter';

const Library = ({
    books,
    clients,
    setClients,
    activeUser,
}) => {
    const [filteredBooks, setFilteredBooks] = useState(
        books
    );

    useEffect(() => {
        setFilteredBooks(books);
    }, [books]);

    const filteredBooksArray = Object.entries(
        filteredBooks
    );

    return (
        <div className="library-wrapper">
            <Filter
                books={books}
                filteredBooks={filteredBooks}
                setFilteredBooks={setFilteredBooks}
            />
            <div className="shelter">
                {filteredBooksArray.length ? (
                    filteredBooksArray.map(([id, book]) => (
                        <Book
                            activeUser={activeUser}
                            key={id}
                            id={id}
                            author={book.author}
                            available={book.available}
                            cover={book.cover}
                            title={book.title}
                            setClients={setClients}
                            clients={clients}
                        />
                    ))
                ) : (
                    <NoBook></NoBook>
                )}
            </div>
        </div>
    );
};

export default Library;
