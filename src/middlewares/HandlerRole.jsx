import HomeM from "../pages/homeM/HomeM";
import Inicio from "../pages/welcome/Inicio";
localStorage.setItem("role","STUDENT") 
export const HandlerRole = ({currentRoute}) => {
  const currentRole = localStorage.getItem('role'); 
  const determinateComponentByRole = () => {
    //tenemos x roles -> 2 'STUDENT' AND 'MONITOR'. 
    switch(currentRoute) {
      case 'inicio':
            return currentRole === 'STUDENT' ? <Inicio/> : <HomeM/>; 
      default:
        return null;
    }
  }
  return (determinateComponentByRole());
}
