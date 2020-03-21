import React from 'react';

const User = ({ name, books, dateCreated }) => (
    <div className="user">
        <h3>{name}</h3>
        <figure className="user__books">
            <img
                src="http://debakatas.com/cover/manuscrito-voynich.jpg"
                alt=""
            />
            <img
                src="http://debakatas.com/cover/manuscrito-voynich.jpg"
                alt=""
            />
            <img
                src="http://debakatas.com/cover/manuscrito-voynich.jpg"
                alt=""
            />
        </figure>
    </div>
);

export default User;
