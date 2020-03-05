import React from 'react';
import OptionElement from './OptionElement';

const Options = ({ options, path, onClick }) => (
    <ul className="options-list">
        {Object.keys(options).map((key) => (
            <OptionElement
                id={key}
                key={options[key].tooltip}
                onClick={onClick}
                preview={`${path}${options[key].options[0]}`}
                tooltip={options[key].tooltip}
            ></OptionElement>
        ))}
    </ul>
);

export default Options;
