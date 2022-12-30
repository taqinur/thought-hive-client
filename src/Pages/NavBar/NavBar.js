import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="sticky top-0 z-10 navbar bg-emerald-600 mx-auto">
            <div className="flex-1 lg:ml-24 lg:w-10/12">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
                        <li><Link>Media</Link></li>
                        <li><Link>Message</Link></li>
                        <li><Link>About</Link></li>
                    </ul>
                </div>
                <Link to={'/'} className="normal-case"><h4 className='text-white text-2xl'>Thought Hive</h4></Link>
            </div>
            <div className="flex-none mr-24">
                <ul className="menu menu-horizontal text-lg px-1 mx-2 text-white hidden lg:flex">
                    <li><Link>Media</Link></li>
                    <li><Link>Message</Link></li>
                    <li><Link>About</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;