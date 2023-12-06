
import Navbar from '@/components/navigation/navbar';
import About from '@/pages/about';
import Home from '@/pages/home';
import Image from 'next/image';
import Script from 'next/script';
import BG from '/public/static/images/devbg.svg'

const Index = () => {
  return (
    <>
    <main >
      <div className="h-[100vh] w-[100vw]">
        <Image src={BG} 
          role="img"  
          alt="testing" 
          loading='eager' 
          style={{
            opacity: ".57",
            position: "fixed",
            zIndex: "-10",
            width: "100vw",
            height: "100%",
            backgroundSize: "cover"
          }} 
        />
        <div className="">
          <Navbar/>
          <Home/>
          <About/>
        </div>
      </div>
    </main>
    </>
  )
}
export default Index;
