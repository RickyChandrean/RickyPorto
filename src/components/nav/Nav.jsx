import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineFile, AiOutlineMessage } from 'react-icons/ai'
import { useState } from 'react'
const Nav = () => {
	const [activeNav, setActiveNav] = useState('#')
	return (
		<nav>
			<div className="testing">
				<a href="#" className={activeNav === "#" ? 'active' : ''} ><AiOutlineHome /></a>
				<span>Home</span>
			</div>
			<div className="testing">
				<a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? 'active' : ''}><AiOutlineUser /></a>
				<span>About</span>
			</div>
			<div className="testing">
				<a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? 'active' : ''}><AiOutlineProject /></a>
				<span>Experience</span>
			</div>
			<div className="testing">
				<a href="#Portofolio" onClick={() => setActiveNav("#Portofolio")} className={activeNav === "#Portofolio" ? 'active' : ''}><AiOutlineFile /></a>
				<span>Portofolio</span>
			</div>
			<div className="testing">
				<a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? 'active' : ''}><AiOutlineMessage /></a>
				<span>Contact</span>
			</div>
		</nav>
	)
}

export default Nav