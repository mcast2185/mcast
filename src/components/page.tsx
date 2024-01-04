import { ReactHTMLElement } from "react";
import Navbar from "./navigation/navbar";
import Background from "./pageComponents/background";

export default function Page({children}: {children: React.ReactNode}) {
  return (
    <>
      <main className="flex items-center p-0 m-0 h-[100vh] w-[100vw]">
        {/* <Background/> */}
        {/* <Navbar/> */}

         
        {children}

      </main>
    </>
  )
}