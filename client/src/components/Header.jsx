import React from 'react'

const Header = () => {
  return (
    <div className='bg-slate-200'>
        <div className='flex justify-between items-center mx-auto'>
            <h1 className='font-bold'>Auth app</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Sign In</li>
            </ul>
        </div>
    </div>
  )
}

export default Header