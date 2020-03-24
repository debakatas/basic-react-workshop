import React, { useState, useEffect } from 'react';
import Book from './Book';
import Filter from './Filter';
import NoBook from './NoBook';

const Library = ({
    books,
    setBooks,
    setClients,
    activeUser,
    clients,
}) => {
    const [booksFiltered, setBooksFiltered] = useState(
        books
    );

    const arrayBooks = Object.entries(booksFiltered);

    return (
        <div>
            <Filter
                books={books}
                setBooksFiltered={setBooksFiltered}
            ></Filter>
            <div className="shelter">
                {arrayBooks.length ? (
                    arrayBooks.map(([id, book]) => (
                        <Book
                            {...book}
                            id={id}
                            setBooks={setBooks}
                            setClients={setClients}
                            activeUser={activeUser}
                            clients={clients}
                        ></Book>
                    ))
                ) : (
                    <NoBook></NoBook>
                )}
            </div>
        </div>
    );
};

export default Library;
