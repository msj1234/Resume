import React from 'react';

const Skills = () => (
  <article className = 'row'>
		<div className = 'title'>
			<i className = 'fas fa-star' />
			Skills
		</div>
    <div className = 'skill languages'>
      <div className = 'title'>
        Languages
      </div>
      <ul>
				<li className = 'proficient'>Java</li>
				<li className = 'proficient'>GraphQL</li>
				<li className = 'intermediate'>Python</li>
        <li className = 'intermediate'>HTML/CSS</li>
        <li className = 'intermediate'>JavaScript</li>
				<li className = 'proficient'>C/C# </li>
				<li className = 'proficient'>C++</li>
      </ul>
    </div>
    <div className = 'skill frameworks'>
      <div className = 'title'>
        Frameworks
      </div>
      <ul>
				<li className = 'proficient'>Kubernetes</li>
				<li className = 'proficient'>Docker</li>
				<li className = 'intermediate'>Terraform</li>
				<li className = 'intermediate'>SpringBoot</li>
				<li className = 'proficient'>Git</li>
        <li className = 'proficient'>.NET</li>
      </ul>
    </div>
    <div className = 'skill platforms'>
      <div className = 'title'>
        Platforms
      </div>
      <ul>
        <li className = 'proficient'>GCP</li>
				<li className = 'intermediate'>AWS</li>
      </ul>
      <div className = 'filler' />
      <div className = 'indicators'>
        <div className = 'proficient indicator'>Proficient</div>
				<div className = 'intermediate indicator'>Intermediate</div>
      </div>
    </div>
  </article>
);

export default Skills;
