"use client"
export const dynamic = "force-dynamic";

import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';


const page = () => {
  const router = useRouter();
  let searchParams = useSearchParams()

  const [handle, setHandle] = useState(searchParams.get('handle'));
  // const [link, setLink] = useState("");
  // const [linkText, setLinkText] = useState("");
  const [pic, setPic] = useState("");
  const [links, setLinks] = useState([{ linkText: "", link: "" }]);
  const [desc, setDesc] = useState("")




  const add = async (links, handle, pic, desc) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "links": links,
      "handle": handle,
      "desc": desc,
      "pic": pic
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    let r = await fetch("/api/add", requestOptions)
    let result = await r.json()

    // console.log(result.success)
    if(result.success) {
      toast.success(result.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });


      setHandle("")
      setLinks([{ linkText: "", link: "" }])
      // setLinkText("")
      setPic("")
      setDesc("")

      router.push(`/${handle}`)


    }else{
      toast.error(result.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    }
  }



  const addLinkInput = () => {
    setLinks([...links, { linkText: "", link: "" }]);
  };

  const handleLinkChange = (index, field, value) => {
    const newLinks = [...links];
    newLinks[index][field] = value;
    setLinks(newLinks);
  };

  return (<>
      <Navbar/>
    <div className='grid grid-cols-2 min-h-[100vh] bg-[#d6a336]'>
      <div className='flex justify-center items-center ml-28'>
        <div>
          <h1 className='font-bold text-xl'>Create your Bittree</h1>

          <div className='my-4 flex flex-col'>
            <h2 className='font-semibold'>Step-1: Claim your handle</h2>
            <input type="text" onChange={(e) => setHandle(e.target.value)} placeholder='Choose a handle' value={handle} className='focus:outline-yellow-500 p-1 px-5 rounded-full' />
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder='Write about yourself...' className='focus:outline-yellow-500 p-1 px-5 rounded-xl mt-4'></textarea>
          </div>

          <div className='my-4'>
            <h2 className='font-semibold'>Step-2: Add Links</h2>
            {links.map((link, index) => (
              <div key={index} className='my-2'>
                <input type="text" onChange={(e) => handleLinkChange(index, 'linkText', e.target.value)} placeholder='Social media platform' value={link.linkText} className='focus:outline-yellow-500 p-1 px-5 rounded-full' />
                <input type="text" onChange={(e) => handleLinkChange(index, 'link', e.target.value)} placeholder='Link to your social profile' value={link.link} className='focus:outline-yellow-500 p-1 px-5 rounded-full ml-1' />
              </div>
            ))}
            <button className='bg-gray-800 rounded-full p-1 px-4 ml-1 text-white' onClick={addLinkInput}>+ Add more Links</button>
          </div>

          <div className='my-4'>
            <h2 className='font-semibold'>Step-3: Add Profile Picture</h2>
            <input type="text" onChange={(e) => setPic(e.target.value)} placeholder='Enter picture link' value={pic} className='focus:outline-yellow-500 p-1 px-5 rounded-full' />
          </div>

          <div>
            <button disabled={pic=="" || handle=="" || links[0].linkText=="" || links[0].link=="" || desc==""} className='bg-gray-800 rounded-full p-1 px-4 ml-2 text-white disabled:bg-slate-500 disabled:text-slate-200' onClick={() => add(links, handle, pic, desc)} >Create Bittree</button>
          </div>

        </div>
      </div>

      <div className='flex justify-center items-center'>
        <img className='pt-16 h-[80%]' src="generate.png" alt="" />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        />
    </div>
        </>
  )
}

export default page
