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
  addTodo = (todoObj) => {
    const { todos } = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({ todos: newTodos })
  }
  updateTodo = (id, done) => {
    const { todos } = this.state
    const newTodo = todos.map(todoObj => {
      if (todoObj.id === id) {
        return { ...todoObj, done }
      }
      return todoObj
    })
    this.setState({ todos: newTodo })
  }
  deleteTodo = (id) => {
    const { todos } = this.state
    const newTodo = todos.filter(todoObj => todoObj.id !== id)
    this.setState({ todos: newTodo })
  }
  checkAllTodo = (done) => {
    const { todos } = this.state
    const newTodos = todos.map(todo => { return { ...todo, done } })
    this.setState({ todos: newTodos })
  }
  cleanAllDone = () => {
    const { todos } = this.state
    const newTodos = todos.filter(todoObj => !todoObj.done)
    this.setState({ todos: newTodos })

  }
  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} cleanAllDone={this.cleanAllDone} />
        </div>
      </div>
    )
  }
}
