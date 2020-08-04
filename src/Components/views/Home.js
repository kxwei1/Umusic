import React, { Component } from 'react'
//引入swiper
import 'swiper/css/swiper.min.css'
import 'swiper/js/swiper.min.js'
import '../../assets/css/Home.css'

//引入swiper插件
import Swiper from 'swiper'
import { personalized, banner, newsong } from '../../util/axios'
import Axios from 'axios'
export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            bannerList: [],
            songSheets: [
            ],
            songList: [
            ],
        }
    }
    componentDidMount() {
        this.getPersonalized()
        this.newsong()
        this.getBanner()
    }
    //封装一个推荐歌单的接口
    getPersonalized() {
        personalized({ limit: 6 }).then(res => {
            if (res.code === 200) {
                this.setState({
                    songSheets: res.result
                })
            }
        })
    }
    newsong() {
        newsong().then(res => {
            if (res.code === 200) {
                this.setState({
                    songList: res.result
                })
                console.log(res);
            }
        })
    }
    getBanner() {
        banner()
            .then(res => {
                if (res.code === 200) {
                    this.setState({
                        bannerList: res.banners
                    }, () => {
                        //调用轮播图
                        let swiper = new Swiper('.swiper-container', {
                            autoplay: {
                                delay: 1000,
                            },
                            loop: true,
                            pagination: {
                                el: '.swiper-pagination',
                            }
                        });
                    })
                }
            })
    }
    goDetail(id) {
        this.props.history.push({
            pathname: '/detail',
            state: {
                id
            }
        })
    }
    render() {
        const { songSheets, songList, bannerList } = this.state
        return (
            <div className='home'>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            bannerList.map(item => {
                                return <div key={item.imageUrl} className="swiper-slide">
                                    <img className='imgUrl' src={item.imageUrl} alt="" />
                                </div>
                            })
                        }
                        <div className="swiper-slide">Slide 1</div>
                    </div>
                </div>
                <div className="m-tabct">
                    <div className="tabctitem">
                        <div className="m-homeremd">
                            <h2 className="remd_tl">推荐歌单</h2>
                            <div className="remd_songs">
                                <div className="remd_ul">
                                    {
                                        songSheets.map(item => {
                                            return <a key={item.id} onClick={this.goDetail.bind(this, item.id)} className="remd_li">
                                                <div className="remd_img">
                                                    <img className="u-img" src={item.picUrl} />
                                                    <span className="u-earp remd_lnum">{item.playCount}万</span>
                                                </div>
                                                <p className="remd_text">{item.name}</p>
                                            </a>
                                        })
                                    }

                                </div>
                            </div>
                            <h2 className="remd_tl">最新音乐</h2>
                            <div className="remd_newsg">
                                <div className="m-sglst">
                                    {
                                        songList.map(item => {
                                            return <a key={item.id} className="m-sgitem" href={item.href}>
                                                <div className="sgfr f-bd f-bd-btm">
                                                    <div className="sgchfl">
                                                        <div className="f-thide sgtl">{item.name}
                                                            <span className="sgalia">{item.song.alias}</span>
                                                        </div>
                                                        <div className="f-thide sginfo">
                                                            <i className="u-hmsprt sghot"></i>{
                                                                item.song.artists.map(item1 => {
                                                                    return item1.name
                                                                })
                                                            } - {item.song.album.name}
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

                            <footer className="m-homeft">

                                <div className="ftwrap">
                                    <div className='logo'>
                                        <img src={require("../../assets/img/logo.png")} />
                                    </div>
                                    <div className="openapp">打开APP，发现更多好音乐 &gt;</div><p className="copyright">网易公司版权所有©1997-2020   杭州乐读科技有限公司运营</p>
                                </div>
                            </footer>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
