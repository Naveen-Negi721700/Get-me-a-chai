"use client"
import React from 'react'
import Script from 'next/script'
import { useParams } from "next/navigation"
import { useState } from 'react'
import { initiate } from '@/app/actions/useraction'
import { useSession } from 'next-auth/react'
import { fetchuser, fetchpayments } from '@/app/actions/useraction'
import { useEffect } from 'react'

const Paymentpage = ({ username }) => {
  const [paymentform, setpaymentform] = useState({
    name: "",
    message: "",
    amount: ""
  })
  const [currentUser, setcurrentUser] = useState({})
  const [payments, setpayments] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const handleChange = (e) => {
    setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
  }

  const getData = async () => {
    let u = await fetchuser(username)
    setcurrentUser(u)
    let dbpayments = await fetchpayments(username)
    setpayments(dbpayments)

  }

  const pay = async (amount) => {
    let a = await initiate(amount, username, paymentform)
    let orderid = a.id
    var options = {
      "key": process.env.NEXT_PUBLIC_KEY_ID, // Enter the Key ID generated from the Dashboard
      "amount": amount, // Amount is in currency subunits.
      "currency": "INR",
      "name": "Get Me A Chai", //your business name
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": orderid, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      // "handler": function (response){
      //     alert(response.razorpay_payment_id);
      //     alert(response.razorpay_order_id);
      //     alert(response.razorpay_signature)
      // },

      "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "+919876543210"  //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      }

    }

    const rzp1 = new window.Razorpay(options);

    rzp1.open();
  }



  return (
    <>


      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>



      <div className="cover w-full bg-red-50 relative">
        <img className=" object-cover w-full h-[350] " src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/20.gif?token-hash=f_0zmyi9EgukDY-tDcfYi7hD-zWZaXdxGqbqAxYUAxw%3D&token-time=1780531200" alt="" elementtiming="Creator Public Page : Base Page" data-is-key-element="true"></img>
        <div className=" absolute -bottom-14 right-[45%] border-2 border-white rounded-full ">
          <img className="rounded-full " width={150} src="https://tse1.mm.bing.net/th/id/OIP.hPWPFZbhxQbDKzFS4qTbMQHaE5?rs=1&amp;pid=ImgDetMain&amp;o=7&amp;rm=3" alt="Profile Image" ></img>
        </div>
      </div>
      <div className="info flex justify-center items-center my-16 flex-col gap-2 ">
        <div className=" font-bold text-lg ">@{username}</div>
        <div className="text-slate-400">Lorem ipsum dolor sit amet consectetur,</div>
        <div className="text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>


        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 bg-slate-900 text-white rounded-lg p-4">
            {/* show list of supporters as a leaderboard */}
            <h2 className="text-2xl font-bold my-5 ">Supporters</h2>
            <ul className="mx-5 text-lg ">
              {payments.map((p, i) => {
                return (<li key={i} className="my-2 flex gap-2 items-center ">
                  <img className="w-7 " src="./avatar.gif" alt="" />
                  <span>
                    {p.name} donated <span className="font-bold ">₹{p.amount}</span>. With a message "{p.message}"
                  </span>
                </li>)
              })}



            </ul>


          </div>
          <div className="makePayment w-1/2 bg-slate-900 text-white rounded-lg p-4">
            <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
            <div className="flex flex-col gap-2">
              {/* input for name and message */}
              <div>

                <input onChange={handleChange} value={paymentform.name} name='name' type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Name" />
              </div>
              <input onChange={handleChange} value={paymentform.message} name='message' type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Message" />


              <input onChange={handleChange} value={paymentform.amount} name='amount' type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Amount" />
              <button
                onClick={() => {
                  if (!paymentform.name || !paymentform.message || !paymentform.amount) {
                    alert("Please fill all fields")
                    return
                  }

                  pay(Number(paymentform.amount) * 100)
                }}
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
              >
                Pay
              </button>
            </div>
            {/* or chose from this amount */}
            <div className="flex gap-2 mt-5">
              <button className="bg-slate-800 p-3 rounded-lg" onClick={() => pay(500)}> ₹5 </button>
              <button className="bg-slate-800 p-3 rounded-lg" onClick={() => pay(1000)}> ₹10 </button>
              <button className="bg-slate-800 p-3 rounded-lg" onClick={() => pay(2000)}> ₹20 </button>
              <button className="bg-slate-800 p-3 rounded-lg" onClick={() => pay(5000)}> ₹50 </button>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Paymentpage
