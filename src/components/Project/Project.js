
import './Project.css';
import { useEffect } from 'react';

import Aos from 'aos';
import "aos/dist/aos.css";

import GradientBar from './GradientBar';



export default function Project({project, id}) {

 
   useEffect(() => {
   Aos.init({ duration: 2000 })
   }, []);


   const orientation = id % 2 ? "project even" : "project odd"; 
   
   return (
      
		<div className="project-container">
         <div className= {orientation}>   
            <div className="project-img">
               <img src= {require(`../../images/${project.img}`).default} data-aos-offset="200" data-aos= { id % 2 ? "fade-right" : "fade-left" } alt="project"/>
            </div>
            <div className="project-info" data-aos-offset="200" data-aos= { (id + 1) % 2 ? "fade-right" : "fade-left" }>
               <p className= "project-type">{project.category}</p>
               <p className="project-name">{project.name}</p>
               <p className="project-description">{project.description}</p>
               <div className="visit-view-menu">
                  <p>
                     <a href = {project.deployed}>Visit Site </a> | 
                     <a href = {project.github}> View Code </a>
                  </p>
               </div>
            </div>

         </div>
         <GradientBar></GradientBar>
      </div>

	);
}