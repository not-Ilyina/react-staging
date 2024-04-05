import React from "react"
import root from './index.module.css';

export default class Hello extends React.Component {
    render() {
        return (
            <h2 className={root.title}>Hello React</h2>
        )
    }
}