import './App.css';
import Navbar from "./components/Navbar"
import Accueil from './components/Accueil'
import Collections from './components/Collections'
import Commander from './components/Commander'
import About from './components/About'


function App() {
  return (
   <>
   <Navbar/>
   <Accueil/>
   <Collections/>
   <Commander/>
   <About/>
   </>
  )
}

export default App
