import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'

gsap.registerEffect(ScrollTrigger,SplitText);

const App = () => {
  return (
    <div className='h-[100vh]'>
        <h1 className="text-3xl flex-center">Hello World</h1>
    </div>
  )
}

export default App