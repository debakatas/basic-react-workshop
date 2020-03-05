import React, { useEffect, useRef, useState } from 'react';

const faceDetector = new window.FaceDetector();

const Camera = ({ setPosition }) => {
    const [hasFailed, setFailure] = useState(false);
    const videoRef = useRef(null);

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
        }, 1000);
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

export default Camera;
