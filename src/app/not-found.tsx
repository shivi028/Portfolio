import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <>
    <div className='mt-40 mx-auto w-[90%] pb-16 p-3'>
      <div className='flex flex-col gap-y-8 justify-center items-center mt-10'>
        <h1 className='text-2xl text-headcolor tracking-tight font-bold text-center'>Your visited page not found. You may go home page.</h1>
        <Link href={'/'}>
          <p className='text-gray-500 text-lg border border-rose-50 p-1 hover:border-rose-200 hover:text-gray-700'>Go To Home Page</p>
        </Link>
      </div>
      
      </div>
    </>
  )
}

export default notFound
