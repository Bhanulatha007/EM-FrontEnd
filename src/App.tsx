import './App.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import LoginPage from './pages/auth/LoginPage'
function App() {
  

  return (
    <>
      <div>
        <Navbar />
        <h1>Vite + Reactssss</h1>
        <LoginPage />
        <Footer />
      </div>
    </>
  )
}

export default App
