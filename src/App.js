import react from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Projects from './components/pages/Projects';
import ContactUs from './components/pages/ContactUs';

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
        </Switch>

      </Router>
    </>
  );
}

export default App;

