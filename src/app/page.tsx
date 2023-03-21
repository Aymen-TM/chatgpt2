
import { Inter } from 'next/font/google'
import { SunIcon,BoltIcon,ExclamationTriangleIcon } from '@heroicons/react/24/outline'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=' flex justify-center items-center flex-col md:h-screen p-4'>
      <h1 className='text-3xl text-white font-bold '>ChatGPT</h1>
      <div className='grid grid-cols-1 sm:grid-cols-3 sm:w-3/4 gap-2  '>
        <div className='flex items-center flex-col space-y-2 '>
          <SunIcon className="h-6 w-6 text-white" />
          <p className=' text-white text-lg'>Example</p>
          <div className='info-text'>
            <p className='text-white-center'>"Explain quantum computing in simple terms"</p>
          </div>
          <div className='info-text'>
            <p className='text-white-center'>"Got any creative ideas for a 10 year old’s birthday?"</p>
          </div>
          <div className='info-text'>
            <p className='text-white-center'>"How do I make an HTTP request in Javascript?"</p>
          </div>
        </div>
        <div className='flex items-center flex-col  space-y-2'>
        <BoltIcon className="h-6 w-6 text-white" />
        <p className=' text-white text-lg'>Capabilites</p>
        <div className='info-text'>
            <p className='text-white text-center'>Remembers what user said earlier in the conversation</p>
          </div>
          <div className='info-text'>
            <p className='text-white text-center'>Allows user to provide follow-up corrections</p>
          </div>
          <div className='info-text'>
            <p className='text-white text-center'>Trained to decline inappropriate requests</p>
          </div>
          </div>
          <div className='flex items-center flex-col  space-y-2'>
          <ExclamationTriangleIcon className="h-6 w-6 text-white" />
          <p className=' text-white text-lg'>Limitations</p>
          <div className='info-text'>
            <p className='text-white-center'>May occasionally generate incorrect information</p>
          </div>
          <div className='info-text'>
            <p className='text-white-center'>May occasionally produce harmful instructions or biased content</p>
          </div>
          <div className='info-text'>
            <p className='text-white-center'>Limited knowledge of world and events after 2021</p>
          </div>
          </div>
      </div>
    </main>
  )
}
