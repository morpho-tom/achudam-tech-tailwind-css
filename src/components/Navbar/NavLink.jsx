import React from 'react';
import { Link } from 'react-router-dom';

const navlink = () => {
    const links = [
        {
            name: "Product", submenu: "true", sublinks: [
                {
                    Head: "Proton Exchange Membrane ( PEM ) Fuel Cell",
                    sublink: [
                        { name: 'Fuel cell Stacks ( Open Cathode, Humidified)', link: "/" },
                        { name: 'Fuel Cell Test Station ( Open cathode stack, Humidified Stack)', link: "/" },
                        { name: 'Open Cathode PEM Fuel cell based Hydrogen Management System', link: "/" },
                        { name: 'Fuel Cell components', link: "/" },
                    ]
                },
                {
                    Head: "Sensors",
                    sublink: [
                        { name: 'Hydrogen (%,ppm)', link: "/" },
                        { name: 'Oxygen (%,ppm)', link: "/" },
                        { name: 'Carbon dioxide (%,ppm)', link: "/" },
                        { name: 'pH ( Industrial Grade 0-14 )', link: "/" },
                        { name: 'Temperature ( Thermocouple, Pt-100, Pt-1000)', link: "/" },
                        { name: 'Pressure', link: "/" },
                        { name: 'Flow rate (gases)', link: "/" },
                        { name: 'Level Sensors ', link: "/" },
                    ]
                }, {
                    Head: "Bioreactors",
                    sublink: [
                        { name: 'Fully Automated Bioreactors for Research application', link: "/" },
                        { name: 'Components for Bioreactors', link: "/" },
                    ]
                },{
                    Head: "Supercritical extraction system for Research Application",
                    sublink: [
                        { name: 'Compact Supercritical extraction system for research application', link: "/" },
                    ]
                },{
                    Head: "Research Equipments (Customised)",
                    sublink: [
                        { name: 'Automated Aerosol Sampler', link: "/" },
                        { name: 'Sedimentation rate measurement system for gases', link: "/" },
                    ]
                },

            ]
        }
    ];
    return (
        <>
            {links.map((link) => (
                <div>
                    <div className='px-3 text-left md:cursor-pointer group'>
                        <h1>{link.name}</h1>
                        {link.submenu &&
                            <div>
                                <div className='absolute top-20 hidden group-hover:block hover:block'>
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
                </div>
            ))}
        </>
    );
}

export default navlink;
