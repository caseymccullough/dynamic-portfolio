
import './MyInfo.css';

import { useLayoutEffect } from 'react'
import Aos from 'aos'
import torontoImage from '../images/toronto-car.jpg'

export default function MyInfo() {

	useLayoutEffect(() => {
		Aos.init({ duration: 2000 })
	}, [])

	return (
		<div className="about-me">
         
         <div className="image-plus-caption">
            <img 
               className="about-me-img"
               src={torontoImage}
               alt="sitting on a car planter" 
               width="500"    
            ></img>

            <div id="personal-description-container">
               <h1>About Me</h1>
               <p className="personal-description">I am a fullstack developer with a focus on React and 25 years experience with the Java language. I write clean and efficient code and pride myself on my communication and management skills.</p>
               <p className="personal-description"> I have applied my talents as a developer and educator to help resolve some of the great challenges confronting society. Whether climate change or inequality of opportunity, I hope to engage in work that leaves the world a better place than I found it.</p>
            </div>
         </div>
			
		</div>
	)
}
