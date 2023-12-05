import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LOGO from '/public/static/images/devlogo.svg'


const Navbar = () => {
  return (
    <div className="relative">
      <div className="w-[100vw] flex " >
       <div className="flex flex-start mt-3" >
        <Image src={LOGO} alt="" className="h-[9vh] w-[12vw]"/>
       </div>

      <div className="w-[100%] h-[9.6vh] pt-3 absolute flex justify-center">
        <div className="w-[50vw] h-[100%] bg-[#494949] drop-shadow shadow-[#5a5a5a] shadow-inner rounded-[50px] flex flex-row pl-[10px] gap-7 items-centers justify-center">
          <Link href="/" className="mt-[1.2rem]">
            <h3 className="font-inter font-extralight text-2xl text-baseBeige">
              Home
            </h3>
          </Link> 
          <Link href="/about" className="mt-[1.2rem]">
            <h3 className="font-inter font-extralight text-2xl text-baseBeige">
              About
            </h3>
          </Link> 
          <Link href="/portfolio" className="mt-[1.2rem]">
            <h3 className="font-inter font-extralight text-2xl text-baseBeige">
              Portfolio
            </h3>
          </Link> 
          <Link href="/contact" className="mt-[1.2rem]">
            <h3 className="font-inter font-extralight text-2xl text-baseBeige">
              Contact
            </h3>
          </Link> 
          {/* <Link href="" className=""> */}
            {/* <Image src={LOGO} alt="" className="h-[9vh] w-[12vw]"/> */}
          {/* </Link>  */}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;