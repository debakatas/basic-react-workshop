import React from 'react';

import CreateUser from './CreateUser';
import User from './User';

const Clients = ({
    clients,
    setClients,
    setActiveUser,
    activeUser,
    setBooks,
    setProfit,
    pricePerMinute,
}) => (
    <div className="clients">
        <CreateUser
            clients={clients}
            setClients={setClients}
        />

        {Object.entries(clients).map(([id, client]) => (
            <User
                setClients={setClients}
                key={id}
                id={id}
                books={client.books}
                activeUser={activeUser}
                setActiveUser={setActiveUser}
                setBooks={setBooks}
                setProfit={setProfit}
                pricePerMinute={pricePerMinute}
            />
        ))}
    </div>
);

export default Clients;
