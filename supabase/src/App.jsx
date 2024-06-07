
import './App.css'
import Home from './Components/Pages/Home'
import MyCreate from './Components/Pages/MyCreate'
import Update from './Components/Pages/Update'
import Navbar from './Components/Navbar/Navbar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<MyCreate/>}/>
          <Route path='/:id' element={<Update/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App
