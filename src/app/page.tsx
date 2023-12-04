
import About from '@/pages/about';
import Home from '@/pages/home';
import Script from 'next/script';

const Index = () => {
  return (
    <>
    <main className="">
      <div>
        <Home/>
        <About/>
      </div>
    </main>
    </>
  )
}
export default Index;
