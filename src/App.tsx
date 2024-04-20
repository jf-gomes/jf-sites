import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/jf-sites" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
