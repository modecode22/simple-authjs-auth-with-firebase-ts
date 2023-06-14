"use client"
import { signOut } from 'next-auth/react'
import React from 'react'

const LogOutButton = () => {
  return (
    <button onClick={()=>{
        signOut()
    }} className="group duration-100 flex items-center justify-center gap-2 w-full h-12 bg-gradient-to-br from-zinc-800 to-blue-600 text-white rounded-md hover:brightness-90  transition-all">
        Log Out now
    </button>
  )
}

export default LogOutButton