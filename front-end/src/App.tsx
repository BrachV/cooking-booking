import { Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage.tsx'
import { AtelierPage } from './pages/AtelierPage.tsx'
import { ApplyPage } from './pages/ApplyPage.tsx'


function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/ateliers" element={<AtelierPage />} />
      <Route path="/postuler" element={<ApplyPage />} />
    </Routes>
  )
}

export default App