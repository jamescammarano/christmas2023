import toe from "../public/mistletoe.png";

import Image from "next/image";

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
        <div className="pricetag text-2xl p-8 text-center">Happy Holidays!</div>
      </div>
      <br />
    </main>
  );
}
