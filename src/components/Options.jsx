import React from 'react';
import data from '../data';
import OptionElement from './OptionElement';

console.log(data);

const Options = () => (
    <div>
        {data.map(({ preview, tooltip }) => (
            <OptionElement
                key={tooltip}
                preview={preview}
                tooltip={tooltip}
            ></OptionElement>
        ))}
    </div>
);

export default Options;
