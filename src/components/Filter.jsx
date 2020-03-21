import React from 'react';

const Filter = () => (
    <form className="filter">
        <input
            className="filter__search"
            type="text"
            placeholder="Nombre, autor..."
        />
        <div className="filter__options">
            <small>106 de 107 Libros</small>

            <label htmlFor="filterCheckbox">
                <input
                    type="checkbox"
                    id="filterCheckbox"
                />
                <small>Solo disponibles</small>
            </label>
        </div>
    </form>
);

export default Filter;
