/*
    This is where our React App will live,
    and where we will be working
*/
import React, { useState, useEffect } from 'react';

import SocialMedia from './SocialMedia';
import Options from './Options';
import Camera from './Camera';
import ActiveImg from './ActiveImg';
import randomInRange from '../random';

const API_URL =
    'https://gist.githubusercontent.com/Nikodermus/8e12541f8cf2ad17155169e638cd193f/raw/8bbbacc31f4b9c1a10f37725f30a57b208e28307/face-filters.json';

const App = () => {
    const [position, setPosition] = useState(null);
    const [data, setData] = useState(null);
    const [active, setActive] = useState(null);
    const [image, setImage] = useState(0);

    const rollImages = (
        maxQuantity,
        currentQuantity = 0,
        timesCalled = 0
    ) => {
        const newQuantity =
            currentQuantity === maxQuantity
                ? 0
                : currentQuantity + 1;
        setImage(newQuantity);

        if (timesCalled > maxQuantity * 2) {
            setImage(randomInRange(0, maxQuantity));
            return;
        }

        setTimeout(() => {
            rollImages(
                maxQuantity,
                newQuantity,
                timesCalled + 1
            );
        }, 20);
    };

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((json) => {
                setData(json);
            });
    }, []);

    useEffect(() => {
        if (!data || !active) return;

        const imgs = data.filters[active].options;

        rollImages(imgs.length - 1);
    }, [data, active]);

    return (
        <>
            <SocialMedia />

            <main className="layout">
                <div className="layout__video">
                    {active && (
                        <ActiveImg
                            onClick={() =>
                                rollImages(
                                    data.filters[active]
                                        .options.length - 1
                                )
                            }
                            position={position}
                            src={`${data.source}${data.filters[active].options[image]}`}
                        ></ActiveImg>
                    )}
                    <Camera
                        setPosition={setPosition}
                        speed={500}
                    ></Camera>
                </div>
                {data && (
                    <Options
                        onClick={(newActive) =>
                            setActive(newActive)
                        }
                        options={data.filters}
                        path={data.source}
                        active={active}
                    />
                )}
            </main>
        </>
    );
};

export default App;
