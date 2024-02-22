import { Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage.tsx'
import { AtelierPage } from './pages/AtelierPage.tsx'
import { ApplyPage } from './pages/ApplyPage.tsx'
import { ProfilePage } from './pages/ProfilePage.tsx'
import { AdminPage } from './pages/AdminPage.tsx'


function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/ateliers" element={<AtelierPage />} />
      <Route path="/postuler" element={<ApplyPage />} />
      <Route path="/profil" element={<ProfilePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="*" element={<h1>404 - Aucune page</h1>} />
    </Routes>
  )
}

export default App