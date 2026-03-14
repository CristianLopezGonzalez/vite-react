import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import HomeValorant from '../pages/valorant/HomeValorant'
import HomeMarathon from '../pages/marathon/HomeMarathon'

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/valorant" element={<HomeValorant />} />
                <Route path="/marathon" element={<HomeMarathon />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router