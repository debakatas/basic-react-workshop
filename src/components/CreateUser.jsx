import React, { useRef, useState } from 'react';

const CreateUser = ({ clients, setClients }) => {
    const form = useRef(null);
    const [error, setError] = useState('');

    const userCreation = (e) => {
        e.preventDefault();
        setError('');

        const formData = new FormData(form.current);
        const nickname = formData
            .get('nickname')
            .toLowerCase();

        if (!clients[nickname] && nickname) {
            const newClients = {
                ...clients,
                [nickname]: {
                    books: {},
                    dateCreated: Date.now(),
                },
            };

            setClients(newClients);
        } else {
            setError(
                nickname
                    ? `Usuario ${nickname} ya existe.`
                    : 'Debes definir un suario'
            );
        }
    };

    return (
        <div className="create-user__wrapper">
            <form
                ref={form}
                className="create-user"
                onSubmit={userCreation}
            >
                <input
                    type="text"
                    placeholder="Nickname"
                    name="nickname"
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
