
import './App.css';
import projects from './projects.json';
import Project from './components/Project/Project';
import NavBar from './components/NavBar/NavBar';



function App() {

  return (
    <div className="App dark">
      <NavBar/>
      {/* <p id="main-header">Projects</p> */}
      { 
         projects.map((prj, id) => <Project project = { prj} key = { id } id= { id }></Project>)
      }
  
  
    </div>
  );
}

export default App;
