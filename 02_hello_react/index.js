// 引入 React 核心库
import React from "react";
// 引入 ReactDOM 
import * as ReactDOM from 'react-dom/client';
import App from './App';
// 渲染组件到页面
// ReactDOM.render(<App />, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root')); // React 18
root.render(<App />)
