import react from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Projects from './components/pages/Projects';
import ContactUs from './components/pages/ContactUs';
import AboutUs from './components/pages/AboutUs';
import Career from './components/pages/Career';
import Testi from './components/pages/Testi'
import Social from './components/Social';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/projects' component={Projects} />
          <Route path='/Contact-us' component={ContactUs} />
          <Route path='/About-Us' component={AboutUs} />
          <Route path='/Career' component={Career} />
          <Route path='/Testi' component={Testi} />
          <Route path='/Social' component={Social} />

        </Switch>

      </Router>
    </>
  );
}

export default App;

