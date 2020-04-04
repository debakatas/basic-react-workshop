import React from 'react';

const CreateUser = () => (
    <div className="create-user__wrapper">
        <form className="create-user">
            <input
                type="text"
                placeholder="Nickname"
                name="nickname"
            />
            <button type="submit">+</button>
        </form>

        <small className="error">Algo salio masl!</small>
    </div>
);

export default CreateUser;
