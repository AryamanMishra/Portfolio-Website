import React from 'react'
import Home from './components/Home/Home'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact';
import Projects from './components/Projects/Projects'
import Footer from './components/Footer'
import Stats from './components/Stats/Stats'


const App = ()=> {
	return (
		<BrowserRouter>
			<main>
				<Navbar />
					<Routes>
						<Route path='/' element={<Home />}/>
						<Route path='/about' element={<About />}/>
						<Route path='/projects' element={<Projects />}/>
						<Route path='/stats' element={<Stats />}/>
						<Route path='/contact' element={<Contact />}/>
					</Routes>
				<Footer />
			</main>	
		</BrowserRouter>
	)
}
export default App
