import gsap from 'gsap'
import { SplitText } from "gsap/SplitText";
import Navbar from './_components/navbar';
import Hero from './_components/hero';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
        <Navbar />
        <Hero />
        <div className="h-[1000px] bg-blue-500"></div>
    </main>
  )
}

export default App