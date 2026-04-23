import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='bg-[#1b1b1b] text-white flex justify-between px-4 items-center h-16'>
            <div className="logo text-lg font-bold flex items-center gap-2">
                <img src="./tea.gif" width={44} alt="" />
                <span>GetMeaChai!</span>
            </div>
            {/* <ul className='flex justify-between gap-4'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul> */}
            <div>
                <Link href={"/login"}>
                <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-4xl">Login</button></Link>
            </div>
        </div>
    )
}

export default Navbar
