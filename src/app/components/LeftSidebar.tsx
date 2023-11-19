import Link from 'next/link'
import { BiHomeCircle, BiUser } from 'react-icons/bi'
import { HiOutlineHashtag } from 'react-icons/Hi'
import { BsEnvelope, BsThreeDots, BsBookmark, BsBell, BsTwitter } from 'react-icons/bs'

const NAV_ITEMS = [
  {
    title: 'Fwitter',
    icon: BsTwitter
  },
  {
    title: 'Home',
    icon: BiHomeCircle
  },
  {
    title: 'Explore',
    icon: HiOutlineHashtag
  },
  {
    title: 'Notifcations',
    icon: BsBell
  },
  {
    title: 'Messages',
    icon: BsEnvelope
  },
  {
    title: 'Bookmarks',
    icon: BsBookmark
  },
  {
    title: 'Profile',
    icon: BiUser
  }
]

import React from 'react'
const LeftSidebar = () => {
    return (
        <section className="fixed w-[240px] flex flex-col items-stretch h-screen">
        <div className="flex flex-col items-stretch h-full space-y-4 my-4">
        {NAV_ITEMS.map((item) => (
          <Link className='hover:bg-white/10 text-2xl transition duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6' href={'/${item.title.toLowercase()}'} key={item.title}>
            <div><item.icon /></div>
            {item.title !== "Fwitter" && <div>{item.title}</div>}
          </Link>
        ))}
        <button className='rounded-full m-4 p-4 text-2xl text-center bg-fwitter hover:opacity-90 transition duration-200'>Post</button>
        </div>
        <button className='hover:bg-[#e7e9ea1b] transition duration-200 rounded-full flex items-center space-x-2 m-4 p-4 text-center w-full justify-between'>
          <div className='flex items-center space-x-2'>
            <div className='bg-gray-600 rounded-full w-10 h-10'></div>
            <div className='text-left text-l'>
              <div className='font-bold text-l'>Yash Nirala</div>
              <div>@yashnirala</div>
            </div>
          </div>
          <div><BsThreeDots /></div>
        </button>
    </section>
    )
}

export default LeftSidebar;