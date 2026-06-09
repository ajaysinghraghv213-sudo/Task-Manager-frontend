import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Tasks from "./pages/Tasks"
import TaskDetail from "./pages/TaskDetail"
import Registeration from "./pages/Registeration"
import Login from "./pages/Login"
import Calendar from "./pages/Calendar"
import Settings from "./pages/Settings"
import Forget from "./pages/Forget"
import {useEffect} from 'react'
import PrivateRoutes from "./components/PrivateRoutes"


const App = () =>{

  const access = localStorage.getItem('access')
  useEffect(()=>{
       const savedTheme= localStorage.getItem("theme")
       if(savedTheme==='dark'){
        document.documentElement.classList.add('dark')
       }else {

        document.documentElement.classList.remove('dark');
    }
    },[])

  return (
    <div>
      {access && <Navbar />}
      <Routes>
        <Route path='/' element={<PrivateRoutes><Home /></PrivateRoutes>} />
        <Route path='/tasks' element={<PrivateRoutes><Tasks /></PrivateRoutes>} />
        <Route path='/taskDetail/:id/' element={<PrivateRoutes><TaskDetail /></PrivateRoutes>} />
        <Route path='/registeration' element={<Registeration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/calendar' element={<PrivateRoutes><Calendar /></PrivateRoutes>} />
        <Route path='/settings' element={<PrivateRoutes><Settings /></PrivateRoutes>} />
        <Route path='/forget' element={<PrivateRoutes><Forget /> </PrivateRoutes>} />
      </Routes>
      
    </div>
  )
}
export default App