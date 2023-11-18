import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Navlinks from './NavLink';
import Logo from '../../assets/logo.png'
import SearchButton from './SearchButton'

const Navbar = () => {
  const [open, setopen] = useState(false)
  return (
    <>
      <nav className='bg-white '>
        <div className='flex item-center font-medium justify-around'>
          <div className='z-50 p-5 md:w-auto w-full flex justify-between' >
            <Link to='/Home'><img className='md:cursor-pointer p-1 ' src={Logo} alt='logo' /></Link>
            <div className='text-3xl md:hidden' onClick={() => setopen(!open)}>
              <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
            </div>
          </div>

          <ul className='md:flex hidden uppercase item-center gap-8 ' >
            <li>
              <Link className='py-7 px-3 inline-block hover:text-blue-400' to="Home">
                Home
              </Link>
            </li>
            <li className='py-7 px-3 inline-block hover:text-blue-400 '>
              <Navlinks />
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
          </ul>
          <div className='pt-4 md:block hidden'>
            <SearchButton />
          </div>

          {/* mobile view navbar */}

          <ul
            className={`md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
            <li>
              <Link className='py-7 px-3 inline-block hover:text-blue-400' to="/">
                Home
              </Link>
            </li>
            <li>
            <li className='py-7 px-3 inline-block hover:text-blue-400 '>
              <Navlinks />
            </li>
              <Link className='py-7 px-3 inline-block hover:text-blue-400' to="/AboutUs">
                AboutUs
              </Link>
            </li>
            <li>
              <Link className='py-7 px-3 inline-block hover:text-blue-400' to="/ContactUs">
                ContactUs
              </Link>
            </li>
            <div className='py-5'>
              <SearchButton />
            </div>

          </ul>
        </div >
      </nav >
    </>
  );
};

export default Navbar;
