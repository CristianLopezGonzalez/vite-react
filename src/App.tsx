import {lazy, Suspense} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar.tsx"
import Footer from "./components/Footer.tsx"
import ScrollToTop from "./components/ScrollToTop.tsx"

const Home = lazy(() => import('./pages/Home.tsx'))
const HomeValorant = lazy(() => import('./pages/valorant/HomeValorant.tsx'))
const HomeMarathon = lazy(() => import('./pages/marathon/HomeMarathon.tsx'))
const Agents = lazy(() => import('./pages/valorant/Agents.tsx'))
const Weapons = lazy(() => import('./pages/valorant/Weapons.tsx'))
const Maps = lazy(() => import('./pages/valorant/Maps.tsx'))
const Roles = lazy(() => import('./pages/valorant/Roles.tsx'))

const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop/>
            <Navbar/>
            <Suspense fallback={<div style={{padding: '2rem', textAlign: 'center'}}>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/valorant" element={<HomeValorant/>}/>
                    <Route path="/valorant/agents" element={<Agents/>}/>
                    <Route path="/valorant/weapons" element={<Weapons/>}/>
                    <Route path="/valorant/maps" element={<Maps/>}/>
                    <Route path="/valorant/roles" element={<Roles/>}/>
                    <Route path="/marathon" element={<HomeMarathon/>}/>
                </Routes>
            </Suspense>
            <Footer/>
        </BrowserRouter>
    )
}

export default App