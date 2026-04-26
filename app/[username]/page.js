"use client"
import { useParams } from "next/navigation"

const Username = () => {
  const params = useParams()

  return (
    <>
      {params.username}
    <div className="cover w-full bg-red-50 relative">
      <img className=" object-cover w-full h-[350] " src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/20.gif?token-hash=ecJ1O7qOxfeB7Q1S_v78RcHwfIgH5TgvEtcwHrvwS0Y%3D&amp;token-time=1777852800" alt="" elementtiming="Creator Public Page : Base Page" data-is-key-element="true"></img>
      <div className=" absolute -bottom-14 right-[48%] border-2 border-white rounded-full ">
        <img className="rounded-full" width={150} height={150} src="https://tse1.mm.bing.net/th/id/OIP.hPWPFZbhxQbDKzFS4qTbMQHaE5?rs=1&amp;pid=ImgDetMain&amp;o=7&amp;rm=3" alt="" ></img>
      </div>
    </div>
    </>
  )
}

export default Username