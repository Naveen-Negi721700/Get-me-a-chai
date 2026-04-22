import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-[#1b1b1b] text-white flex justify-between px-4 items-center h-16'>
            <div className="logo text-lg font-bold">GetMeaChai!</div>
            <ul className='flex justify-between gap-4'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar
