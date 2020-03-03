import React from 'react';
import Github from '../svg/Github';

const App = () => (
    <>
        <a href="" className="social-link">
            <Github />
        </a>
        <figure className="round">
            <video className="round__inner" autoPlay muted>
                <source
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    type="video/mp4"
                />
                <source
                    src="https://www.w3schools.com/html/mov_bbb.ogg"
                    type="video/ogg"
                />
                Your browser does not support HTML5 video.
            </video>
        </figure>
        <figure className="square square--small">
            <img
                className="square__img"
                src="https://source.unsplash.com/random/800x700"
                alt=""
            />
        </figure>
        <figure className="square square--large">
            <img
                className="square__img"
                src="https://source.unsplash.com/random/800x700?a=1"
                alt=""
            />
        </figure>
        <span className="tooltip">¿Qué personaje historico eres?</span>
        <h1>React for everyone isasdas it?</h1>
    </>
);

export default App;
