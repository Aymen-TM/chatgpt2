"use client"
import { Bars3Icon, PlusIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import SideBar from './SideBar'

type Props = {}

const NavBar = (props: Props) => {
    const [Open, setOpen] = useState<boolean>(false)
    console.log(Open);
    
  return (
    <>
    <div className='p-4 w-full  flex items-center md:hidden'>
        <div className='cursor-pointer hover:bg-hover' onClick={()=>setOpen(!Open)}>
            <Bars3Icon className='h-5 w-5 text-white'/>
        </div>

        <div className='flex-1 flex justify-center text-gray-300 font-semibold text-xl'>
            <p>New Chat</p>
        </div>

        <div className='cursor-pointer hover:bg-hover'>
            <PlusIcon className='h-5 w-5 text-white' />
        </div>
   
    </div>
    {
       Open && <div className='absolute flex  w-full  items-start  left-0 top-0 md:hidden  '>
            <SideBar />
            <div className='cursor-pointer bg-neutral-900 ml-2  mt-2' onClick={()=>setOpen(!Open)}>
                <XMarkIcon className='h-8 w-8 text-white'/>
            </div>
        </div>
    }
    </>
  )
}

export default NavBar