import React, {Component} from 'react';
import './App.css';
import {BrowerRouter as Router,Switch,Route,Link} from 'react-router-dom'; 

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
                  <link to={'/create'} className='nav-link'>Craete</link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </Router>
    )
  }
}