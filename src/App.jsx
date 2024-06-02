import {About,Education, Experience, Skills} from './components/index.js'
import {Footer,Header,Navbar } from './containers/index.js'
import './App.css'


function App() {


  return (
    <>
    <div>
      <Navbar />
      <Header />
    </div>
    <About />
    <Education />
    <Experience />
    <Skills />
    <Footer />
   
    </>
  )
}

export default App
