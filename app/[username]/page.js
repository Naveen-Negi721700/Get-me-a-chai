"use client"
import { useParams } from "next/navigation"

const Username = () => {
  const params = useParams()

  return (
    <>

      <div className="cover w-full bg-red-50 relative">
        <img className=" object-cover w-full h-[350] " src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/20.gif?token-hash=ecJ1O7qOxfeB7Q1S_v78RcHwfIgH5TgvEtcwHrvwS0Y%3D&amp;token-time=1777852800" alt="" elementtiming="Creator Public Page : Base Page" data-is-key-element="true"></img>
        <div className=" absolute -bottom-14 right-[45%] border-2 border-white rounded-full ">
          <img className="rounded-full " width={150} src="https://tse1.mm.bing.net/th/id/OIP.hPWPFZbhxQbDKzFS4qTbMQHaE5?rs=1&amp;pid=ImgDetMain&amp;o=7&amp;rm=3" alt="" ></img>
        </div>
      </div>
      <div className="info flex justify-center items-center my-16 flex-col gap-2 ">
        <div className=" font-bold text-lg ">@{params.username}</div>
        <div className="text-slate-400">Lorem ipsum dolor sit amet consectetur,</div>
        <div className="text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>


        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 bg-slate-900 text-white rounded-lg p-4">
            {/* show list of supporters as a leaderboard */}
            <h2 className="text-2xl font-bold my-5 ">Supporters</h2>
            <ul className="mx-5 text-lg ">
              <li className="my-2 flex gap-2 items-center ">
                <img className="w-7 " src="./avatar.gif" alt="" />
                <span>
                  Shubham donated <span className="font-bold ">$40</span>. With a message "I support you bro. Lots of love from India ❤️"

                </span>
              </li>
              <li className="my-2 flex gap-2 items-center ">
                <img className="w-7 " src="./avatar.gif" alt="" />
                <span>
                  Shubham donated <span className="font-bold ">$40</span>. With a message "I support you bro. Lots of love from India ❤️"

                </span>
              </li>
              <li className="my-2 flex gap-2 items-center ">
                <img className="w-7 " src="./avatar.gif" alt="" />
                <span>
                  Shubham donated <span className="font-bold ">$40</span>. With a message "I support you bro. Lots of love from India ❤️"

                </span>
              </li>
              <li className="my-2 flex gap-2 items-center ">
                <img className="w-7 " src="./avatar.gif" alt="" />
                <span>
                  Shubham donated <span className="font-bold ">$40</span>. With a message "I support you bro. Lots of love from India ❤️"

                </span>
              </li>
              <li className="my-2 flex gap-2 items-center ">
                <img className="w-7 " src="./avatar.gif" alt="" />
                <span>
                  Shubham donated <span className="font-bold ">$40</span>. With a message "I support you bro. Lots of love from India ❤️"

                </span>
              </li>




            </ul>


          </div>
          <div className="makePayment w-1/2 bg-slate-900 text-white rounded-lg p-4">
            <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
            <div className="flex flex-col gap-2">
              {/* input for name and message */}
              <div>

                <input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Name" />
              </div>
              <input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Message" />


              <input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Amount" />
              <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Pay</button>
            </div>
            {/* or chose from this amount */}
            <div className="flex gap-2 mt-5">
              <button className="bg-slate-800 p-3 rounded-lg"> $5 </button>
              <button className="bg-slate-800 p-3 rounded-lg"> $10 </button>
              <button className="bg-slate-800 p-3 rounded-lg"> $20 </button>
              <button className="bg-slate-800 p-3 rounded-lg"> $50 </button>     
  
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Username