import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

// Components
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './components/NavigationBar'

// Pages
import { Home } from './model/Home'
import { Resume } from './model/Resume'
import { Projects } from './model/Projects'
import { About } from './model/About'
import { Contact } from './model/Contact'

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
        </Switch>
      </div>
    </Router>
  )
}

export default App
