import React, { Component } from 'react'
import Index from './Components/pages/Index'
import Play from './Components/pages/Play'
import Indexant from './Components/pages/index_ant'
import Detail from './Components/pages/detail'
import { Route, Switch, Redirect } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/index' component={Index}></Route>
          <Route path='/play' component={Play}></Route>
          <Route path='/detail' component={Detail}></Route>
          <Route path='/indexant' component={Indexant}></Route>
          <Redirect to='/index'></Redirect>
        </Switch>
      </div>
    )
  }
}
export default App
