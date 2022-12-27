import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import NavBar from '../Pages/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='lg:w-10/12 mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;