import React from 'react';

const Book = ({
    title,
    available,
    cover,
    author,
    id,
    setBooks,
    setClients,
    activeUser,
    clients,
}) => {
    const lendBook = () => {
        const myUser = clients[activeUser];

        const arrayUserBooks = Object.entries(myUser.books);

        if (
            arrayUserBooks.length < 3 &&
            !myUser.books[id]
        ) {
            myUser.books[id] = {
                cover,
                id,
                title,
                dateRequested: Date.now(),
            };

            setBooks((oldBooks) => {
                const books = { ...oldBooks };
                books[id].available -= 1;

                return {
                    ...books,
                };
            });
        }

        setClients({
            ...clients,
            [activeUser]: myUser,
        });
    };

    return (
        <div
            className={`book ${
                available ? '' : 'book--unavailable'
            }`}
        >
            <figure className="book__img book-flip">
                <div className="book-flip__inner">
                    <div className="book-flip__front">
                        <img src={cover} alt="" />
                    </div>
                    <div
                        className="book-flip__back"
                        style={{
                            backgroundImage: `url(${cover})`,
                        }}
                    >
                        <h2>{title}</h2>
                        <h3>{author}</h3>
                    </div>
                </div>
            </figure>
            <button type="button" onClick={lendBook}>
                {!available ? 'No disponible' : 'Pedir'}
            </button>
        </div>
    );
};

export default Book;
