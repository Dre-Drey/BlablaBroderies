import './App.css';
import Navbar from "./components/Navbar"
import Accueil from './components/Accueil'
import Collections from './components/Collections'
import Commander from './components/Commander'
import About from './components/About'
import {data} from './data/data'

function App() {
  console.log({data})
  return (
   <>
   <Navbar/>
   <Accueil/>
   <Collections
   punchline="blabla"
   collection = "monde d'apres"
   couleur = "rose"
   broderie = "violet"
   prix = "28"
   />
   <Commander/>
   <About/>
   </>
  )
}

export default App
