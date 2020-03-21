import React from 'react';

const Book = ({
    title,
    available,
    author,
    cover,
    id,
    setInfo,
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
        }

        console.log({
            ...clients,
            [activeUser]: myUser,
        });

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
            <figure className="book__img">
                <img src={cover} alt="" />
            </figure>
            <button type="button" onClick={lendBook}>
                {!available ? 'No disponible' : 'Pedir'}
            </button>
        </div>
    );
};

export default Book;
