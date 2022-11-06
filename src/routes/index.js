import { Route, Routes } from 'react-router-dom'
import AppHome from '../AppHome'
import Contact from '../components/Contact'
import Dashboard from '../Dashboard'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<AppHome />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
