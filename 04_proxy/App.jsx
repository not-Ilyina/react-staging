import React, { Component } from 'react'
import axios from 'axios'

export class App extends Component {
  getData = () => {
    axios.get('http://localhost:3000/api1/wf/admin/account').then(
      response => {
        console.log('success');
      },
      error => {
        console.log('err');
      }
    )
  }
  render() {
    return (
      <div>
        App
        <button onClick={this.getData}>点击获取数据</button>
      </div>
    )
  }
}
