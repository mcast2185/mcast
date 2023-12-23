import Navbar from '@/components/navigation/navbar';
import About from '@/pages/about';
import Home from '@/pages/home';
import PageDivider from '@/components/pageComponents/pageDivider';
import Portfolio from '@/pages/portfolio';
import Contact from '@/pages/contact';
import Background from '@/components/pageComponents/background';
import { client } from '@/lib/sanity.client';
import { Images } from '../../../typings';

export const revalidate = 60;

export const Index = async () => {
  const images: Images[] = await client.fetch(`
    *[_type == "images"]{
      ...,
      categories[]->,
    } | order(_createdAt desc)
  `);

  return (
    <>
    <main className=" w-[100vw]" >
      <div>
        <Background/>
        <div className="w-[100vw]">
          <Navbar/>
          <Home/>
          <PageDivider images={images}/>
          <About/>
          <Portfolio/>
          <Contact />
        </div>
      </div>
    </main>
    </>
  )
}
export default Index;
