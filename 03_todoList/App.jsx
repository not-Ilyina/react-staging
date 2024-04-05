import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default class App extends Component {
  // 状态在哪，操作状态的方法就在那里
  state = {
    todos: [
      { id: '001', name: 'eat', done: true },
      { id: '002', name: 'sleep', done: true },
      { id: '003', name: 'hit node', done: false }
    ]
  }
  handleInput = (val) => {
    const { todos } = this.state
    this.setState({
      todos: [val, ...todos]
    })
  }
  updateTodos = (id, done) => {
    const { todos } = this.state
    const newTodos = todos.map(e => {
      if (e.id === id) return {...e, done}
      else return e
    })
    this.setState({
      todos: newTodos
    })
  }
  deleteTodo = id => {
    const { todos } = this.state
    const newTodos = todos.filter(e => {
      return e.id !== id
    })
    this.setState({
      todos: newTodos
    })
  }
  clearSelected = () => {
    const { todos } = this.state
    const newTodos = todos.filter(e => !e.done)
    this.setState({
      todos: newTodos
    })
  }
  allSelected = allSeleted => {
    const { todos } = this.state
    const newTodos = todos.map(e => {
      return { ...e, done: allSeleted }
    })
    this.setState({
      todos: newTodos
    })
  }
  render() {
    return (
      <div>
        <Header handleInput={this.handleInput} />
        <List updateTodos={this.updateTodos} deleteTodo={this.deleteTodo} todos={this.state.todos} />
        <Footer
          todos={this.state.todos}
          clearSelected={this.clearSelected}
          allSelected={this.allSelected}
        />
      </div>
    )
  }
}