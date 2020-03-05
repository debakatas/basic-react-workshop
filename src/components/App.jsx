import React, { useState, useEffect } from 'react';

import SocialMedia from './SocialMedia';
import Options from './Options';
import Camera from './Camera';
import ActiveImg from './ActiveImg';

const API_URL =
    'https://gist.githubusercontent.com/Nikodermus/8e12541f8cf2ad17155169e638cd193f/raw/8bbbacc31f4b9c1a10f37725f30a57b208e28307/face-filters.json';

const App = () => {
    const [position, setPosition] = useState(null);
    const [data, setData] = useState(null);
    const [active, setActive] = useState(null);

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((json) => {
                setData(json);
                setActive(Object.keys(json.filters)[0]);
            });
    }, []);
    console.log(active);

    return (
        <>
            <SocialMedia />

            <main className="layout">
                <div className="layout__video">
                    {active && (
                        <ActiveImg
                            position={position}
                            src={`${data.source}${data.filters[active].options[0]}`}
                        ></ActiveImg>
                    )}
                    <Camera
                        setPosition={setPosition}
                    ></Camera>
                </div>
                {data && (
                    <Options
                        onClick={(active) =>
                            setActive(active)
                        }
                        options={data.filters}
                        path={data.source}
                    />
                )}
            </main>
        </>
    );
};

export default App;
