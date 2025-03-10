import Home from "./pages/public/home/Home"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Login from "./pages/public/Login"
import Register from "./pages/public/Register"
import Events from "./pages/public/Events"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init(); 

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/events" element={<Events/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
