'use client'
import React from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'
import NewChat from './NewChat'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

type Props = {}


const SideBar = (props: Props) => {
  const {data:session}= useSession();
  return (
    <div className='flex flex-col lg:h-screen bg-sideBar p-2 max-w-sm overflow-y-auto md:min-w-[20rem]'>
        <div className='flex-1'>
            {/* new chat */}
            <div>
              <NewChat />
            </div>

            {/* model selection */}

            <div>

            </div>

            {/*map through the chatrows */}

            <div>

            </div>


        </div>
        {
          session && (
            <img onClick={()=>signOut()} src={session.user?.image!} alt='image' className='h-16 w-16 rounded-full mx-auto cursor-pointer hover:opacity-75' />
          )
        }
    </div>
  )
}

export default SideBar