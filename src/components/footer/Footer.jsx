import React from 'react'
import './footer.css'
import { BsInstagram, BsGithub, BsLine } from 'react-icons/bs'
const Footer = () => {
	return (
		<footer>
			<a href='#' className="footer_logo">Ricky</a>
			<ul className='permalinks'>
				<li><a href='#'>Home</a></li>
				<li><a href='#About'>About</a></li>
				<li><a href='#experience'>Experience</a></li>
				<li><a href='#porto'>Portofolio</a></li>
				<li><a href='#contact'>Contact</a></li>
			</ul>
			<div className="footer_socials">
				<a href='https://www.instagram.com/gouw_rickyc/' target='_blank'><BsInstagram /></a>
				<a href='https://github.com/RickyChandrean' target='_blank'><BsGithub /></a>
				<a href='http://line.me/ti/p/~ricky-chandrean' target='_blank'><BsLine /></a>
			</div>
		</footer>
	)
}

export default Footer