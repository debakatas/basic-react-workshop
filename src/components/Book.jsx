import React from 'react';

const Book = ({ author, available, title, cover }) => {
    let className = 'book';

    if (!available) {
        className += ' book--unavailable';
    }

    return (
        <div className={className}>
            <figure className="book__img book-flip">
                <div className="book-flip__inner">
                    <div className="book-flip__front">
                        <img src={cover} alt="" />
                    </div>
                    <div className="book-flip__back">
                        <h2 className="book__title">
                            {title}
                        </h2>
                        <h3 className="book__author">
                            {author}
                        </h3>
                    </div>
                </div>
            </figure>
            <button type="button">
                {available ? 'Pedir' : 'No disponible'}
            </button>
        </div>
    );
};

export default Book;
