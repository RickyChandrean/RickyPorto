import React from 'react'
import './porto.css'
import imgkos from '../../Assets/kosbujang.jpg'
import clinic from '../../Assets/cliniconline.png'
import jadwal from '../../Assets/Jadwal.jpg'
//eslint - disable - next - line

const Porto = () => {
	return (
		<section id='Portofolio'>
			<h5>My recent Work</h5>
			<h2>Portofolio</h2>

			<div className="container porto_container">
				<article className='porto_item'>
					<div className="porto_item-img">
						<img src={imgkos} alt='kosbujang.img' />
					</div>
					<h3>Kos Bujang</h3>
					<div className="porto_item-cta">
						<a href='https://github.com/RickyChandrean/Boarding-House-Project' className='btn' target='_blank'>Github</a>
						<a href='https://drive.google.com/file/d/1NVQOIFj1DvwBBFEHIW7FZn5KaSb5Ax65/view?usp=sharing' className='btn btn-primary' target='_blank'>Live Demo</a>
					</div>
				</article>
				<article className='porto_item'>
					<div className="porto_item-img">
						<img src={clinic} alt='ClinicOnline.img' />
					</div>
					<h3>Clinic Online</h3>
					<div className="porto_item-cta">
						<a href='https://github.com/RickyChandrean/Pharmo' className='btn' target='_blank'>Github</a>
						<a href='https://drive.google.com/file/d/1wd_OHgC7sMBANkD4lsWSn3lJxbmPpzEU/view?usp=sharing' className='btn btn-primary' target='_blank'>Live Demo</a>
					</div>
				</article>
				<article className='porto_item'>
					<div className="porto_item-img">
						<img src={jadwal} alt='AplikasiJadwal.img' />
					</div>
					<h3>Porto Title</h3>
					<div className="porto_item-cta">
						<a href='https://github.com/RickyChandrean/Aplikasi-Jadwal' className='btn' target='_blank'>Github</a>
						<a href='https://drive.google.com/file/d/1-p4nwEKNicr8mQTOQMCMppMtNV1cPFWz/view?usp=sharing ' className='btn btn-primary' target='_blank'>Live Demo</a>
					</div>
				</article>

			</div>
		</section>
	)
}

export default Porto