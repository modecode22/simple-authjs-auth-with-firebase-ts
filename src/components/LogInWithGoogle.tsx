"use client"
import { signIn } from "next-auth/react"
import FcGoogle from "./Icons/FcGoogle"

const LogInWithGoogle = () => {
  return (
<button onClick={() => signIn("github")} className="group duration-100 flex items-center justify-center gap-2 w-full h-12 bg-zinc-800 text-white rounded-md hover:bg-zinc-700 transition-colors">
LogIn with Google
<FcGoogle className="w-6 h-6 rounded-full duration-100 transition-all bg-zinc-100/80 group-hover:bg-zinc-100" />
</button>
  )
}

export default LogInWithGoogle