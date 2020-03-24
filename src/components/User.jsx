import React from 'react';

const User = ({
    name,
    books,
    activeUser,
    setActiveUser,
    setProfit,
    setBooks,
    minutePrice,
    setClients,
}) => {
    const arrayBooks = Object.entries(books);

    const returnBook = (book) => {
        const timePassed = Date.now() - book.dateRequested;
        const secondPrice = minutePrice / 60;
        const timePassedInSeconds = timePassed / 1000;
        const newProfit = timePassedInSeconds * secondPrice;

        setProfit(
            (previousProfit) => previousProfit + newProfit
        );

        setClients((prevClients) => {
            const newClients = { ...prevClients };
            const myUser = newClients[name];
            delete myUser.books[book.id];

            return {
                ...newClients,
                [name]: {
                    ...myUser,
                },
            };
        });

        setBooks((oldBooks) => {
            const books = { ...oldBooks };
            books[book.id].available += 1;

            return {
                ...books,
            };
        });
    };

    return (
        <div
            className={`user ${
                name === activeUser ? 'user__highlight' : ''
            }`}
        >
            <button
                onClick={() => {
                    setActiveUser(name);
                }}
                type="button"
            >
                {name}
            </button>
            <figure className="user__books">
                {arrayBooks.map(([id, book]) => (
                    <img
                        onClick={() => returnBook(book)}
                        src={book.cover}
                        alt={book.title}
                    />
                ))}
            </figure>
        </div>
    );
};

export default User;
