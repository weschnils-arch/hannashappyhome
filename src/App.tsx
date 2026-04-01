import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import InstagramBubble from './components/InstagramBubble'
import Home from './pages/Home'
import Rezepte from './pages/Rezepte'
import UeberMich from './pages/UeberMich'
import RecipeDetail from './pages/RecipeDetail'
import Hausgemachtes from './pages/Hausgemachtes'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AppShell() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rezepte" element={<Rezepte />} />
        <Route path="/rezepte/:slug" element={<RecipeDetail />} />
        <Route path="/hausgemachtes" element={<Hausgemachtes />} />
        <Route path="/ueber-mich" element={<UeberMich />} />
      </Routes>
      <Footer />
      <InstagramBubble />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}
