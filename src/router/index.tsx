import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import HomeValorant from '../pages/valorant/HomeValorant'
import HomeMarathon from '../pages/marathon/HomeMarathon'
import Agents from '../pages/valorant/Agents'
import Weapons from '../pages/valorant/Weapons'
import Maps from '../pages/valorant/Maps'
import Roles from '../pages/valorant/Roles'

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/valorant" element={<HomeValorant />} />
                <Route path="/valorant/agents" element={<Agents />} />
                <Route path="/valorant/weapons" element={<Weapons />} />
                <Route path="/valorant/maps" element={<Maps />} />
                <Route path="/valorant/roles" element={<Roles />} />
                <Route path="/marathon" element={<HomeMarathon />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router