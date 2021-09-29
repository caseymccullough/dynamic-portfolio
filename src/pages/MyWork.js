import projects from '../projects.json';
import Project from '../components/Project/Project';

export default function MyWork() {

	return (
		<div className="my-work">
    
			{ 
         projects.map((prj, id) => <Project project = { prj} key = { id } id= { id }></Project>)
      }

			
		</div>
	)
}