import './App.css';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Contact from './Components/Contact';
import Patients from './Components/Patients';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/patients">
          <Patients/>
        </Route>
      </Router>

    </div>
  );
}

export default App;
