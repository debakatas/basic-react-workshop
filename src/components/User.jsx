import React from 'react';

const User = ({
    id,
    books,
    setActiveUser,
    activeUser,
    setBooks,
    setProfit,
    pricePerMinute,
    setClients,
}) => {
    const returnBook = (idBook) => {
        setBooks((prevBooks) => ({
            ...prevBooks,
            [idBook]: {
                ...prevBooks[idBook],
                available: prevBooks[idBook].available + 1,
            },
        }));

        setClients((prevClients) => {
            const userBooks = { ...books };
            delete userBooks[idBook];

            return {
                ...prevClients,
                [id]: {
                    books: userBooks,
                },
            };
        });

        setProfit((prevProfit) => {
            const { dateRequested } = books[idBook];
            const differenceMs = Date.now() - dateRequested;
            const differenceSec = differenceMs / 1000;

            const pricePerSec = pricePerMinute / 60;

            return prevProfit + pricePerSec * differenceSec;
        });
    };

    return (
        <div
            className={`user ${
                id === activeUser ? 'user__highlight' : ''
            }`}
        >
            <button
                type="button"
                onClick={() => {
                    setActiveUser(id);
                }}
            >
                {id}
            </button>
            <figure className="user__books">
                {Object.entries(books).map(([id, book]) => (
                    <img
                        onClick={() => {
                            returnBook(id);
                        }}
                        src={book.cover}
                        alt={book.title}
                        key={book.cover}
                    />
                ))}
            </figure>
        </div>
    );
};

export default User;
