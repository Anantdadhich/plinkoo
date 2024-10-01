import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Simulation from "./pages/Simulation"
import Game from "./pages/Game"


function App() {
 

  return (
       <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home></Home>}></Route>
                 <Route path="/simulation" element={<Simulation></Simulation>}></Route>
                        <Route path="/game" element={<Game></Game>}></Route>
       </Routes>
       
       </BrowserRouter>
  )
}

export default App
