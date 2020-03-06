import React, { useState } from 'react';

const OptionElement = ({
    id,
    isActive,
    onClick,
    preview,
    tooltip,
}) => {
    const [visible, setVisible] = useState(false);

    return (
        <li
            onClick={() => onClick(id)}
            role="menuitem"
            onKeyPress={({ which }) => {
                if (which === 13) onClick(id);
            }}
            tabIndex="0"
        >
            <figure
                className={`square square--${
                    isActive ? 'large' : 'small'
                }`}
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
        </li>
    );
};

export default OptionElement;
