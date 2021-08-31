
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import './NavBar.css'

export default function NavBar() {

   useEffect(() => {
		Aos.init({ duration: 1200 })
	}, [])

	return (
      <div id="nav-bar" data-aos-once="true" data-aos="slide-down">
				
				<div className="left-side">
					<Link to="/">
						<p className="nav-name link">Casey McCullough</p>
					</Link>

					<div className="left-side-links">
						<Link to="/">
							<p className="link">My Work</p>
						</Link>
						<Link to="/skills">
							<p className="link">My Skills</p>
						</Link>
						<Link to="/info">
							<p className="link">My Info</p>
						</Link>
					</div>
				</div>

				<div className="right-side">
					<a className="linked-in link" href="https://www.linkedin.com/in/casey-mccullough-5905953/" target="_blank" rel="noopener noreferrer">
						<i className="devicon-linkedin-plain devicon"></i>
					</a>
					<a className="link" href="https://github.com/caseymccullough" target="_blank" rel="noopener noreferrer">
						<i className="devicon-github-original devicon"></i>
					</a>
					<button className="contact-btn">
						<Link
							to="/contact"
							className="link">
							Contact
						</Link>
					</button>
      </div>
	</div>

	);
}