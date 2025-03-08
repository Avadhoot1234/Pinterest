"use client"
import React from 'react'
import Image from 'next/image'
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";
import { useSession, signIn, signOut } from "next-auth/react"

const Header = () => {
  const { data: session } = useSession();

  return (
    <div className='flex gap-3 items-center p-6'>
      <Image src='/logo.png' alt='logo' width={50} height={50} 
      className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'/>

      <button className='bg-black text-white p-2 px-4 rounded-full'>Home</button>
      <button className='font-semibold p-2 px-4 rounded-full cursor-pointer'>Create</button>

      <div className='bg-[#e9e9e9] p-3 flex gap-3 items-center rounded-full w-full'>
        <CiSearch className='text-[25px] text-gray-500'/>
        <input type='text' placeholder='Search' className='bg-transparent outline-none'/>
      </div>


      <CiBellOn className='text-[40px] text-gray-500'/>
      <CiChat1 className='text-[40px] text-gray-500'/>

      {/* <Image src="/man.png" alt='user-image' width={50} height={50}
      className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'/> */}
      <button className='font-semibold p-2 px-4 rounded-full cursor-pointer'onClick={() => signIn()}>Login</button>
    </div>
  )
}

export default Header
