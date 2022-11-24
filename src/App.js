import { Route, Routes, BrowserRouter } from "react-router-dom"
import HomePage from "./components/HomePage.js"
import LoginPage from "./components/LoginPage.js"
import RegisterPage from "./components/RegisterPage.js"
import CheckoutPage from "./components/CheckoutPage.js"
import PerfilPage from "./components/PerfilPage.js"
import GlobalStyle from "./styles/globalStyles.js"
import { useState } from "react"
import UserContext from "./contexts/UserContext.js"

function App() {
  const [token, setToken] = useState("")
  const [name, setName] = useState("")

  return (
    <UserContext.Provider value={token}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage setToken={setToken} setName={setName}/>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/perfil" element={<PerfilPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App;