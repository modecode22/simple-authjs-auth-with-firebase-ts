"use client"
import React from 'react'
import  type { Session  } from 'next-auth'
import { SessionProvider } from "next-auth/react"

const Providers = ({
    children,
    session
  }: {
    children: React.ReactNode,
session :null | Session
  }) => {
  return (
    <>
    <SessionProvider session={session}>
      {children}
    </SessionProvider> 
    </>
     )
}

export default Providers