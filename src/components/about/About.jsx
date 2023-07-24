import React from 'react'
import './about.css'
import me from "../../Assets/fotoprofile.png"
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
const About = () => {
	return (
		<section id='about'>
			<h5>Get to Know</h5>
			<h2>About Me</h2>

			<div className="container about_container">
				<div className="about_me">
					<div className="about_me-img">
						<img src={me} alt="About_image" />
					</div>
				</div>

				<div className="about_content">
					<div className="about_cards">
						<article className="about_card">
							<FaAward className='about_icon' />
							<h5>Experience</h5>
							<small>1+ Years</small>
						</article>
						<article className="about_card">
							<VscFolderLibrary className='about_icon' />
							<h5>Projects</h5>
							<small>10+ Completed</small>
						</article>
					</div>

					<p>
						I'm a undergraduate Information Technology from President University. I am highly motivated and passionate
						with a burning passion for Web Development. I have a strong understanding in both fron-end and backend programming
						languages such as HTML, CSS, Javascript, PHP and MySQL. I have experience in database management and computer networking.
						Currently i'm passionate in developing my skills and experience in web development by learning ASP.NET
					</p>

					<a href='#contact' className='btn btn-primary'>
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	)
}

export default About