import React from 'react'

export default function page() {
  return (
    <div className='h-full w-full'>
      <section className='pt-2 pb-8'>
        <div className='flex justify-between pb-2'>
          <p className='text-2xl font-bold'>Catalog</p>
          <p className='text-xl'>Post a project</p>
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
          <p className='text-2xl font-bold'>Join a project</p>
          <p className='text-xl'>Request to join</p>
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
