import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
const Navbar = () => {

  const nav=<>
  <ul className='flex gap-2'>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
  </ul>
  </>
      return (
            <div className="navbar bg-base-100 h-36">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                 {
                  nav
                 }
                </ul>
              </div>
              <Link to='/'> <img src={logo}></img></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
             {nav}
            </div>
            <div className="navbar-end">
            <button className="btn btn-outline btn-warning">Appointment</button>
            </div>
          </div>
      );
};

export default Navbar;