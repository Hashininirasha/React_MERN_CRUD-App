import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'; 

import Create from './Components/create.component';
import Edit from './Components/edit.component';
import Index from './Components/index.component';

class App extends Component{
  render(){
    return(
      <Router>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link to={'/'} className='navbar-brand'>React Crud Example</Link>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                  <link to={'/'} className='nav-link'>HOME</link>
                </li>
                <li className='nav-item'>
                  <link to={'/create'} className='nav-link'>Create</link>
                </li>
                <li className='nav-item'>
                  <link to={'/index'} className='nav-link'>index</link>
                </li>
              </ul>
            </div>
          </nav>
        
        <h2>Welcome to React Crud 🤔👧</h2>
        <switch>
          <Route exact path = '/create' component = {Create} />
          <Route exact path = '/edit/:id' component = {Edit} />
          <Route exact path = '/index' component = {Index} />
        </switch>
        </div>
      </Router>
    );
  }
}

export default App;