import React from 'react'

export default function page() {
  return (
    <div className='h-full w-full'>
      <section className='pt-2 pb-8'>
        <div className='flex justify-between pb-2'>
          <p className='text-2xl font-bold'>Your Projects</p>
          <p className='text-xl'>See More (Only render if user has more than 4 posts)</p>
        </div>

        <div className='flex justify-between'>
          <div className='h-[20vh] w-1/5 bg-gray-300 rounded-xl' />
          <div className='h-[20vh] w-1/5 bg-gray-300 rounded-xl' />
          <div className='h-[20vh] w-1/5 bg-gray-300 rounded-xl' />
          <div className='h-[20vh] w-1/5 bg-gray-300 rounded-xl' />
        </div>
      </section>

      <section>
        <div className='flex justify-between'>
          <p className='text-2xl font-bold'>Projects You've Joined</p>
          <p className='text-xl'>See More (Only render if user has more than 4 posts)</p>
        </div>

        <div className='flex justify-between'>
          <div className='h-[20vh] w-1/5 bg-gray-300 rounded-xl' />
          <div className='h-[20vh] w-1/5 bg-gray-300 rounded-xl' />
          <div className='h-[20vh] w-1/5 bg-gray-300 rounded-xl' />
          <div className='h-[20vh] w-1/5 bg-gray-300 rounded-xl' />
        </div>
      </section>
    </div>
  )
}
