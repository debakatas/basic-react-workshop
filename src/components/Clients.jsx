import React from 'react';
import User from './User';
import CreateUser from './CreateUser';

const Clients = ({
    clients,
    setClients,
    setActiveUser,
    activeUser,
}) => {
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
                        <User
                            setActiveUser={setActiveUser}
                            activeUser={activeUser}
                            name={id}
                            {...client}
                        ></User>
                    )
                )}
            </div>
        </div>
    );
};

export default Clients;
