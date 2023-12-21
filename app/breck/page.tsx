import toe from  "../../public/mistletoe.png"
import breck from  "../../public/breck.png"

import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen text-black flex-col">
      <div className="flex flex-col p-4">
        <div className="w-20 absolute">
        <Image src={toe} alt="Mistletoe" />
        </div>
      <div className="w-20 right-10 absolute">
        <Image src={toe} alt="Mistletoe" />
        </div> 
        <div className="pricetag text-2xl p-8 text-center">To: Breck <br/> From: Spaggy</div>
        <p className="pricetag text-xl p-8 text-center">I know you are a busy 🐝. So I kept it short this year. 3 XL Beats. One might even call them dangerous</p>
       <a className="m-auto w-80 h-80 border-4 border-[#128D66] rounded-md shadow-2xl" href="https://open.spotify.com/playlist/5ixlD00AqFPVSgQ9vNiaOw?si=a511a2eecd6649ed" ><Image src={breck} alt="Spotify Playlist" /></a>
      </div>
      <br/>
    </main>
  )
}
