import { Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage.tsx'
import { AtelierPage } from './pages/AtelierPage.tsx'


function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/ateliers" element={<AtelierPage />} />
    </Routes>
  )
}

export default App