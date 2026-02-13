import { createRoot } from 'react-dom/client'
import '@/index.css'
import Home from '@/pages/Home.tsx'

import { BrowserRouter, Routes, Route } from "react-router";
import GreysonNavbar from '@/components/GreysonNavbar.tsx'
import Footer from '@/components/Footer'
import Projects from '@/pages/Projects'
import Resume from '@/pages/Resume'
import About from '@/pages/About'
import Contact from '@/pages/Contact'

createRoot(document.getElementById('root')!).render(
    <div>
        <BrowserRouter>
            <GreysonNavbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </BrowserRouter>
        <Footer />
    </div>
)
