import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects/Projects'
import Footer from './components/Footer'


const App = ()=> {
	return (
		<BrowserRouter>
			<main>
				<Navbar />
				<Routes>
					<Route path='/' Component={Home}/>
					<Route path='/about' Component={About}/>
					<Route path='/projects' Component={Projects}/>
					<Route path='/contact' Component={Contact}/>
				</Routes>
				<Footer />
			</main>	
		</BrowserRouter>
	)
}
export default App
