import React, { useState, useEffect } from 'react';

const Filter = ({ filteredBooks, setFilteredBooks }) => {
    const [input, setInput] = useState('');
    const [onlyAvailable, setOnlyAvailable] = useState(
        false
    );

    useEffect(() => {
        const booksArray = Object.entries(filteredBooks);

        const filteredBooksArray = booksArray.filter(
            ([id, book]) => {
                let isFound = true;
                let isAvailable = true;

                if (input) {
                    isFound = `
                    ${book.author}
                    ${book.title}
                `
                        .toLowerCase()
                        .trim()
                        .includes(input);
                }

                if (isAvailable) {
                    isAvailable = book.available > 0;
                }

                return isFound && isAvailable;
            }
        );

        const filteredBooksObject = Object.fromEntries(
            filteredBooksArray
        );

        setFilteredBooks(filteredBooksObject);
    }, [input, onlyAvailable, filteredBooks]);

    return (
        <form className="filter">
            <input
                className="filter__search"
                type="text"
                placeholder="Nombre, autor..."
                onChange={(e) => {
                    setInput(e.target.value);
                }}
            />
            <div className="filter__options">
                <small>10 de 10 Libros</small>

                <label htmlFor="filterCheckbox">
                    <input
                        type="checkbox"
                        id="filterCheckbox"
                        onChange={(e) => {
                            setOnlyAvailable(
                                e.target.checked
                            );
                        }}
                    />
                    <small>Solo disponibles</small>
                </label>
            </div>
        </form>
    );
};

export default Filter;
