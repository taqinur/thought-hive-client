import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="sticky top-0 z-10 navbar bg-blue-200 mx-auto">
            <div className="flex-1 ml-24">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link>About Me</Link></li>
                        <li><Link> Projects</Link></li>
                        <li><Link>Blog</Link></li>
                        <li><Link>Contact Me</Link></li>
                    </ul>
                </div>
                <Link to={'/'} className="normal-case"><h4 className='text-emerald-600 text-lg text-bold'>Thought Hive</h4></Link>
            </div>
            <div className="flex-none mr-24">
                <ul className="menu menu-horizontal text-lg px-1 hidden lg:flex">
                    <li><Link>About Me</Link></li>
                    <li><Link > Projects</Link></li>
                    <li><Link>Blog</Link></li>
                    <li><Link>Contact Me</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;