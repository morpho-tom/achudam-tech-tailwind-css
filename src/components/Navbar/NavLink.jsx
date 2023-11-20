import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { links } from './productlinks';

const Navlink = () => {
    const [heading, setHeading] = useState("")
    const [subHeading, setSubHeading] = useState("")
    return (
        <>
            {links.map((link) => (
                <div>
                    <div className='px-3 text-left md:cursor-pointer group'>
                        <h1 className='py-7 flex justify-between items-center md:pr-0 pr-5 ' onClick={() => {
                            // navbar onclick show and hide code 
                            heading !== link.name ? setHeading(link.name) : setHeading(""); setSubHeading("");
                        }}>
                            {link.name}
                            <span className='text-xl md:hidden inline'>
                                {/* chevron up and down code  */}
                                <ion-icon 
                                name={`${heading === link.name ? "chevron-up" : "chevron-down"}`}></ion-icon>
                            </span>
                            <span className='text-xl md:mt-1 md:ml-2 md:block hidden'>
                                {/* chevron down code */}
                                <ion-icon name="chevron-down"></ion-icon>
                            </span>
                        </h1>
                        {/* sub heading starts from this  */}
                        {link.submenu &&
                            <div>
                                <div className='absolute top-20 hidden group-hover:md:block hover:md:block'>
                                    <div className='py-3'>
                                        <div className='w-4 h-4 left-3 absolute mt-1 bg-white rotate-45'>
                                            {/* indicate down from product  */}
                                        </div>
                                    </div>
                                    {/* sublinks starts from here */}
                                    <div className='bg-white p-5 grid grid-cols-3 gap-10' >
                                        {link.sublinks.map((mysublinks) => (
                                            <div>
                                                <h1 className='text-lg font-semibold'>{mysublinks.Head}</h1>
                                                {mysublinks.sublink.map(slink => (
                                                    <li className='text-sm text-gray-600 my-2.5'>
                                                        <Link to={slink.link}
                                                            className='hover:text-blue-400'
                                                        >{slink.name}</Link>
                                                    </li>
                                                ))}
                                            </div>
                                        ))
                                        }
                                    </div>
                                </div>
                            </div>}
                    </div>

                    {/* mobile product view navbar */}

                    <div className={`${heading === link.name ? 'md:hidden' : 'hidden'}`}>
                        {/* sublinks */}
                        {link.sublinks.map((slinks) => (
                            <div>
                                <div>
                                    <h1
                                        // onclick subheading show and hidden code
                                        onClick={() => subHeading !== slinks.Head ? setSubHeading(slinks.Head) : setSubHeading("")}
                                        className='py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between item-center'>
                                        {slinks.Head}
                                        <span className='text-xl md:mt-1 md:ml-2 inline'>
                                            {/* chevron up and down code  */}
                                            <ion-icon name={`${subHeading === slinks.Head ? "chevron-up" : "chevron-down"
                                                }`}></ion-icon>
                                        </span>
                                    </h1>
                                    {/* onclick heading hide and show  */}
                                    <div className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"}`}>
                                        {slinks.sublink.map(slink => (
                                            <li className='py-3 pl-14'>
                                                <Link className='' to={slink.link}>{slink.name}</Link>
                                                </li>
                                        ))}</div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            ))}
        </>
    );
}

export default Navlink;
