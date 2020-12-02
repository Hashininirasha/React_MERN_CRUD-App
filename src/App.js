import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'; 

import Create from './Components/create.component';
import Edit from './Components/edit.component';
import Index from './Components/index.component';

class app extends Component{
  render(){
    return(
      <Router>
        <div className="container">
          <nav className="nav navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">REACT</Link>
            <div className="collapse navbar-collapse" id="navbarsupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Creat</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Index</Link>
                </li>
              </ul>
            </div>
          </nav><br/>
          <h2>Welcome to REACT CRUD...</h2><br/>
          <switch>
            <Route exact path='/create' Component={Create} />
            <Route exact path='/edit/:id' Component={Edit} />
            <Route exact path='/index' Component={Index} />
          </switch>
        </div>
      </Router>
    );
  }
}
export default App;