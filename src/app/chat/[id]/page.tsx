import React from 'react'
import Chat from '../../../../components/Chat'
import ChatInput from '../../../../components/ChatInput'
import NavBar from '../../../../components/NavBar'

type Props = {
  params:{
    id:string
  }
}

const ChatPage = ({params:{id}}: Props) => {
  console.log(id);
  
  return (
    <div className='flex flex-col relative py-4 h-screen'>
      <NavBar />
      <Chat chatId={id} />
      <ChatInput chatId={id} />
    </div>
  )
}

export default ChatPage