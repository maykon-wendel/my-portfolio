import './App.css'
import { MainContent } from './components/main/mainContent'
import NavBar from './components/navbar/navbar'

import Finnaly from './components/footer/contentFooter'

function App() {

  return (
    <div className='App'>
      <header>
        <NavBar /> 
      </header>
      <main>
        <MainContent />
      </main>
      <footer>
        <Finnaly />
      </footer>
    </div>
  )
}

export default App
