"use client"
import React from 'react'
import ChatBubbel from './ChatBubbel'
import { useSession } from 'next-auth/react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline'

type Props = {
    chatId:string
}

const Chat = ({chatId}: Props) => {
  const {data:session} = useSession()
  const [messages] = useCollection(session && query(
      collection(db,"users",session?.user?.email!,"chats",chatId,"messages"),orderBy("createdAt","asc")
  ))
  return (
    <div className='flex-1 text-white  flex flex-col gap-6 overflow-y-scroll scrollbar-hide'>
      {
        messages?.empty && (
          <>
          <p className=' mx-auto '>Type a promp in below to get started</p>
          <ArrowDownCircleIcon className='h-10 w-10 mx-auto  animate-bounce' />
          </>
        )
      }
        {
          messages?.docs.map((doc)=>(
            <ChatBubbel key={doc.id} messageSender={doc.data().user.name} text={doc.data().text} avatar={doc.data().user.avatar} />
          ))
        }
    </div>
  )
}

export default Chat