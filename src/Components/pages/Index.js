import React, { Component } from 'react'
import Home from '../views/Home'
import Rank from '../views/Rank'
import Search from '../views/Search'
import '../../assets/js/remScale'
import '../../assets/css/reset.css'
import '../../assets/css/Index.css'
import { Route, Switch, NavLink, Redirect } from 'react-router-dom'

export default class Index extends Component {
    render() {
        return (
            <div className='index'>
                <div className='title'>
                    <img className='logo_min' src={require('../../assets/img/logo_min.png')} />
                    <span className='tName'>网易云音乐</span>
                    <div className="topfr"><span className="f-bd f-bd-full topbton">下载APP</span></div>
                </div>
                <div className='tabNav'>
                    <NavLink activeClassName='select' to='/index/home'>推荐音乐</NavLink>
                    <NavLink activeClassName='select' to='/index/rank'>排行榜</NavLink>
                    <NavLink activeClassName='select' to='/index/search'>搜索</NavLink>
                </div>
                <Switch>
                    <Route path='/index/home' component={Home}></Route>
                    <Route path='/index/rank' component={Rank}></Route>
                    <Route path='/index/search' component={Search}></Route>
                    <Redirect to='/index/home'></Redirect>
                </Switch>
            </div>
        )
    }
}
