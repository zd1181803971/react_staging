import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {


  handleCleanDone = () => {
    this.props.cleanAllDone()
  }

  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }
  render() {
    const { todos } = this.props
    const total = todos.length
    const doneCount = todos.reduce((pre, current) => pre + (current.done ? 1 : 0), 0)

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={total === doneCount && total > 0} onChange={this.handleCheckAll} />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button onClick={this.handleCleanDone} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
