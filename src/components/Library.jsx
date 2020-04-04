import React from 'react';

import Book from './Book';
import NoBook from './NoBook';
import Filter from './Filter';

const Library = () => (
    <div className="library-wrapper">
        <Filter />
        <div className="shelter">
            <Book />
            <NoBook />
        </div>
    </div>
);

export default Library;
