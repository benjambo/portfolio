import React from 'react'
import './App.css'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { NavigationBar } from './components/NavigationBar'
import { Home } from './model/Home'
import { Resume } from './model/Resume'
import { Projects } from './model/Projects'
import { About } from './model/About'
import { Contact } from './model/Contact'
import { SignIn } from './model/SignIn'
import { SignUp } from './model/SignUp'

const App = () => {

  return (
    <Router>
      <div>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
