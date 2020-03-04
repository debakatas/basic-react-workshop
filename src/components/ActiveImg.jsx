import React from 'react';

const ActiveImg = ({ position }) => {
    if (!position) return null;

    const { width, height, top, left } = position;

    return (
        <img
            className="active-img"
            src="https://source.unsplash.com/random/400x700"
            alt=""
            style={{
                maxWidth: `${width}px`,
                maxHeight: `${height}px`,
                transform: `translate(${left}px , ${top -
                    (height * 90) / 100}px)`,
            }}
        />
    );
};

export default ActiveImg;
