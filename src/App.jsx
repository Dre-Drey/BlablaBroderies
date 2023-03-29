import './App.css';
import Navbar from "./components/Navbar"
import Accueil from './components/Accueil'
import Collections from './components/Collections'
import {data} from './data/data'

function App() {
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
   </>
  )
}

export default App
