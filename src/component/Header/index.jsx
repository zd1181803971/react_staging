import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'
export default class Header extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  // 键盘事件的回调
  handleKeyUp = (event) => {
    const { key, target } = event
    if (key !== 'Enter') return
    if (target.value.trim() === '') {
      alert('not null')
      return
    }
    const todo = { id: nanoid(), name: target.value, done: false }
    this.props.addTodo(todo)
    target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
