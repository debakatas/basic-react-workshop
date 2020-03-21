import React from 'react';

const CreateUser = () => (
    <div className="create-user__wrapper">
        <form className="create-user">
            <input type="text" placeholder="Nickname" />
            <button type="submit">+</button>
        </form>
    </div>
);

export default CreateUser;
