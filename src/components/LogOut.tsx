import React from 'react'
import LogOutButton from './LogOutButton'

const LogOut = () => {
  return (
<section className="text-zinc-950 p-2 flex flex-col gep-2 bg-gradient-to-br from-zinc-50 to-blue-200 rounded-lg w-96 aspect-[2/3]" >
  <h1 className='w-full text-center text-4xl font-bold'>Welcom to the App</h1>

<section>
  <h4>do you want to logout ? </h4>
  <LogOutButton />
</section>
  
</section>
  )
}

export default LogOut