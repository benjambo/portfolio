import React from 'react'
import './App.css'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './model/Home'
import { Resume } from './model/Resume'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
      </Switch>
    </Router>
  )
}

export default App
