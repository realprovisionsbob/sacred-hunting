import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BeginnerMenPage from './pages/BeginnerMenPage'
import BeginnerWomenPage from './pages/BeginnerWomenPage'
import ExperiencedHuntersPage from './pages/ExperiencedHuntersPage'
import VeteranImmersionsPage from './pages/VeteranImmersionsPage'
import AlumniPage from './pages/AlumniPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <div className="min-h-screen bg-earth-dark">
      <ScrollToTop />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/beginner-men" element={<BeginnerMenPage />} />
          <Route path="/beginner-women" element={<BeginnerWomenPage />} />
          <Route path="/experienced-hunters" element={<ExperiencedHuntersPage />} />
          <Route path="/veteran-immersions" element={<VeteranImmersionsPage />} />
          <Route path="/alumni" element={<AlumniPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App