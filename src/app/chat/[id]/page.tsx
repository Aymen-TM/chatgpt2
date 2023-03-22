import React from 'react'
import Chat from '../../../../components/Chat'
import ChatInput from '../../../../components/ChatInput'

type Props = {
  params:{
    id:string
  }
}

const ChatPage = ({params:{id}}: Props) => {
  console.log(id);
  
  return (
    <div className='h-screen flex flex-col max-w-xs sm:max-w-sm md:max-w-md  lg:max-w-3xl  mx-auto py-4 overflow-hidden'>
      <Chat chatId={id} />
      <ChatInput chatId={id} />
    </div>
  )
}

export default ChatPage