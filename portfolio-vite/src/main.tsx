import { createRoot } from 'react-dom/client'
import '@/index.css'
import Home from '@/pages/Home.tsx'

import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

createRoot(document.getElementById('root')!).render(
    <div>
        <Navbar />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

            </Routes>
        </BrowserRouter>
        <Footer />
    </div>
)
