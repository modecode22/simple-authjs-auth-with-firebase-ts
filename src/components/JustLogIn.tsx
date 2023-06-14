"use client"
import React from 'react'
import FcGoogle from './Icons/FcGoogle'
import { signIn } from 'next-auth/react'

const JustLogIn = () => {
  return (
<button
type="button"
onClick={() => signIn()} className="mt-32 group duration-100 flex items-center justify-center gap-2 w-full h-12 bg-gradient-to-br from-blue-800 to-blue-400 text-white rounded-md hover:brightness-90 transition-all">
LogIn with Google
<FcGoogle className="w-6 h-6 rounded-full duration-100 transition-all bg-zinc-100/80 group-hover:bg-zinc-100" />
or Credentials
</button>  )
}

export default JustLogIn