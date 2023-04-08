import { Route, Routes } from 'react-router-dom'
import Inicio from './pages/welcome/Inicio'
import Monitor from './pages/PerfilM/Monitor'
import Navbar from './components/navegacion/Navbar'


function App() {
  
  return (
    <>
    <Navbar></Navbar>
    <Routes>
    <Route path='/' element={<Inicio></Inicio>}></Route> 
    <Route path='/Monitor'element={<Monitor></Monitor>}></Route>
    </Routes>
    
    </>
    
  )
}

export default App
