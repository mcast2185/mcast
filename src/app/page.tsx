import Navbar from '@/components/navigation/navbar';
import About from '@/pages/about';
import Home from '@/pages/home';
import PageDivider from '@/components/pageComponents/pageDivider';
import Portfolio from '@/pages/portfolio';
import Contact from '@/pages/contact';
import Background from '@/components/pageComponents/background';

const Index = () => {
  return (
    <>
    <main className=" w-[100vw]" >
      <div>
      <Background/>
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
