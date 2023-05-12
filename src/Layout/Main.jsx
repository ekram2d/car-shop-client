import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
      return (
            <div className='w-[80%] mx-auto mt-3 '>
                  <Navbar></Navbar>
                  <Outlet></Outlet>
                  <Footer></Footer>
                  
            </div>
      );
};

export default Main;