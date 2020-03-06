/*
    This file will load the camera and set
    the face detection, its complexity
    is a bit beyond the scope of the workshop
    so we are having it before we start.

    In case you don't have camera, Google Chrome or
    the face detection capabilities, you'll get a nice
    mock so you can still work the workshop.

*/

import React, { useEffect, useRef, useState } from 'react';
import randomInRange from '../random';

const FakeCamera = ({ setPosition, speed = 1000 }) => {
    const imgRef = useRef(null);

    useEffect(() => {
        setInterval(() => {
            const {
                height,
            } = imgRef.current.getBoundingClientRect();

            const getPercent = (n) => (height * n) / 100;

            setPosition({
                top: getPercent(randomInRange(25, 30)),
                left: getPercent(randomInRange(25, 30)),
                width: getPercent(20),
                height: getPercent(20),
            });
        }, speed);
    }, [imgRef]);

    return (
        <img
            ref={imgRef}
            src="https://static.tvtropes.org/pmwiki/pub/images/Aleister_Crowley_1310.jpg"
            className="round__inner"
            alt=""
        />
    );
};

const Camera = ({ setPosition, speed = 1000 }) => {
    const [hasFailed, setFailure] = useState(false);
    const videoRef = useRef(null);
    const faceDetector = new window.FaceDetector();

    const kickFaceDetection = async () => {
        const [face] = await faceDetector.detect(
            videoRef.current
        );

        if (face) {
            const {
                top,
                left,
                width,
                height,
            } = face.boundingBox;
            setPosition((prev) => {
                if (!prev) {
                    return { top, left, width, height };
                }

                return {
                    top,
                    left,
                    width:
                        Math.abs(prev.width - width) > 20
                            ? width
                            : prev.width,
                    height:
                        Math.abs(prev.height - height) > 20
                            ? height
                            : prev.height,
                };
            });
        }

        setTimeout(() => {
            kickFaceDetection();
        }, speed);
    };

    useEffect(() => {
        const {
            width,
            height,
        } = videoRef.current.getBoundingClientRect();

        navigator.mediaDevices
            .getUserMedia({
                video: { width, height },
            })
            .then((streamMedia) => {
                videoRef.current.srcObject = streamMedia;
                return videoRef.current.play();
            })
            .then(() => kickFaceDetection())
            .catch(() => setFailure(true));
    }, []);

    return (
        <figure className="round">
            <video
                ref={videoRef}
                className="round__inner"
                autoPlay
                muted
                playsInline
            ></video>
            {hasFailed && (
                <div className="round__inner round__inner--fail">
                    Please accept the use of the camera to
                    continue
                    <button
                        className="button"
                        type="button"
                        onClick={() =>
                            window.location.reload()
                        }
                    >
                        Try again
                    </button>
                </div>
            )}
        </figure>
    );
};

const CameraWrapper = (props) => (
    <figure className="round">
        {!window.FaceDetector ||
        !navigator.mediaDevices ||
        !navigator.mediaDevices.enumerateDevices ? (
            <FakeCamera {...props} />
        ) : (
            <Camera {...props} />
        )}
    </figure>
);

export default CameraWrapper;
