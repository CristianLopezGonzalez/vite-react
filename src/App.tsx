import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./pages/Home.tsx";
import HomeValorant from "./pages/valorant/HomeValorant.tsx";
import HomeMarathon from "./pages/marathon/HomeMarathon.tsx";
import Agents from "./pages/valorant/Agents.tsx";
import Weapons from "./pages/valorant/Weapons.tsx";
import Maps from "./pages/valorant/Maps.tsx";
import Roles from "./pages/valorant/Roles.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop/>
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

export default App