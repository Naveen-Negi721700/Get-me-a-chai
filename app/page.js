import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* it ia a box first  */}
      <div className="flex justify-center items-center flex-col gap-4 h-[44vh]">
        <div className="font-bold text-5xl flex gap-2 justify-center items-center ">Buy Me a Chai <span><img src="./tea.gif" width={88} alt="" /></span></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam temporibus
        </p>
        <div className="flex  gap-2">
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-4xl">Start Here</button>

          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-4xl">Read More</button>
        </div>
      </div>



      {/* it is a line  */}
      <div className="bg-white h-1 opacity-10"></div>


      <div className="text-white">
        <div className="text-2xl font-bold text-center my-5">Your Fans Can Buy You a Chai</div>
        <div className="flex gap-5 justify-around"> 
          
          <div className="item space-y-3 ">
            <img className="bg-slate-400 rounded-full p-2" src="./man.gif" width={88} alt="" />
            <p className="font-bold">Fund Your Self</p>
          </div>


          <div className="item space-y-3 ">
            <img className="bg-slate-400 rounded-full p-2" src="./coin.gif" width={88} alt="" />
            <p className="font-bold">Fund Your Self</p>
          </div>


          <div className="item space-y-3 ">
            <img className="bg-slate-400 rounded-full p-2" src="./group.gif" width={88} alt="" />
            <p className="font-bold">Fund Your Self</p>
          </div>
        </div>
      </div>
    </>
  );
}
