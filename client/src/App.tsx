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
import AccountSetup from "./pages/private/accountSetup/AccountSetup"
import ChooseDietPlan from "./pages/private/accountSetup/ChooseDietPlan"
import { AuthProvider } from "./providers/AuthProvider"

AOS.init();

function App() {

  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/account-setup" element={<AccountSetup />}></Route>
          <Route path="/account-setup/choose-diet-plan" element={<ChooseDietPlan />}></Route>
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  )
}

export default App
