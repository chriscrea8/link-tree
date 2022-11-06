import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

const Dashboard = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

export default Dashboard
