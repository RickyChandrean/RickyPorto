import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
const Experience = () => {
	return (
		<section id='experience'>
			<h5>What Skills I Have</h5>
			<h2>My Experience</h2>

			<div className="container experience_container">
				<div className="experience-frontend">
					<h3>Frontend Development</h3>
					<div className="experience_content">
						<article className='experience_detail'>
							<BsPatchCheckFill className='experience_detail-icons' />
							<div>
								<h4>HTML</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
						<article className='experience_detail'>
							<BsPatchCheckFill className='experience_detail-icons' />
							<div><h4>CSS</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
						<article className='experience_detail'>
							<BsPatchCheckFill className='experience_detail-icons' />
							<div>
								<h4>Bootstrap</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
						<article className='experience_detail'>
							<BsPatchCheckFill className='experience_detail-icons' />
							<div>
								<h4>javascript</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
					</div>
				</div>
				<div className="experience-frontend">
					<h3>Backend Development </h3>
					<div className="experience_content">
						<article className='experience_detail'>
							<BsPatchCheckFill className='experience_detail-icons' />
							<div>
								<h4>Node Js</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
						<article className='experience_detail'>
							<BsPatchCheckFill className='experience_detail-icons' />
							<div>
								<h4>PHP</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
						<article className='experience_detail'>
							<BsPatchCheckFill className='experience_detail-icons' />
							<div>
								<h4>MySQL</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
						<article className='experience_detail'>
							<BsPatchCheckFill className='experience_detail-icons' />
							<div>
								<h4>Java</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
						<article className='experience_detail'>
							<BsPatchCheckFill className='experience_detail-icons' />
							<div>
								<h4>C#</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
					</div>
				</div>
				<div className="experience-frontend">
					<h3>Other Skills Learned</h3>
					<div className="experience_content">
						<article className='experience_detail'>
							<BsPatchCheckFill className='experience_detail-icons' />
							<div>
								<h4>Python</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
						<article className='experience_detail'>
							<BsPatchCheckFill className='experience_detail-icons' />
							<div>
								<h4>Figma UI/UX</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
						<article className='experience_detail'><BsPatchCheckFill className='experience_detail-icons' />
							<div>
								<h4>C</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
						<article className='experience_detail'><BsPatchCheckFill className='experience_detail-icons' />
							<div>
								<h4>Cisco</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
						<article className='experience_detail'><BsPatchCheckFill className='experience_detail-icons' />
							<div>
								<h4>Blender</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
						<article className='experience_detail'><BsPatchCheckFill className='experience_detail-icons' />
							<div>
								<h4>C++</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Experience