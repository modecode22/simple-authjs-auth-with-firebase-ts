import JustLogIn from "./JustLogIn"
import LogInWithCredentials from "./LogInWithCredentials"
import LogInWithGoogle from "./LogInWithGoogle"

const LogIn = () => {
  return (
<main className="min-h-screen bg-gradient-to-tl from-rose-950 via-indigo-900 to-blue-800 w-full flex justify-center items-center">

<form className="p-2 flex flex-col gap-2 bg-gradient-to-br from-zinc-50 to-zinc-100 rounded-lg w-96 aspect-[2/3]" >


<LogInWithGoogle/>
<LogInWithCredentials /> 
<JustLogIn /> 
</form>

</main>  )
}

export default LogIn