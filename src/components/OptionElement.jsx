import React, { useState } from 'react';

const OptionElement = ({ preview, tooltip }) => {
    const [visible, setVisible] = useState(false);

    return (
        <figure
            className="square square--small"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            <img
                className="square__img"
                src={preview}
                alt=""
            />
            <figcaption
                className={`tooltip ${
                    visible ? 'tooltip--visible' : ''
                }`}
            >
                {tooltip}
            </figcaption>
        </figure>
    );
};

export default OptionElement;
