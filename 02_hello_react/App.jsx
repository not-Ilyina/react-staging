// 创建外壳组件
import React from "react";
import Hello from "./components/Hello";
import Wellcome from "./components/Wellcome";
export default class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Wellcome />
            </div>
        )
    }
}
