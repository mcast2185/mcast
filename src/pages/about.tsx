import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div className='w-[100vw] h-[100vh]' style={{backgroundColor: "var(--base-pink)"}}>
      <div className="w-[90%] h-[90%] " >
       
      <h1 style={{fontFamily: 'var(--base-font-family)', color: "var(--base-blue)"}} >
        About
      </h1>
      <Link href="/contact" style={{fontFamily: 'var(--base-font-family)', color: "var(--base-powder)"}} >
        Contact
      </Link>
      </div>
    </div>
  )
}

export default About