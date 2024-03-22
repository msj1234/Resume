import React from 'react';

const Education = () => (
  <article className = 'row'>
		<div className = 'title'>
			<i className = 'fas fa-graduation-cap' />
			Education
		</div>
    <div className = 'degree'>
      <div className = 'column'>
        <div className = 'title'>
        BSc in <span>Computer Science</span> with
          Specialization
        </div>
        <div className = 'institute'>
          Western University, London, ON, CA
        </div>
      </div>
      <div className = 'column'>
        <div className = 'date'>
          <div className = 'from'>
            Sep 2019
          </div>
          <div className = 'to'>
            Apr 2024
          </div>
        </div>
      </div>
    </div>
  </article>
);

export default Education;
