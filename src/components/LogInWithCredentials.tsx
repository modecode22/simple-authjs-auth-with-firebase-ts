"use client"
import { signIn } from 'next-auth/react'
import React from 'react'

const LogInWithCredentials = () => {
  return (
<button
type="button"
onClick={() => signIn("credentials")} className="group duration-100 flex items-center justify-center gap-2 w-full h-12 bg-gradient-to-br from-indigo-800 to-indigo-400 text-white rounded-md hover:brightness-90 transition-all">
LogIn with Credentials
</button>  )
}

export default LogInWithCredentials