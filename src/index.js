import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import App from './components/App';
import './style/index.styl';

const HotApp = hot(() => <App></App>);

ReactDOM.render(
    <HotApp />,
    document.getElementById('debakatas')
);
