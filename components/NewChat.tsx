"use client"
import { PlusIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useRouter } from 'next/navigation'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { useSession } from 'next-auth/react'

type Props = {}

const NewChat = (props: Props) => {

 
  const {data} = useSession();
  const router = useRouter();
 
  const createChat = async ()=>{
    const doc= await addDoc(collection(db,"users",data?.user?.email!,"chats"),{
      messages:[],
      userId:data?.user?.email!,
      createdAt:serverTimestamp()
    })
    router.push(`/chat/${doc.id}`)
  }
  return (
    <div>
        <button onClick={createChat} className="newchat-btn">
            <PlusIcon className="h-4 w-4 text-white" />
             <span className='text-white text-sm'>New chat</span>
        </button>
    </div>
  )
}

export default NewChat