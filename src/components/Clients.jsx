import React from 'react';
import User from './User';
import CreateUser from './CreateUser';

const Clients = ({ clients, setClients }) => {
    const a = '';

    return (
        <div>
            <h1 className="cartel">
                <span>Biblioteca Paranormal</span>
                <small>0.00</small>
            </h1>

            <div className="clients">
                <CreateUser
                    clients={clients}
                    setClients={setClients}
                ></CreateUser>
                {Object.entries(clients).map(
                    ([id, client]) => (
                        <User name={id} {...client}></User>
                    )
                )}
            </div>
        </div>
    );
};

export default Clients;
