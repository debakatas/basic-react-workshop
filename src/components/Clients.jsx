import React from 'react';
import User from './User';

const Clients = () => (
    <div>
        <h1>
            <span>Biblioteca Paranormal</span>
            <small>0.00</small>
        </h1>

        {'.'
            .repeat(10)
            .split('')
            .map(() => (
                <User></User>
            ))}
    </div>
);

export default Clients;
