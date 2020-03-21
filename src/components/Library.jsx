import React, { useState } from 'react';
import Book from './Book';
import Filter from './Filter';

const Library = ({ books }) => {
    const [booksFiltered, setBooksFiltered] = useState(
        books
    );

    return (
        <div>
            <Filter
                books={books}
                setBooksFiltered={setBooksFiltered}
            ></Filter>
            <div className="shelter">
                {Object.entries(booksFiltered).map(
                    ([id, book]) => (
                        <Book {...book}></Book>
                    )
                )}
            </div>
        </div>
    );
};

export default Library;
