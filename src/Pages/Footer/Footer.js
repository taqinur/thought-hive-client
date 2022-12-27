import React from 'react';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-blue-200 text-base-content rounded mt-8">
            <div className="grid grid-flow-col gap-4">
                <a className="link link-hover">About Me</a>
                <a className="link link-hover">Contact Me</a>
            </div>
            <div>
                <p>Copyright © 2023 - All right reserved by Taqinur</p>
            </div>
        </footer>
    );
};

export default Footer;