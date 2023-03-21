import { ChatBubbleLeftIcon, TrashIcon } from '@heroicons/react/24/outline'
import { collection, deleteDoc, doc, orderBy, query } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../firebase'

type Props = {
    id:string,

}

const ChatRow = ({id}: Props) => {
    const pathName = usePathname()
    const router = useRouter()
    const {data:session}= useSession()

    const [Active, setActive] = useState(false)

    const [messages] = useCollection(query(
        collection(db,"users",session?.user?.email!,"chats",id,"messages"),orderBy("createdAt","asc")
    ))

    useEffect(() => {
      if(!pathName) return
      setActive(pathName.includes(id))
    }, [pathName])
    
    const removeChat = async ()=>{
        await deleteDoc(doc(db,"users",session?.user?.email!,"chats",id))
        router.replace("/")
    }

  return (
    <Link href={`/chat/${id}`} className={`w-full flex justify-between items-center p-4 rounded-lg mt-2 ${Active?"bg-light":"bg-hover"}`} >
        <div className='flex space-x-4 items-center '>
            <ChatBubbleLeftIcon className='h-5 w-5 text-white' />
            <p className='truncate text-white'>{messages?.docs[messages.docs.length-1]?.data().text || "New chat"} </p>
        </div>
        <TrashIcon onClick={removeChat} className='h-5 w-5 text-red-400' />
    </Link>
  )
}

export default ChatRow