import { Plus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <main>
      <section className='relative'>
        <Image src='/assets/shape.svg' alt="shape" width={200} height={200} className='absolute top-0 left-0' />

        <section className='bg-primary flex flex-col justify-end gap-3 pb-5 h-64 items-center'>
            <Image src='/assets/Ellipse.png' alt='ellipse' width={100} height={100} />
            <p className='font-bold text-secondary'>Welcome Jeegar goyani</p>
        </section>
      </section>

      <section className='flex flex-col pt-3 pe-5 gap-2'>
        <p className='self-end font-bold'>Good Afternoon</p>
        <Image src='/assets/clock.png' alt="shape" width={200} height={200} className='self-center' />
      </section>

      <section className='px-5 mb-5'>
        <p className='font-bold mb-5'>Task List</p>
        <div className='p-5 shadow-lg shadow-black/30 min-h-80 rounded-2xl'>
            <div className='flex justify-between items-center mb-12'>
                <p>Daily Tasks</p>
                <Plus className='text-2xl font-bold text-primary' />
            </div>
            <ul className='grid gap-3'>
                <li className='flex gap-2'>
                    <input type="checkbox" name="" id="" className='accent-primary w-10' />
                    <p>Learning Programming by 10PM</p>
                </li>
                <li className='flex gap-2'>
                    <input type="checkbox" name="" id="" className='accent-primary w-10' />
                    <p>Learning Programming by 10PM</p>
                </li>
                <li className='flex gap-2'>
                    <input type="checkbox" name="" id="" className='accent-primary w-10' />
                    <p>Learning Programming by 10PM</p>
                </li>
                <li className='flex gap-2'>
                    <input type="checkbox" name="" id="" className='accent-primary w-10' />
                    <p>Learning Programming by 10PM</p>
                </li>
                <li className='flex gap-2'>
                    <input type="checkbox" name="" id="" className='accent-primary w-10' />
                    <p>Learning Programming by 10PM</p>
                </li>
            </ul>
        </div>
      </section>
    </main>
  )
}

export default Page
