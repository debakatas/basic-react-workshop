import React from 'react';

const Book = ({
    author,
    available,
    title,
    cover,
    clients,
    setClients,
    activeUser,
    id,
    setBooks,
}) => {
    let className = 'book';

    if (!available) {
        className += ' book--unavailable';
    }

    const addBook = () => {
        const booksActiveUser = clients[activeUser].books;
        if (
            !booksActiveUser[id] &&
            Object.keys(booksActiveUser).length < 3
        ) {
            setClients((prevClients) => ({
                ...prevClients,
                [activeUser]: {
                    books: {
                        ...prevClients[activeUser].books,
                        [id]: {
                            author,
                            title,
                            cover,
                            dateRequested: Date.now(),
                        },
                    },
                },
            }));

            setBooks((prevBooks) => ({
                ...prevBooks,
                [id]: {
                    ...prevBooks[id],
                    available: prevBooks[id].available - 1,
                },
            }));
        }
    };

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
            <button type="button" onClick={addBook}>
                {available ? 'Pedir' : 'No disponible'}
            </button>
        </div>
    );
};

export default Book;
