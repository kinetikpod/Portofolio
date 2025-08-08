import Navbar from "./components/Navbar"
import Intro from "./components/Intro"
import Services from "./components/Services"
import Experience from "./components/Experience"
/* import Works from "./components/Works" */
import Portofolio from "./components/Portofolio"
import Contact from "./components/Contact"

function App() {


  return (
    <div className="App px-14 py-2">
      <Navbar />
      <Intro />
      <Services />
      <Experience />
{/*       <Works /> */}
      <Portofolio />
      <Contact />
    </div>
  )
}

export default App
