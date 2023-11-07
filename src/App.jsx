
import { About } from './Components/About/About';
import { Contact } from './Components/Contact/Contact';
import { Experience } from './Components/Experience/Experience';
import { Header } from './Components/Header/Header';
import { Nav } from './Components/Nav/Nav';
import { Projects } from './Components/Projects/Projects';

const App = () => {
  return (
    <div className="App">
     <Header/>
     <Nav />
     <About/>
     
     
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
