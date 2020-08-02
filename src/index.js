//引入核心库
import React from 'react'
//引入dom库
import ReactDom from 'react-dom'
import 'antd/dist/antd.css'
//引入全局样式
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
//利用render函数进行渲染
ReactDom.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
)