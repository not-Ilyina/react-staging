import React from 'react'
import root from './index.module.css'
import PropTypes from 'prop-types' 

export default class Item extends React.Component {
    static propTypes = {
        updateTodos: PropTypes.func.isRequired
    }
    state = {
        mouse: false,
    }
    handleMouse = state => {
        this.setState({ mouse: state })
    }
    render() {
        const { id, name, done, updateTodos, deleteTodo } = this.props
        const { mouse } = this.state
        return (
            <li className={root.item} style={{ backgroundColor: mouse ? '#ddd' : 'white' }} onMouseLeave={() => this.handleMouse(false)} onMouseEnter={() => this.handleMouse(true)} >
                <label>
                    <input type="checkbox" checked={done} onChange={e => {
                        updateTodos(id, e.target.checked)
                    }} />
                    <span>{name}</span>
                </label>
                <button
                    className={root.btn}
                    style={{ display: mouse ? 'block' : 'none' }}
                    onClick={() => {
                        if (window.confirm('Sure to del?'))
                            deleteTodo(id)
                    }}
                >
                    delete
                </button>
            </li>
        )
    }
}
