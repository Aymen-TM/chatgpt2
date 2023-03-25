"use client"
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import useSWR from "swr"
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import { db } from '../firebase'
import {toast} from "react-hot-toast"
import ModelSelection from './ModelSelection'

type Props = {
    chatId:string
}



const ChatInput = ({chatId}: Props) => {

    const [Prompt, setPrompt] = useState("")
    const {data:session} = useSession()

    const {data:model} = useSWR("model",{
        fallbackData:"text-davinci-003"
    })




    const sendMessage = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(!Prompt) return
        const input = Prompt.trim();
        setPrompt("")

        const message :Message = {
            text:input,
            createdAt:serverTimestamp(),
            user:{
                _id:session?.user?.email!,
                name:session?.user?.name!,
                avatar:session?.user?.image! || ""
            }
        }

        await addDoc(collection(db,"users",session?.user?.email!,"chats",chatId,"messages"),
        message
        )

        //Toast notification to say successful
        const notification = toast.loading("ChatGPT is thinking...")
        await fetch("/api/askQuestion",{
            method:"post",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                prompt:input,chatId,model,session
            })
        }).then(()=>{
            //Toast notification to say successful
            toast.success("ChatGPT has responded!",{
                id:notification
            })
        })
    }
  return (
    <div className='bg-light w-full  rounded-md overflow-hidden mt-4 max-w-xs sm:max-w-sm md:max-w-md  lg:max-w-3xl  mx-auto'>
        <form onSubmit={(e)=>sendMessage(e)} className='flex justify-between'>
            <input value={Prompt} onChange={(e)=>setPrompt(e.target.value)} type="text" name="message"   className="block w-full bg-transparent shadow-lg border-none  px-7 text-white  placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6" placeholder="Write your thought" />
            <div className='p-2 flex justify-center items-center'>
                <button type='submit' disabled={!Prompt || !session}  className='bg-hover rounded-full p-1 bg-transparent disabled:bg-gray-400 bg-green-500 disabled:cursor-not-allowed'><PaperAirplaneIcon className='h-5 w-5 text-white -rotate-45' /></button>
            </div>
        </form>

        <div className='sm:hidden'>
            <ModelSelection />
        </div>
    </div>
  )
}

export default ChatInput