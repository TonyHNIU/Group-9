import React from 'react'
import Navbar from './components/Drawer/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import home from './pages/Home'
import goals from './pages/Goal'
import questionnaire from './pages/Questionnaire/Questionnaire'
import './App.css'

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component={home} />
          <Route path='/goals' component={goals} />
          <Route path='/questionnaire' component={questionnaire} />
        </Switch>
    </Router>
    </>
  )
}

export default App
