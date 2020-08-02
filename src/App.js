import React, { Component } from 'react'
import Index from './Components/pages/Index'
import Play from './Components/pages/Play'
import Indexant from './Components/pages/index_ant'
// import List from './Components/List'
// import Play from './Components/Play'
import { Route, Switch, Link, Redirect, NavLink } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/index' component={Index}></Route>
          <Route path='/play' component={Play}></Route>
          <Route path='/indexant' component={Indexant}></Route>
          {/* <Route path='/play/:id' component={Play}></Route> */}
          <Redirect to='/index'></Redirect>
        </Switch>
      </div>
    )
  }
}
export default App
