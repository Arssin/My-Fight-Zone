import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Welcome } from './components/Welcome/Welcome'
import { NavigationBar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { Blog } from './components/Blog/Blog'
import { Home } from './components/Home/Home'
import { Archive } from './components/Archive/Archive'
import { Contact } from './components/Contact/Contact'
import './App.scss'

function App() {
    return (
        <div className="App">
            <NavigationBar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/archive" element={<Archive />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    )
}

export default App
