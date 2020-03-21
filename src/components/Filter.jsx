import React from 'react';

const Filter = () => (
    <form action="">
        <input type="text" placeholder="Nombre, autor..." />
        <div>
            <small>106 de 107 Libros</small>

            <input type="checkbox" id="filterCheckbox" />
            <label htmlFor="">Solo disponibles</label>
        </div>
    </form>
);

export default Filter;
