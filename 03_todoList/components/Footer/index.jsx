import React, { Component } from 'react'
import root from './index.module.css'

export default class Footer extends Component {
  render() {
    const { todos, clearSelected, allSelected } = this.props
    const doneCount = todos.reduce((pre, cur) =>  pre + (cur.done ? 1 : 0), 0)
    // default 只能用一次
    return (
      <div>
        <label>
            <input type="checkbox" checked={doneCount === todos.length} onChange={(e) => {
                allSelected(e.target.checked)
            }} />
        </label>
        <span>
            <span>{`已完成 ${doneCount}`}</span> {`/ 全部 ${todos.length} `}
        </span>
        <button className={root.btn} onClick={() => clearSelected()}>clear selected tasks</button>
      </div>
    )
  }
}
