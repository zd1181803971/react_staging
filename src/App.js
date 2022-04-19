import React, { Component } from 'react'
import List from './component/List'
import Footer from './component/Footer'
import Header from './component/Header'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header />
          <List />
          <Footer />
        </div>
      </div>
    )
  }
}
