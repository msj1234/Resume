import React from 'react';

const Contact = () => (
	<div className = 'contact-information'>
		<div className = 'row linkedin'>
			<i className = 'fab fa-linkedin' />
			<a href = 'https://linkedin.com/in/marjonasaid'>linkedin.com/in/marjonasaid</a>
		</div>
		<div className = 'row github'>
			<i className = 'fab fa-github' />
			<a href = 'https://github.com/msj1234'>github.com/msj1234</a>
		</div>
		<div className = 'row email'>
			<i className = 'fas fa-envelope' />
			marjonasj@gmail.com
		</div>
		<div className = 'row home'>
			<i className = 'fas fa-home' />
			Canada
		</div>
	</div>
);

export default Contact;
