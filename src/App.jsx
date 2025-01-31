import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Signin from './pages/Signin' 
import Signup from './pages/Signup' 
import { ToastContainer } from 'react-toastify'
import Referrals from './pages/Referrals'

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/referrals" element={<Referrals />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
