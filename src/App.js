import 'antd/dist/antd.css';
import './App.css';
import Home from './pages/Home'
import Food from './pages/Food'
import React, { Component } from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
      <Route path='/food' component={Food}></Route>
      <Route path='/home' component={Home}></Route>
      <Redirect from='/' to='/home'></Redirect>
      </Switch>
      </div>
    )
  }
}
