import React from 'react';

const navlink = () => {
    const links = [
        { name: 'Product' }
    ];
    return (
        <>
        {links.map((link) => (
                <div>
                    <div className='px-3 text-left md:cursor-pointer'>
                        <h1>{link.name}</h1>
                    </div>
                </div>
            ))}
        </>
    );
}

export default navlink;
