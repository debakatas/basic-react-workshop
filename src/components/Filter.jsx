import React, { useState, useEffect } from 'react';

const Filter = ({ books, setFilteredBooks }) => {
    const [input, setInput] = useState('');
    const [counter, setCounter] = useState('0 de 0 Libros');
    const [onlyAvailable, setOnlyAvailable] = useState(
        false
    );

    useEffect(() => {
        const booksArray = Object.entries(books);

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
                        .includes(
                            input.toLowerCase().trim()
                        );
                }

                if (onlyAvailable) {
                    isAvailable = book.available > 0;
                }

                return isFound && isAvailable;
            }
        );

        const filteredBooksObject = Object.fromEntries(
            filteredBooksArray
        );

        setFilteredBooks(filteredBooksObject);
        setCounter(
            `${filteredBooksArray.length} de ${booksArray.length} Libros`
        );
    }, [input, onlyAvailable, books]);

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
                <small>{counter}</small>

                <label htmlFor="filterCheckbox">
                    <input
                        type="checkbox"
                        id="filterCheckbox"
                        onClick={(e) => {
                            console.log('test');

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
