import React from 'react';

const ActiveImg = ({ position, src }) => {
    if (!position) return null;

    const { width, height, top, left } = position;

    return (
        <img
            className="active-img"
            src={src}
            alt=""
            style={{
                maxWidth: `${width}px`,
                maxHeight: `${height * 1.5}px`,
                left,
                top,
            }}
        />
    );
};

export default ActiveImg;
