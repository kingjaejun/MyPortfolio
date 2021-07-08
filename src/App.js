import './App.css';
import NavMenu from './components/NavMenu';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Router>
      <NavMenu/>
      <Switch>
        <Route exact path="/">
          <Home /> 
        </Route>
        <Route path="/about">
          <About /> 
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
         <Contact />
        </Route> 
      </Switch>  
      <Footer />   
    </Router>
    </>
  );
}

export default App;
