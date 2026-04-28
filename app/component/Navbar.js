"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
    const [showdropdown, setshowdropdown] = useState(false)
    const { data: session } = useSession()
    //   if(session) {
    //     return <>
    //       Signed in as {session.user.email} <br/>
    //       <button onClick={() => signOut()}>Sign out</button>
    //     </>
    //   }
    return (
        <div className='bg-[#1b1b1b] text-white flex justify-between px-4 items-center h-16'>
            <div >
                <Link className="logo text-lg font-bold flex items-center gap-2" href={"/"}>

                    <img className='invertImg' src="./tea.gif" width={44} alt="" />
                    <span>GetMeaChai!</span>
                </Link>
            </div>
            {/* <ul className='flex justify-between gap-4'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul> */}
            <div className='flex gap-2 relative'>
                {session && <>
                    <button onClick={() => setshowdropdown(!showdropdown)} onBlur={() => {
                        setTimeout(() => {
                            setshowdropdown(false)
                        }, 300);
                    }} id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" className=" inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-4xl" type="button">
                        Welcome {session.user.email}
                        <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
                    </button>

                    {/* <!-- Dropdown menu --> */}
                    <div id="dropdownDivider" className={`z-10 ${showdropdown ? "" : "hidden"} absolute top-14  bg-[#1b1b1b] left-23 bg-neutral-primary-medium border border-default-medium rounded-base divide-y divide-default-medium shadow-lg w-44`}>
                        <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDividerButton">
                            <li>
                                <Link href="/dashboard" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</Link>
                            </li>
                            <li>
                                <Link href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Your Page</Link>
                            </li>
                            <li>
                                <Link href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Earnings</Link>
                            </li>
                        </ul>
                        <div className="p-2 text-sm text-body font-medium">
                            <Link href="#" onClick={() => { signOut() }} className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign Out</Link>
                        </div>
                    </div>
                </>
                }


                {session &&
                    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-4xl " onClick={() => { signOut() }}>Logout</button>}

                {!session && (
                    <Link href={"/login"}>
                        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-4xl ">Login</button>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Navbar
