import {lazy, Suspense} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar.tsx"
import Footer from "./components/Footer.tsx"
import ScrollToTop from "./components/ScrollToTop.tsx"

const Home = lazy(() => import('./pages/Home.tsx'))

const HomeValorant = lazy(() => import('./pages/valorant/HomeValorant.tsx'))
const ValorantAgents = lazy(() => import('./pages/valorant/Agents.tsx'))
const ValorantWeapons = lazy(() => import('./pages/valorant/Weapons.tsx'))
const ValorantMaps = lazy(() => import('./pages/valorant/Maps.tsx'))
const ValorantRoles = lazy(() => import('./pages/valorant/Roles.tsx'))

const HomeMarathon = lazy(() => import('./pages/marathon/HomeMarathon.tsx'))
const MarathonRunners = lazy(() => import('./pages/marathon/Runners.tsx'))
const MarathonWeapons = lazy(() => import('./pages/marathon/Weapons.tsx'))
const MarathonAbilities = lazy(() => import('./pages/marathon/RunnerAbilities.tsx'))
const MarathonFactions = lazy(() => import('./pages/marathon/Factions.tsx'))

const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop/>
            <Navbar/>
            <Suspense fallback={<div style={{padding: '2rem', textAlign: 'center'}}>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home/>}/>

                    <Route path="/valorant" element={<HomeValorant/>}/>
                    <Route path="/valorant/agents" element={<ValorantAgents/>}/>
                    <Route path="/valorant/weapons" element={<ValorantWeapons/>}/>
                    <Route path="/valorant/maps" element={<ValorantMaps/>}/>
                    <Route path="/valorant/roles" element={<ValorantRoles/>}/>

                    <Route path="/marathon" element={<HomeMarathon/>}/>
                    <Route path="/marathon/runners" element={<MarathonRunners/>}/>
                    <Route path="/marathon/weapons" element={<MarathonWeapons/>}/>
                    <Route path="/marathon/runner-abilities" element={<MarathonAbilities/>}/>
                    <Route path="/marathon/factions" element={<MarathonFactions/>}/>
                </Routes>
            </Suspense>
            <Footer/>
        </BrowserRouter>
    )
}

export default App