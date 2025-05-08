import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <main className=''>
      <section>
        <Image src='/assets/shape.svg' alt="shape" width={200} height={200} />
      </section>

      <section className='text-center grid grid-cols-1 w-full *:mx-auto items-center justify-center gap-8'>
            <h2 className='font-bold text-xl'>Welcome back</h2>
            <Image src='/assets/undraw_back_to_school.svg' alt='back to school' width={200} height={200} />
      </section>

      <section className='mx-auto w-4/5 mt-14'>
            <form action="" className='grid grid-cols-1 gap-6'>
                <div className='w-full'>
                    <input type="email" placeholder='Enter your Email' className={`rounded-full px-4 h-12 bg-secondary outline-none w-full`} />
                </div>
                
                <div className='w-full'>
                    <input type="password" placeholder='Enter Password' className={`rounded-full px-4 h-12 bg-secondary outline-none w-full`} />
                </div>

                <Link href='/signin' className='text-primary text-center mt-10'>Forget password ?</Link>

                <button className='text-white font-bold bg-primary mt-10 py-3 rounded-sm text-center'><Link href='/dashboard'>Login</Link></button>
                <p className='text-center mb-5'>Don&apos;t have an account? <span className='text-primary'><Link href='/registeration'>Sign Up</Link></span></p>
            </form>
        </section>
    </main>
  )
}

export default Page
