import React from 'react';

const Book = () => (
    <div className="book book--unavailable">
        <figure className="book__img book-flip">
            <div className="book-flip__inner">
                <div className="book-flip__front">
                    <img
                        src="http://debakatas.com/cover/enlasmontanasdelalocura.jpg"
                        alt=""
                    />
                </div>
                <div className="book-flip__back">
                    <h2 className="book__title">
                        En las montañas de la Locura
                    </h2>
                    <h3 className="book__author">
                        H.P Lovecraft
                    </h3>
                </div>
            </div>
        </figure>
        <button type="button">No disponible</button>
    </div>
);

export default Book;
