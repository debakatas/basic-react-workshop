import React from 'react';

const User = ({
    name,
    books,
    dateCreated,
    activeUser,
    setActiveUser,
}) => {
    const arrayBooks = Object.entries(books);

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
                        src={book.cover}
                        alt={book.title}
                    />
                ))}
            </figure>
        </div>
    );
};

export default User;
