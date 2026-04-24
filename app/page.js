import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* it ia a box first  */}
      <div className="flex justify-center items-center flex-col gap-4 h-[44vh] text-white">
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

      {/* it is a second box */}
      <div className="text-white pb-32 pt-14">
        <h2 className="text-3xl font-bold text-center mb-14">Your Fans Can Buy You a Chai</h2>
        <div className="flex gap-5 justify-around">

          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full p-2" src="./man.gif" width={88} alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">Your fans are available for your to help</p>
          </div>



          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full p-2" src="./coin.gif" width={88} alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">Your fans are available for your to help</p>
          </div>


          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full p-2" src="./group.gif" width={88} alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">Your fans are available for your to help</p>
          </div>
        </div>
      </div>


      {/* it is a line  */}
      <div className="bg-white h-1 opacity-10"></div>


      {/* it is a third box */}
      <div className="text-white pb-32 pt-14 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-center mb-14">Learn more about us</h2>

    <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/tlkb3cLfaOQ?si=eAQFpBg3Zx4R788w"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>

      </div>
    </>
  );
}
