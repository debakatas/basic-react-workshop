import React from 'react';

const ActiveImg = ({ position, src, onClick }) => {
    if (!position) return null;

    const { width, height, top, left } = position;

    return (
        <img
            alt=""
            className="active-img"
            onClick={onClick}
            src={src}
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
