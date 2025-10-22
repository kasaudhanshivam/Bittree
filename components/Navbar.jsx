import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div className="flex justify-between bg-white mx-9 rounded-full my-11 py-3 fixed w-[94.5%]">


                <div className='flex justify-center items-center gap-3'>

                <div className="logo pl-7">
                    <Link href={"/"}><svg className='w-7 h-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m13.511 5.853 4.005-4.117 2.325 2.381-4.201 4.005h5.909v3.305h-5.937l4.229 4.108-2.325 2.334-5.741-5.769-5.741 5.769-2.325-2.325 4.229-4.108H2V8.122h5.909L3.708 4.117l2.325-2.381 4.005 4.117V0h3.473v5.853zM10.038 16.16h3.473v7.842h-3.473V16.16z"></path></svg></Link>
                </div>
                    <ul className='flex gap-8 text-gray-600 justify-center items-center font-medium'>
                        <Link href={"/"}><li>Templates</li></Link>
                        <Link href={"/"}><li>Marketplace</li></Link>
                        <Link href={"/"}><li>Discover</li></Link>
                        <Link href={"/"}><li>Pricing</li></Link>
                        <Link href={"/"}><li>Learn</li></Link>
                    </ul>
                </div>

                <div className='flex justify-between items-center gap-3 mx-5'>
                <button className='rounded-lg font-bold p-5 bg-gray-800 px-6 text-white'>Log in</button>
                <button className='bg-gray-800 rounded-full font-bold px-7 py-5 text-white'>Sign up free</button>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
