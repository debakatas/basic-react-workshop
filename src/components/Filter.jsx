import React, { useState, useEffect } from 'react';

const Filter = ({ books, setBooksFiltered }) => {
    const [input, setInput] = useState('');
    const [onlyAvailable, changeOnlyAvailable] = useState(
        false
    );

    useEffect(() => {
        Object.entries(books).filter(([id, book]) => {
            let isAvailable = false;
            let hasMatch = false;

            if (onlyAvailable) {
                console.log('');
            }

            return true;
        });
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
                <small>106 de 107 Libros</small>

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
