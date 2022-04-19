import React, { Component } from 'react'
import List from './component/List'
import Footer from './component/Footer'
import Header from './component/Header'
import './App.css'

export default class App extends Component {
  state = {
    todos: [
      { id: '001', name: '睡觉', done: true },
      { id: '002', name: '吃饭', done: true },
      { id: '003', name: '打游戏', done: false }
    ]
  }
  render() {
      const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header />
          <List todos={todos}/>
          <Footer />
        </div>
      </div>
    )
  }
}
