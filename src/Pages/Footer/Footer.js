import React from 'react';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-emerald-600 text-white rounded mt-8">
            <div className="grid grid-flow-col gap-4">
                <a className="link link-hover">About Us</a>
                <a className="link link-hover">Contact Us</a>
            </div>
            <div>
                <p>Copyright © 2023 - All rights reserved by Thought Hive</p>
            </div>
        </footer>
    );
};

export default Footer;