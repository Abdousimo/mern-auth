import React from 'react'
import Link from 'next/link'


const Header = () => {
  return (
    <div className='bg-slate-200 py-4 md:py-8'>
        <div className='flex justify-between items-center mx-auto px-4'>
            <h1 className='font-bold'>Auth app</h1>
            <ul className='flex flex-col md:flex-row justify-between items-center'>
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/About"}>About</Link>
                </li>
                <li>
                  <Link href={"/Signin"}>Sign In</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header