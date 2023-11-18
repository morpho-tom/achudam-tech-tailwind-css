import React from 'react';
import { Link } from 'react-router-dom';
import { links } from './productlinks';

const navlink = () => {

    return (
        <>
            {links.map((link) => (
                <div>
                    <div className='px-3 text-left md:cursor-pointer group'>
                        <h1>{link.name}</h1>
                        {link.submenu &&
                            <div>
                                <div className='absolute top-10 hidden group-hover:md:block hover:md:block'>
                                    <div className='py-3'>
                                        <div className='w-4 h-4 left-3 absolute mt-1 bg-white rotate-45'>
                                            {/* indicate down from product  */}
                                        </div>
                                    </div>
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
                    {/* <div>
                        {
                            links.sublinks.map((slinks) => (
                                <div>
                                    <div>
                                        <h1>{slinks.Head}</h1>
                                    </div>
                                </div>
                            ))
                        }
                    </div> */}
                </div>
            ))}
        </>
    );
}

export default navlink;
