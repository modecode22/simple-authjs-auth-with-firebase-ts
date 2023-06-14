"use client"
import React from 'react'
import LogOutButton from './LogOutButton'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import admin from '../../public/admin.png'
const LogOut = () => {
  const data = useSession()
  console.log(data);
  
  return (
<section className="text-zinc-950 p-2 flex flex-col  gep-2 bg-gradient-to-br from-zinc-50 to-blue-200 rounded-lg w-96 aspect-[2/3]" >
 
 <section className='w-full flex justify-center items-center'>
{
data.data?.user?.image ?
<div className='rounded-full w-20 h-20 relative '>
<Image  src={data.data?.user?.image} alt='your image' fill className='rounded-full w-20 h-20 object-cover' />
</div>   :
<div className='rounded-full w-20 h-20 relative '>
<Image  src={admin} alt='your image' fill className='rounded-full w-20 h-20 object-cover' />
</div>
}

 </section>
  <h1 className='w-full text-center text-2xl font-bold'>Welcom {data.data?.user?.name} to the App</h1>
  <h1 className='w-full text-center font-bold'>Your E-mail is {data.data?.user?.email}</h1>

<section className='w-full flex justify-center items-center flex-col gap-2 my-10'>
  <h4>do you want to logout ? </h4>
  <LogOutButton />
</section>
  
</section>
  )
}

export default LogOut