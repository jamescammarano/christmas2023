import turntable from "../../public/turntable.jpg";
import gorilla from "../../public/gorilla.png";
import spaggy from "../../public/spaggy.png";
import years from "../../public/7years.png";
import boyznoize from "../../public/boyznoize.gif";
import sega from "../../public/sega.gif";
import waxon from "../../public/waxon.png";
import justice from "../../public/justice.png";
import zorro from "../../public/zorro.png";
import stepup from "../../public/stepup.png";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen text-white flex-col">
      <div className="flex flex-col p-4">
        <div className="w-20 absolute">
          <Image src={turntable} alt="Turntable.fm Logo" />
        </div>
        <div className="w-20 right-10 absolute">
          <Image src={turntable} alt="Turntable.fm Logo" />
        </div>

        <h1 className="text-3xl self-center md:w-80 p-8 text-center">
          boom_boom
        </h1>
        <div className="flex gap-8 text-2xl py-8 text-center justify-center">
          <div>
            To: <Image className="w-32" src={gorilla} alt="Breck" /> <br />
          </div>
          <div>
            From: <Image className="w-20 h-20" src={spaggy} alt="spaggy" />{" "}
          </div>
        </div>
        <div className="flex items-center flex-col gap-8 text-2xl py-8 text-center justify-center">
          <h2 className="text-4xl text-center">🥰 12 years bb 🥰</h2>
          <Image src={years} alt="Breck" /> <br />
          <iframe
            title="7 Years - Charli XCX"
            src="https://open.spotify.com/embed/track/4jQDJPgw3qkc1T2f1safdy?utm_source=generator"
            width={"500rem"}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div className="flex flex-col gap-8 text-2xl p-8 text-center items-center justify-center">
          <h2 className="text-4xl text-center">
            I listen to every Sevdaliza single praying it will be this. A little
            sad/moody like a Sevdalize X Sega track should be
          </h2>
          <Image src={sega} alt="Breck" /> <br />
          <iframe
            width="500rem"
            height="315"
            src="https://www.youtube.com/embed/rFPKeBG9Dj8?si=n4XpIH_fSrkU1GzP"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="flex items-center flex-col gap-8 text-2xl py-8 text-center justify-center">
          <h2 className="text-4xl text-center">The saddest song I know</h2>
          <Image src={waxon} alt="Breck" /> <br />
          <iframe
            width="500rem"
            height="315"
            src="https://www.youtube.com/embed/vB6c7clBgQU?si=ef_YbkXObNypYGLc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex flex-col gap-8 text-2xl py-8 text-center items-center justify-center">
          <h2 className="text-4xl text-center">
            Best video in a long time? It&apos;s FUN! Playboy / Positions wishes
            it was this good.
          </h2>
          <Image src={boyznoize} alt="Breck" /> <br />
          <iframe
            width="500rem"
            height="315"
            src="https://www.youtube.com/embed/_rUqMTXbITA?si=9qJQ9eFVFFr84ZHn"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex flex-col gap-8 text-2xl py-8 text-center items-center justify-center">
          <h2 className="text-4xl text-center">
            🫠 New Justice sounds like this...
          </h2>
          <Image src={justice} alt="Breck" /> <br />
          <iframe
            title="New Justice"
            src="https://open.spotify.com/embed/playlist/3yW4Xpih5TwsFHlR8V5kT3?utm_source=generator"
            width={"500rem"}
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div className="flex flex-col gap-8 text-2xl p-8 text-center items-center justify-center">
          <h2 className="text-4xl text-center">
            It&apos;s like a club bass song with Billie Eilish&apos;s first
            album vocals
          </h2>
          <Image src={zorro} alt="Breck" /> <br />
          <iframe
            src="https://open.spotify.com/embed/track/67dknz6vcbsiiXtVWFCFnO?utm_source=generator"
            width={"500rem"}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div className="flex items-center flex-col gap-8 text-2xl py-8 text-center justify-center">
          <h2 className="text-4xl text-center">🥰 Step Up, bb 🥰</h2>
          <Image src={stepup} alt="Breck" /> <br />
        </div>
      </div>

      <br />
    </div>
  );
}
