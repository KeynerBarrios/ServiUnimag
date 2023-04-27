import { Route, Router, Routes } from 'react-router-dom'
import Inicio from './pages/welcome/Inicio'
import Monitor from './pages/PerfilM/Monitor'
import Navbar from './components/navegacion/Navbar'
import Estudiante from './pages/login/Estudiante'
import Monitor1 from './pages/login/Monitor1'
import NavbarP from './components/navegacion/NavbarP'
import MonitorPe from './pages/monitoP/MonitorPe'
import AgregarM from './pages/agregarm/AgregarM'

function App() {
  
  return (
    <>
    <AgregarM></AgregarM>
    <Routes>
      {/* <Route path='/EStudiantes' element={<Estudiante></Estudiante>}></Route>
      <Route path='/Monitor' element={<Monitor1></Monitor1>}></Route>
      <Route path='/' element={<Inicio></Inicio>}></Route>  */}
      {/* <Route path='/' element={<Monitor></Monitor>}></Route> */}
    </Routes>
    
    </>
    
  )
}

export default App
