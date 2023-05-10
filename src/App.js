import React from 'react'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects/Projects'

const App = ()=> {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' Component={Home}/>
				<Route path='/about' Component={About}/>
				<Route path='/projects' Component={Projects}/>
				<Route path='/contact' Component={Contact}/>
			</Routes>
			<Footer />
		</BrowserRouter>	
	)
}
export default App
