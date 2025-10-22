"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import Navbar from "@/components/Navbar";


export default function Home() {

  const [handle, setHandle] = useState("");
  const router = useRouter();



  const claimHandle = () => {
    router.push(`/generate?handle=${handle}`)
  }

  return (
    <main>
      <Navbar/>
      <section className="bg-[#254f1a] min-h-[120vh]">
        <div className="grid grid-cols-2">
          <div className="flex min-h-[100vh] ml-10 gap-6 flex-col justify-center items-cente text-[#d2e823]">
            <h1 className="text-5xl font-extrabold">Everything you are. In one, simple link in bio.</h1>
            <p className="text-lg">Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
             <div className="flex gap-2 font-semibold">
              <input onChange={(e)=>setHandle(e.target.value)} value={handle} className="p-4 rounded-lg ml-3" type="text" placeholder="bittr.ee/yourname" />
              <button className="bg-[#e9c0e9] px-7 rounded-full text-gray-800" onClick={claimHandle} >Claim you Bittree</button>
             </div>
          </div>

          <div className="flex justify-center items-center">
            <img className="pt-16 h-[80%]" src="home.png" alt="" />
          </div>



        </div>

      </section>
      <section className="bg-red-500 min-h-[100vh]"></section>
    </main>

  );
}
