import React, { Component } from 'react'
import Item from '../Item'
import PropTypes from 'prop-types'

export default class List extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateTodos: PropTypes.func.isRequired
    }
    render() {
        const { todos, updateTodos, deleteTodo } = this.props
        return (
            <div>
                <ul>
                    {
                        (todos || []).map(e => {
                            return <Item deleteTodo={deleteTodo} updateTodos={updateTodos} key={e.id} {...e} />
                        })
                    }
                </ul>
            </div>
        )
    }
}
