import React from 'react';

const Book = ({ title, available, author, cover }) => (
    <div
        className={`book ${
            available ? '' : 'book--unavailable'
        }`}
    >
        <figure className="book__img">
            <img src={cover} alt="" />
        </figure>
        <button type="button">
            {!available ? 'No disponible' : 'Pedir'}
        </button>
    </div>
);

export default Book;
