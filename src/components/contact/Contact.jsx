import React from 'react'
import './contact.css'
import { AiOutlineMail } from "react-icons/ai"
import { BsWhatsapp, BsLine } from "react-icons/bs"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_b56i57j', 'template_50z926y', form.current, 'qT9xvTdjZmJ8BbHQb')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});

		e.target.reset();
	};

	return (
		<section id='contact'>
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>
			<div className="container contact-container">
				<div className="contact_options">
					<article className="contact_option">
						<AiOutlineMail className='contact_option-icon' />
						<h4>Email</h4>
						<h5>rickychandream@gmail.com</h5>
						<a href='mailto:rickychandream@gmail.com' target='_blank'>Send a message</a>
					</article>
					<article className="contact_option">
						<BsWhatsapp className='contact_option-icon' />
						<h4>Whatsapp</h4>
						<h5>081521515366</h5>
						<a href='https://api.whatsapp.com/send?phone=6281521515366' target='_blank'>Send a message</a>
					</article>
					<article className="contact_option">
						<BsLine className='contact_option-icon' />
						<h4>Line</h4>
						<h5>ricky-chandrean</h5>
						<a href='http://line.me/ti/p/~ricky-chandrean' target='_blank'>Send a message</a>
					</article>
				</div>
				<form ref={form} onSubmit={sendEmail}>
					<input type="text" name='name' placeholder='Enter Full Name' required />
					<input type="text" name='email' placeholder='Enter Email ' required />
					<textarea name="message" rows="7" placeholder="Your Message" required></textarea>
					<button type='submit' className='btn btn-primary'>Send Message</button>
				</form>
			</div>

		</section>
	)
}

export default Contact