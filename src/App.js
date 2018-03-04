import React, { Component } from 'react';
import { Link, Switch, Route} from 'react-router-dom'; 
import './CSS/App.css';
import NeighborGood from './components/neighborGood'
import Home from './components/Home/Home.js'

class App extends Component {
  render() {
    return (
      <div >
      <nav>
          <Link to='/'>Home</Link>{" "}
          <Link id='Map' to='/NeighborGood/Map'>Map</Link>{" "}
          <Link to='/NeighborGood/Feed'>Feed</Link>
        </nav>
      
        <Switch>
          <Route  exact path='/' component={Home}/>
          <Route path='/NeighborGood' component={NeighborGood}/>
        </Switch>
        </div>
      // </div>
    );
  }
}

export default App;
