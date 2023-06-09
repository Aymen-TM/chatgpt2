import {SessionProvider} from '../../components/SessionProvider'
import SideBar from '../../components/SideBar'
import {getServerSession} from "next-auth"
import './globals.css'
import {authOptions} from '../../pages/api/auth/[...nextauth]'
import Login from '../../components/Login'
import ClientProvider from '../../components/ClientProvider'
import NavBar from '../../components/NavBar'



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  const session = await getServerSession(authOptions)

  
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {
            !session ? (
              <Login />
            ):
            (
            <div className='flex'>
              <div className='hidden md:block'>
                <SideBar />
              </div>
              {/* Client Provider  - Notifications */}
              <ClientProvider />
              <div className='bg flex-1'>
                {children}
                </div>
            </div>
            )
          }

        </SessionProvider>
      </body>
    </html>
  )
}
