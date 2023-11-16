import React from 'react';
import Navlinks from './NavLink';
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import SearchButton from './SearchButton'

const Navbar = () => {
  return (
    <>
      <nav className='bg-white '>
        <div className='flex item-center font-medium justify-around'>

          <logo className='z-50 p-5 md:w-auto w-full' >  
          <Link to='/'><img className='md:cursor-pointer p-1 ' src={Logo} alt='logo' /></Link>
          </logo>

          <ul className='md:flex hidden uppercase item-center gap-8 ' >
            <li>
              <Link className='py-7 px-3 inline-block hover:text-blue-400' to="Home">
                Home
              </Link>
            </li>
            <li>
              <Link className='py-7 px-3 inline-block hover:text-blue-400' to="/AboutUs">
                About Us
              </Link>
            </li>
            <li>
              <Link className='py-7 px-3 inline-block hover:text-blue-400' to="/ContactUs">
                Contact Us
              </Link>
            </li>
            <li className='py-7 px-3 inline-block hover:text-blue-400 '>
            <Navlinks/>
            </li>
          </ul>
          <div className='pt-4 md:block hidden'>
            <SearchButton/>
          </div>

          {/* mobile view navbar */}

          <ul className={'md:hidden bg-white absolute w-full h-full buttom-0 py-24 pl-4'}>
          <li>
              <Link className='py-7 px-3 inline-block hover:text-blue-400' to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className='py-7 px-3 inline-block hover:text-blue-400' to="/AboutUs">
                AboutUs
              </Link>
            </li>
            <li>
              <Link className='py-7 px-3 inline-block hover:text-blue-400' to="/ContactUs">
                ContactUs
              </Link>
            </li>
            <li className='py-7 px-3 inline-block hover:text-blue-400 '>
            <Navlinks/>
            <div className='py-5'>
              <SearchButton/>
            </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
