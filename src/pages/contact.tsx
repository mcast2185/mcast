import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <div className='w-[100vw] h-[100vh]' style={{backgroundColor: "var(--base-pink)"}}>
      <h1 style={{fontFamily: 'var(--base-font-family)'}} >
        Contact
      </h1>
      <Link href="/" style={{fontFamily: 'var(--base-font-family)', color: "var(--base-blue)"}} >
        Contact
      </Link>
    </div>
  )
}

export default Contact