import React, { useState } from 'react';
import SocialMedia from './SocialMedia';
import Options from './Options';
import Camera from './Camera';
import ActiveImg from './ActiveImg';

const App = () => {
    const [position, setPosition] = useState(null);

    return (
        <>
            <SocialMedia />

            <main className="layout">
                <div className="layout__video">
                    <ActiveImg
                        position={position}
                    ></ActiveImg>
                    <Camera
                        setPosition={setPosition}
                    ></Camera>
                </div>
                <Options />
            </main>
        </>
    );
};

export default App;
