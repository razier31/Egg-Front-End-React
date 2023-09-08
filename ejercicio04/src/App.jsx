import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Home01 } from './components/Home01'
import { Home02 } from './components/Home02'

function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' Component={Home01}/>
        <Route path='/2' Component={Home02}/>
      </Routes>
    </>
  )
}

export default App
