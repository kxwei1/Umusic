import React, { Component } from 'react'
import '../../assets/css/Rank.css'
import { NavLink } from 'react-router-dom';
import { getHotList } from '../../util/axios'
export default class Rank extends Component {
    constructor() {
        super();
        this.state = {
            hotTime: 0,
            bgImg: require('../../assets/img/hot_music_bg_2x.jpg'),
            rankList: []
        }
    }
    componentDidMount() {
        this.getHotList()
    }
    formatTime(timer) {
        let date = new Date(timer)
        let year = date.getFullYear()
        let month = (date.getMonth() + 1 + '').padStart(2, '0')
        let day = (date.getDate() + 1 + '').padStart(2, '0')
        let hours = (date.getHours() + 1 + '').padStart(2, '0')
        let minutes = (date.getMinutes() + 1 + '').padStart(2, '0')
        let Seconds = (date.getSeconds() + 1 + '').padStart(2, '0')
        return `${month}月${day}日`
    }
    getHotList() {
        getHotList().then(res => {
            if (res.code === 200) {
                //对返回列表进行过滤
                let hotList = res.playlist.tracks.filter((item, i) =>
                    i < 20
                )
                this.setState({
                    hotTime: res.playlist.updateTime,
                    rankList: hotList
                })
            }
        })
    }
    goPlay(id) {
        this.props.history.push({
            pathname: '/play',
            state: {
                id
            }
        })
    }
    render() {
        const { bgImg, rankList } = this.state
        return (
            <div className='rank'>
                <div className="m-tabct">
                    <div className="tabctitem">
                        <div className="m-hmhot">
                            <div className="hotop">
                                <div className="hotopct">
                                    <div className="u-hmsprt hoticon">
                                    </div>
                                    <div className="hottime">更新日期：07月30日</div>
                                </div>
                            </div>
                            <div className="hotcont">
                                <div className="m-sglst">
                                    {
                                        rankList.map((item, i) => {
                                            return <a key={item.id} className="m-sgitem" onClick={this.goPlay.bind(this, item.id)}>
                                                <div className="sgfl rankcss">{i < 10 ? '0' + i : i}</div>
                                                <div className="sgfr f-bd f-bd-btm">
                                                    <div className="sgchfl">
                                                        <div className="f-thide sgtl">{item.name}
                                                            <span className="sgalia">{item.alia}</span>
                                                        </div>
                                                        <div className="f-thide sginfo">
                                                            <i className="u-hmsprt sghot"></i>{item.ar[0].name}-{item.al.name}
                                                        </div>
                                                    </div>
                                                    <div className="sgchfr">
                                                        <span className="u-hmsprt sgchply"></span>
                                                    </div>
                                                </div>
                                            </a>
                                        })
                                    }
                                </div>
                            </div>
                            <div className="hotdn">
                                <span className="hotview">查看完整榜单</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
