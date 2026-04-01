import './App.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import LoginPage from './pages/auth/LoginPage'
import Herosection from './pages/homepage/Herosection'
function App() {
  

  return (
    <>
      <div>
        <Navbar />
        <Herosection />
        <LoginPage />
        <Footer />
      </div>
    </>
  )
}

export default App
