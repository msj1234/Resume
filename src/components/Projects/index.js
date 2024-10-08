import React from 'react';

const Projects = () => (
  <article className = 'row'>
		<div className = 'title'>
			<i className = 'fas fa-pencil-ruler' />
			Projects
		</div>
		<div className = 'project'>
			<div className = 'column'>
				<div className = 'title'>
					React Resume App  
				</div>
				<div className = 'github'>
					<a href = 'https://github.com/msj1234/WeatherApp'>github.com/msj1234/WeatherApp</a>
				</div>
			</div>
		</div>
		<div className = 'project'>
			<div className = 'column'>
				<div className = 'title'>
					Sudoku Solver
				</div>
				<div className = 'github'>
					<a href = 'https://github.com/msj1234/Sudoku'>github.com/msj1234/Sudoku</a>
				</div>
			</div>
		</div>
		<div className = 'project'>
			<div className = 'column'>
				<div className = 'title'>
					Linktree Clone
				</div>
				<div className = 'github'>
					<a href = 'https://github.com/msj1234/linktree-clone'>github.com/msj1234/linktree-clone</a>
				</div>
			</div>
		</div>
		
  </article>
);

export default Projects;
