import React from 'react';
import User from './User';
import CreateUser from './CreateUser';

const Clients = ({
    clients,
    setClients,
    setActiveUser,
    activeUser,
    profit,
    setProfit,
    setBooks,
    minutePrice,
}) => (
    <div>
        <h1 className="cartel">
            <span>Biblioteca Paranormal</span>
            <small>{profit.toFixed(2)}</small>
        </h1>

        <div className="clients">
            <CreateUser
                clients={clients}
                setClients={setClients}
            ></CreateUser>
            {Object.entries(clients).map(([id, client]) => (
                <User
                    setActiveUser={setActiveUser}
                    activeUser={activeUser}
                    name={id}
                    setProfit={setProfit}
                    setBooks={setBooks}
                    minutePrice={minutePrice}
                    setClients={setClients}
                    {...client}
                ></User>
            ))}
        </div>
    </div>
);

export default Clients;
