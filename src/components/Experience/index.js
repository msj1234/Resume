import React from 'react';

const Experience = () => (
	<article className = 'row'>
		<div className = 'title'>
			<i className = 'fas fa-briefcase' />
			Experience
		</div>
		<div className = 'job'>
			<div className = 'header'>
				<div className = 'title'>
				Part-Time Software Developer - Student-Worker
				</div>
				<div className = 'date'>
					<div className = 'from'>
						Sep 2023
					</div>
					<div className = 'to'>
						Present
					</div>
				</div>
			</div>
			<div className = 'employer'>
				Trackunit Inc
			</div>
			<ul>
				<li>
					Acquired and applied skills in GraphQL and REST APIs to understand their architecture, 
					leading to improved backend performance and enhanced security measures.
				</li>
				<li>
					Transformed API calls into a unified GraphQL endpoint, improving data efficiency and security, 
					which resulted in a reduction in data over-fetching and an improvement in API response times.
				</li>
				<li>
					Managed the development team’s GitHub to ensure code consistency and version control, contributing to a 
					40% decrease in merge conflicts and an increase in deployment frequency.
				</li>
				<li>
					Employed DevOps methodologies to maintain uniformity with company standards, 
					streamlining development processes and achieving a 20% faster turnaround for feature releases.
				</li>
			</ul>
		</div>
		<div className = 'job'>
			<div className = 'header'>
				<div className = 'title'>
					Software Development Intern
				</div>
				<div className = 'date'>
					<div className = 'from'>
						May 2022
					</div>
					<div className = 'to'>
						Aug 2023
					</div>
				</div>
			</div>
			<div className = 'employer'>
				Trackunit Inc
			</div>
			<ul>
				<li>
					Led initiatives to create application environments in Google Cloud Platform, utilizing 
					provisioning architectures and integrating CI/CD pipelines to improve deployment efficiency, 
					resulting in a faster go-to-market for new features.
				</li>
				<li>
					Implemented security measures to authenticate APIs through a gateway using Ocelot, bolstering 
					system security by creating a centralized point for authentication. This initiative significantly 
					reduced potential security vulnerabilities, ensuring secure data transactions and enhancing trust 
					in our platform's reliability.
				</li>
				<li>
					Successfully migrated the software platform from Google Cloud Platform to Amazon Web Services and
					enhanced platform security using advanced software tools, which increased system reliability and 
					reduced operational costs.
				</li>
				<li>
					Regularly migrated and monitored Kubernetes clusters in both GCP and AWS, lowering kubectl costs 
					and CPU usage in applications' Kubernetes clusters by optimizing resource allocation and 
					scaling strategies, which enhanced application performance, reducing operational expenses.
				</li>
			</ul>
		</div>
		<div className = 'job'>
			<div className = 'header'>
				<div className = 'title'>
					Vice President of Events & Educationals
				</div>
				<div className = 'date'>
					<div className = 'from'>
						June 2023
					</div>
					<div className = 'to'>
						Present
					</div>
				</div>
			</div>
			<div className = 'employer'>
				Women+ In Technology Society, Western University
			</div>
			<ul>
				<li>
					Led and managed a team of Directors, overseeing tasks and providing guidance to ensure 
					the successful execution of all events, which led to an increase in overall event 
					quality and participant satisfaction.
				</li>
				<li>
					Orchestrated a range of technology-based events and panels, involving speaker recruitment, 
					event planning, and coordination, resulting in a 50% increase in event attendance.
				</li>
				<li>
					Mentored at the SheHacks hackathon, guiding participants through project development, which 
					contributed to an increase in completed projects and positive participant feedback.
				</li>
			</ul>
		</div>
		<div className = 'job'>
			<div className = 'header'>
				<div className = 'title'>
					Director of Events & Educationals
				</div>
				<div className = 'date'>
					<div className = 'from'>
						Sep 2022
					</div>
					<div className = 'to'>
						May 2023
					</div>
				</div>
			</div>
			<div className = 'employer'>
				Women+ In Technology Society, Western University
			</div>
			<ul>
			</ul>
		</div>
	
  </article>
);

export default Experience;
