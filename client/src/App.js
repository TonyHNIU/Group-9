import React from 'react'
import Navbar from './components/Drawer/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import profile from './pages/Profile'
import team from './pages/Team'
import company from './pages/Company'
import './App.css'

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component={profile} />
          <Route path='/team' component={team} />
          <Route path='/company' component={company} />
        </Switch>
    </Router>
    </>
  )
}

export default App
