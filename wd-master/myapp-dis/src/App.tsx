import React from 'react'
import Router from './router/router'
import './App.css'
import { WDStart } from './components'
import WithRouter from './components/HOC/WithRouter'
const App: React.FC = () => {
  return <div>
    <Router></Router>
    <WDStart></WDStart>
  </div>
}

export default  WithRouter(App)