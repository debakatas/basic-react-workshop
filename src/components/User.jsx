import React from 'react';

const User = ({ id, books, setActiveUser, activeUser }) => (
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
            {Object.entries(books).map((book) => (
                <img src={book.cover} alt={book.title} />
            ))}
        </figure>
    </div>
);

export default User;
