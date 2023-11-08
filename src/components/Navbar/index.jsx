import React from "react";
import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="bg-blue ">
            <div className="flex item-center font-medium justify-around">
                <div>
                    <img src={Logo} alt="logo" className="md:cursor-pointer "/>
                </div>
                <ul>
                    <li>
                        <Link to={'/'}  className="py-7 px-3 inline-block">
                            Home
                        </Link> 
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar;