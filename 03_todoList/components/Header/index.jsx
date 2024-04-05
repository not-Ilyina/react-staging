import React from 'react'
import PropTypes from 'prop-types'
const uuid = require('uuid');

export default class Header extends React.Component {
  static propTypes = {
    handleInput: PropTypes.func.isRequired
  }
  render() {
    return (
      <div>
        <input
          onKeyUp={(e) => {
            if (e.keyCode !== 13) return;
            if (e.target.value.trim() === '') {
              alert('input shoulnd not be empty!')
              return
            }
            this.props.handleInput({id: uuid.v4() , name: e.target.value, done: false})
            // clear
            e.target.value = ''
          }}
          type='text'
          placeholder='Please input your task name, press enter to confirm'
        />
      </div>
    )
  }
}
