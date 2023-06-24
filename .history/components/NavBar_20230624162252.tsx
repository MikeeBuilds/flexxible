import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex-between navbar'>
        <div className='flex-1 flexStart gap-10'>
            <Link href="/">
                <Image
                    
                />
            </Link>
        </div>
    </nav>
  )
}

export default NavBar