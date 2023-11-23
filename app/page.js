import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";


export default function Home() {
  return (
   <main className="text-gray-400 bg-gray-900 body-font" >
      <Navbar />
      <About />
      <Project />
      <Skills />
      <Contact />
      
    </main>
  )
}
