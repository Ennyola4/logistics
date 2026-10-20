import { MotionConfig } from "framer-motion"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import Services from "./pages/Services"
import { Navigate, Route, Routes } from "react-router-dom"
import Faq from "./pages/Faq"
import Blog from "./pages/Blog"

const NotFound = () => (
    <main className="mx-auto min-h-[50vh] max-w-5xl px-5 py-20 text-center">
        <h1 className="text-4xl font-bold text-dark">Page not found</h1>
        <p className="mt-4 text-secondary/75">The page you requested does not exist.</p>
    </main>
)

const App = () => (
    <MotionConfig reducedMotion="user">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/faqs" element={<Faq />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/get-a-quote" element={<Navigate to="/contact" replace />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
    </MotionConfig>
)

export default App
