
import './App.css';

import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import MyWork from './pages/MyWork'
import MyInfo from './pages/MyInfo'
import MySkills from './pages/MySkills'
import ContactForm from './pages/ContactForm'
//import Footer from './Components/Footer'



function App() {

  return (
    <div className="App dark">
      <NavBar/>
      <main className="flex-grow flex flex-col w-full">
					<Switch>
						<Route exact path="/" component={MyWork} />
						<Route path="/skills" component={MySkills} />
						<Route path="/info" component={MyInfo} />
						<Route path="/contact" component={ContactForm} />
					</Switch>
				</main>
      {/* <p id="main-header">Projects</p> */}
  
  
  
    </div>
  );
}

export default App;
