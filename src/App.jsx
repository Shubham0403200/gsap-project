import gsap from 'gsap'
import { SplitText } from "gsap/SplitText";
import Navbar from './_components/navbar';
import Hero from './_components/hero';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Cocktails from './_components/cocktails';
import About from './_components/about';
import Art from './_components/art';
import Menu from './_components/menu';
import Contact from './_components/contact';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
        <Navbar />
        <Hero />
        <Cocktails />
        <About />
        <Art />
        <Menu />
        <Contact />
    </main>
  )
}

export default App