import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import ConfigurationContext from './context/ConfigurationContext'

import './App.css'

class App extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

  render() {
    return (
      <div className="home-container">
        <ConfigurationController />
        <Layout />
      </div>
    )
  }
}

export default App
