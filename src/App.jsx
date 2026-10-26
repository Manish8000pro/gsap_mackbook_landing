import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import ProductViewer from "./components/ProductViewer"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/all"
import Showcase from "./components/Showcase"
import Performance from "./components/Performance"
// import { Features } from "tailwindcss"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Highlights from "./components/Highlights"


gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
        <NavBar></NavBar>
        <Hero></Hero>
        <ProductViewer></ProductViewer>
        <Showcase></Showcase>
        <Performance/>
        <Features></Features>
        <Highlights></Highlights>
        <Footer></Footer>
    </main>
  )
}

export default App
