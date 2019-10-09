import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './css/Index.css';
// import './App.css';
import Nav from './Components/nav';
import HomeComponent from './Pages/home';
import Launchpads from './Pages/launchpads';
import Missions from './Pages/missions';
import Payloads from './Pages/payload';
import NotFoundComponent from './Pages/notFound';
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            component={HomeComponent}
            particle={100}
          ></Route>
          <Route exact path="/launchpads" component={Launchpads}></Route>
          <Route exact path="/missions" component={Missions}></Route>
          <Route exact path="/payload/:id" component={Payloads}></Route>
          <Route component={NotFoundComponent}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
