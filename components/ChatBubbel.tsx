import { useSession } from 'next-auth/react'
import React from 'react'


type Props = {
    messageSender:string,
    text:string,
    avatar:string
}

const ChatBubbel = ({messageSender,avatar,text}: Props) => {
    const {data:session} = useSession()
    const isUser = messageSender == session?.user?.name!

  return (
    <div className={`w-full p-4 text-white ${isUser ? "bg":"bg-light"}`}>
      <div className='flex items-center gap-4 max-w-xs sm:max-w-sm md:max-w-md  lg:max-w-3xl  mx-auto'>
        <div className='h-10 w-10 rounded-full overflow-hidden self-start '>
              <img src={avatar} alt="profile image"  />
        </div>
        <p className='flex-[1]'>{text}</p>
      </div>
    </div>
  )
}

export default ChatBubbel