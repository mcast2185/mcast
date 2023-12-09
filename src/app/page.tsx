
import Navbar from '@/components/navigation/navbar';
import About from '@/pages/about';
import Home from '@/pages/home';
import Image from 'next/image';
import BG from '/public/static/images/devbg.svg';
import PageDivider from '@/components/pageComponents/pageDivider';
import Portfolio from '@/pages/portfolio';
import Contact from '@/pages/contact';

const Index = () => {
  return (
    <>
    <main className=" w-[100vw]" >
      <div className="inset-0 z-[-10] ">
        <Image 
          src={BG} 
          role="img"  
          alt="testing" 
          loading='eager' 
          style={{
            opacity: "1",
            objectFit: 'cover',
            position: "fixed",
            zIndex: "-10",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }} 
        />
        <div className="w-[100vw]">
          <Navbar/>
          <Home/>
          <About/>
          <PageDivider/>
          <Portfolio/>
          <Contact />
        </div>
      </div>
    </main>
    </>
  )
}
export default Index;
