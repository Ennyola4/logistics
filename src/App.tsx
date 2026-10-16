import { MotionConfig } from "framer-motion"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

const App = () => (
    <MotionConfig reducedMotion="user">
        <Navbar />
        <Home />
        <Footer />
    </MotionConfig>
)

export default App
