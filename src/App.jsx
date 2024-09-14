import  { BrowserRouter , Routes , Route } from "react-router-dom"
import './App.css'
import Home from "./Pages/Home/Home"
import List from "./Pages/List/List"
import Hotel from "./Pages/Hotel/Hotel"


function App() {

  return (
    <div className='app'>

      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/Home"  element={<Home/>}/>
          <Route path="/hotels"  element={<List/>}/>
          <Route path="/hotels:id"  element={<Hotel/>}/>
          <Route path="/hotelsSearch"  element={<List/>}/>
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
