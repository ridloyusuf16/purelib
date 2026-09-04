import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Header from './component/Header.jsx'
import HeroSection from './home/HeroSection.jsx'
import Footer from './component/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <HeroSection/>
    <Footer/>
  </StrictMode>
)
