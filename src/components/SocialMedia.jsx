import React from 'react';
import Github from '../svg/Github';
import Instagram from '../svg/Instagram';
import Facebook from '../svg/Facebook';

const socialItems = [
    {
        link: 'https://www.instagram.com/bakatascom/',
        Img: Instagram,
    },
    {
        link:
            'https://github.com/Nikodermus/basic-react-workshop',
        Img: Github,
    },
    {
        link: 'https://www.facebook.com/debakatas',
        Img: Facebook,
    },
];

const SocialMedia = () => (
    <div className="social-media">
        {socialItems.map(({ link, Img }) => (
            <a
                key={link}
                href={link}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Img></Img>
            </a>
        ))}
    </div>
);

export default SocialMedia;
