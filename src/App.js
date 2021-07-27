import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import home from './components/pages/home'
import Services from './components/pages/Services'
import Products from './components/pages/Product'
import SignUp from './components/pages/SignUp.js'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/'exact component={home}/>
          <Route path="/services" component={home}/*{Services}*//>
          <Route path="/products" component={home}/*{Products}*//>
          <Route path="/sign-up" component={home}/*{SignUp}*//>
        </Switch>
      </Router>
    </>
  )
}

export default App;