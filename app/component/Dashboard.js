"use client"
import React from 'react'

const Dashboard = () => {
  return (
     <>
    <div className='flex flex-col justify-center items-center my-6'>
      <div className='text-5xl mb-4'>
        <h2>Welcome to dashboard</h2>
      </div>
      <div className='flex flex-col gap-1  w-1/2 '>
        <span className='text-lg'>Name</span>
        <input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Name" />
        <span className='text-lg'>Email</span>
        <input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Email" />
        <span className='text-lg'>Username</span>
        <input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Username" />
        <span className='text-lg'>Profile Picture </span>
        <input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Profile Picture" />
        <span className='text-lg'>Cover Picture</span>
        <input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Cover Picture" />
        <span className='text-lg'>Razorpay Credentials</span>
        <input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Razorpay Credentials" />
        <button type="button" className="text-white bg-gradient-to-br mt-4 from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 border rounded-lg">Save</button>
      </div>
      </div>
    </>
  )
}

export default Dashboard
