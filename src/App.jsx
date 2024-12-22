import { BrowserRouter } from "react-router-dom"
import Header from './components/header/Header'
import AppRoutes from './Routes'
import Footer from "./components/footer/Footer" 


function App() {

  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
