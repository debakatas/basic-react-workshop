import React, { useState, useEffect } from 'react';

const Filter = ({ books, setBooksFiltered }) => {
    const [input, setInput] = useState('');
    const [onlyAvailable, changeOnlyAvailable] = useState(
        false
    );
    const [counter, setCounter] = useState('0 de 0 Libros');

    useEffect(() => {
        const arrayBooks = Object.entries(books);
        const arrayFiltrado = arrayBooks.filter(
            ([id, book]) => {
                let isAvailable = true;
                let hasMatch = true;

                if (onlyAvailable) {
                    isAvailable = book.available;
                }

                if (input) {
                    hasMatch = `
                    ${book.author}
                    ${book.title}
                `
                        .toLowerCase()
                        .includes(input.toLowerCase());
                }

                return hasMatch && isAvailable;
            }
        );

        const objFiltrado = Object.fromEntries(
            arrayFiltrado
        );
        setBooksFiltered(objFiltrado);

        setCounter(
            `${arrayFiltrado.length} de ${arrayBooks.length} Libros`
        );
    }, [books, input, onlyAvailable]);

    return (
        <form className="filter">
            <input
                className="filter__search"
                type="text"
                placeholder="Nombre, autor..."
                onChange={(event) => {
                    setInput(event.target.value);
                }}
            />
            <div className="filter__options">
                <small>{counter}</small>

                <label htmlFor="filterCheckbox">
                    <input
                        type="checkbox"
                        id="filterCheckbox"
                        onChange={(event) => {
                            changeOnlyAvailable(
                                event.target.checked
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
