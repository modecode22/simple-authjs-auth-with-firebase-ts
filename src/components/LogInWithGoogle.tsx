"use client"
import { signIn } from "next-auth/react"
import FcGoogle from "./Icons/FcGoogle"

const LogInWithGoogle = () => {
  return (
<button
type="button"
onClick={() => signIn("google")} className="group duration-100 flex items-center justify-center gap-2 w-full h-12 bg-gradient-to-br from-rose-800 to-rose-400 text-white rounded-md hover:brightness-90 transition-all">
LogIn with Google
<FcGoogle className="w-6 h-6 rounded-full duration-100 transition-all bg-zinc-100/80 group-hover:bg-zinc-100" />
</button>
  )
}

export default LogInWithGoogle
