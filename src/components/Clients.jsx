import React from 'react';
import User from './User';
import CreateUser from './CreateUser';

const Clients = () => (
    <div>
        <h1 className="cartel">
            <span>Biblioteca Paranormal</span>
            <small>0.00</small>
        </h1>

        <div className="clients">
            <CreateUser></CreateUser>
            {'.'
                .repeat(10)
                .split('')
                .map(() => (
                    <User></User>
                ))}
        </div>
    </div>
);

export default Clients;
