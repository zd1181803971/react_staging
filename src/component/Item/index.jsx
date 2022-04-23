import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  // 表示鼠标移入、移出
  state = {
    mouse: false
  }
  // 鼠标移入、移出的回调
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag })
    }
  }
  // 勾选、取消勾选某一个todo的回调
  handleCheck = (id) => {
    const { updateTodo } = this.props
    return (event) => {
      updateTodo(id, event.target.checked)
    }
  }
  // 删除todo
  handleDelete = (id) => {
    if (window.confirm('确定删除吗')) {
      this.props.deleteTodo(id)
    }
  }
  render() {
    const { id, name, done } = this.props
    const { mouse } = this.state
    return (
      <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} style={{ backgroundColor: mouse ? '#ddd' : 'white' }}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
          <span>{name}</span>
        </label>
        <button onClick={() => { this.handleDelete(id) }} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
      </li>
    )
  }
}
