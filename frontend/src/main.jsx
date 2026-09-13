import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Header from './component/Header.jsx'
import Footer from './component/Footer.jsx'
import HomePage from './pages/Home/HomePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <HomePage/>
    <Footer/>
  </StrictMode>
)
