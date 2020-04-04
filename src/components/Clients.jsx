import React from 'react';

import CreateUser from './CreateUser';
import User from './User';

const Clients = ({
    clients,
    setClients,
    setActiveUser,
    activeUser,
}) => (
    <div className="clients">
        <CreateUser
            clients={clients}
            setClients={setClients}
        />

        {Object.entries(clients).map(([id, client]) => (
            <User
                key={id}
                id={id}
                books={client.books}
                activeUser={activeUser}
                setActiveUser={setActiveUser}
            />
        ))}
    </div>
);

export default Clients;
