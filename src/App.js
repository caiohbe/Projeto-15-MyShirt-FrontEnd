import { Route, Routes, BrowserRouter } from "react-router-dom"
import HomePage from "./components/HomePage.js"
import LoginPage from "./components/LoginPage.js"
import RegisterPage from "./components/RegisterPage.js"
import CheckoutPage from "./components/CheckoutPage.js"
import PerfilPage from "./components/PerfilPage.js"
import GlobalStyle from "./styles/globalStyles.js"
import { useState } from "react"
import UserContext from "./contexts/UserContext.js"
import KartContext from "./contexts/KartContext.js"

function App() {
  const [token, setToken] = useState("")
  const [name, setName] = useState("")
  const [kart, setKart] = useState([])
  return (
    <UserContext.Provider value={token}>
      <KartContext.Provider value={{ kart, setKart }}>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/perfil" element={<PerfilPage />} />
          </Routes>
        </BrowserRouter>
      </KartContext.Provider>
    </UserContext.Provider>
  )
}

export default App;