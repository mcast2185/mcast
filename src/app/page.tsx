
import Navbar from '@/components/navigation/navbar';
import About from '@/pages/about';
import Home from '@/pages/home';
import Script from 'next/script';

const Index = () => {
  return (
    <>
    <main className="">
      <div>
        <Navbar/>
        <Home/>
        <About/>
      </div>
    </main>
    </>
  )
}
export default Index;
