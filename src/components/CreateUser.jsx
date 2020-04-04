import React, { useState } from 'react';

const CreateUser = ({ clients, setClients }) => {
    const [input, setInput] = useState('');
    const [error, setError] = useState('');

    return (
        <div className="create-user__wrapper">
            <form
                className="create-user"
                onSubmit={(e) => {
                    e.preventDefault();

                    const parsedNickname = input
                        .toLowerCase()
                        .trim();

                    if (
                        clients[parsedNickname] ||
                        !parsedNickname
                    ) {
                        setError(
                            parsedNickname
                                ? 'Usuario ya existe'
                                : 'Escribe algo por favor!'
                        );
                        return;
                    }

                    setClients((prevClients) => ({
                        ...prevClients,
                        [parsedNickname]: {
                            books: {},
                        },
                    }));

                    setError('');
                }}
            >
                <input
                    type="text"
                    placeholder="Nickname"
                    name="nickname"
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                />
                <button type="submit">+</button>
            </form>

            {error && (
                <small className="error">{error}</small>
            )}
        </div>
    );
};

export default CreateUser;
