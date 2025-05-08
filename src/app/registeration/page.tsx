import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <main className='grid grid-cols-1 gap-16'>
        <section>
            <Image src='/assets/shape.svg' alt="shape" width={200} height={200} />
        </section>

        <section className='text-center grid grid-cols-1 w-full *:mx-auto items-center justify-center gap-8'>
            <h2 className='font-bold text-xl'>Welcome to Onboard!</h2>
            <p className='w-1/2'>Let’s help to meet up your tasks.</p>
        </section>

        <section className='mx-auto w-4/5'>
            <form action="" className='grid grid-cols-1 gap-6'>
                <div className='w-full'>
                    <input type="text" placeholder='Enter your full name' className={`rounded-full px-4 h-12 bg-secondary outline-none w-full`} />
                </div>
                
                <div className='w-full'>
                    <input type="email" placeholder='Enter your Email' className={`rounded-full px-4 h-12 bg-secondary outline-none w-full`} />
                </div>
                
                <div className='w-full'>
                    <input type="password" placeholder='Enter Password' className={`rounded-full px-4 h-12 bg-secondary outline-none w-full`} />
                </div>

                <div className='w-full'>
                    <input type="password" placeholder='Confirm Password' className={`rounded-full px-4 h-12 bg-secondary outline-none w-full`} />
                </div>

                <button className='text-white font-bold bg-primary mt-24 py-3 rounded-sm text-center'>Register</button>
                <p className='text-center mb-5'>Already have an account? <span className='text-primary'><Link href='/signin'>Sign In</Link></span></p>
            </form>
        </section>
    </main>
  )
}

export default Page
