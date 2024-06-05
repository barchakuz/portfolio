import {About,Education, Skills,Contact} from './components/index.js'
import {Footer,Header,Navbar ,Temp} from './containers/index.js'
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
    <Skills />
    <Contact />
    <Footer />
    <Temp />
    
   
    </>
  )
}

export default App
