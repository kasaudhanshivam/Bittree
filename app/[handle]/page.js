export const dynamicParams = true;


import Link from "next/link";
import clientPromise from "../lib/mongodb";
import { notFound } from "next/navigation";
import ShareButton from "../../components/ShareButton";


export default async function Page({ params }) {
  const handle = (await params).handle;

  const client = await clientPromise
  const db = await client.db('bittree')
  const collection = await db.collection('links')

  let item = await collection.findOne({ handle })

  if (!item) {
    return notFound();
  };



  return <>
    <div className=" bg-purple-500 min-h-screen flex flex-col justify-start items-center py-12">
      <Link
      className="top-0 px-6 flex left-1 fixed mt-5 bg-gray-800 rounded-full p-3 ml-2 text-white"
      href={"/"}
    >
      &lt;- Back to Home
    </Link>
      <img className="rounded-full size-40 border-4 border-white shadow-red-600" src={item.pic} alt="" />
      <span className="font-semibold">@{item.handle}</span>

      <div className="desc w-96 text-center pb-3">{item.desc}</div>

      <div className="links flex flex-col py-4 gap-5 justify-center items-center text-center">
        {item.links.map((item, index) => {
          return <Link className="bg-purple-300 shadow-lg font-bold p-3 w-64 rounded-xl" href={item.link} key={index}>{item.linkText}</Link>
        })}
      </div>

      <ShareButton />

    </div>
  </>
}

