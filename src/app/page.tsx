import { ScrollContent } from '@/components/pageComponents/scrollContent';
import About from '@/pages/about';
import Home from '@/pages/home';

const Index = () => {
  return (
    <main className="">
      <div>
        <Home/>
        <ScrollContent/>
        <About/>
      </div>
    </main>
  )
}
export default Index;
