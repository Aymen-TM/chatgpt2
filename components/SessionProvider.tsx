'use client'
import { Session } from "next-auth"
import { SessionProvider as Provider } from "next-auth/react"

type props = {
    children:React.ReactNode,
    session:Session | null
}

export function SessionProvider(props:props){
    return (
        <Provider>
            {props.children}
        </Provider>
    )
}