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
                // {
                //     id: 1,
                //     img: 'http://p2.music.126.net/NUoBu3y4srByMPoCeBWh3g==/109951165178088042.jpg?imageView=1&amp;type=webp&amp;thumbnail=246x0',
                //     herf: '//y.music.163.com/m/playlist?id=5126542986',
                //     heat: '124.9',
                //     title: '2020上半年最受欢迎日语新歌'
                // },
                // {
                //     id: 2,
                //     img: "http://p2.music.126.net/uRKi7uzwfXCQmoS21u5VJA==/109951165145224508.jpg?imageView=1&amp;type=webp&amp;thumbnail=246x0",
                //     herf: "//y.music.163.com/m/playlist?id=5126389016",
                //     heat: '55.9',
                //     title: '盛夏白瓷梅子汤，碎冰碰壁铛啷响'
                // },
                // {
                //     id: 3,
                //     img: "http://p2.music.126.net/PrdnMhohYoKbeh1Ue79LAg==/109951164297851087.jpg?imageView=1&amp;type=webp&amp;thumbnail=246x0",
                //     href: "//y.music.163.com/m/playlist?id=2194601729",
                //     heat: '852.8',
                //     title: '『练球必备』超燃英文BGM'
                // },
                // {
                //     id: 4,
                //     img: "http://p2.music.126.net/ABGShD3CbGSUpyp49pzE6g==/109951164762093476.jpg?imageView=1&amp;type=webp&amp;thumbnail=246x0",
                //     href: "//y.music.163.com/m/playlist?id=3136952023",
                //     heat: '17.7',
                //     title: '今天从《雅俗共赏》听起|私人雷达'
                // },
                // {
                //     id: 5,
                //     img: "http://p2.music.126.net/u5w-1-f8kbSX0ZgewCmiGA==/109951165134080652.jpg?imageView=1&amp;type=webp&amp;thumbnail=246x0",
                //     href: "//y.music.163.com/m/playlist?id=2816437068",
                //     heat: '2556.1',
                //     title: '打游戏必备【战歌、节奏电音、重金属】'
                // },
                // {
                //     id: 6,
                //     img: "http://p2.music.126.net/rhGZZ-rNKgyh_bwf-zvYaw==/109951163659800127.jpg?imageView=1&amp;type=webp&amp;thumbnail=246x0",
                //     href: "//y.music.163.com/m/playlist?id=385793698",
                //     heat: '405.9',
                //     title: '赵雷最好听的二十五首歌'
                // },
            ],
            songList: [
            ],
        }
    }
    componentDidMount() {
        // Axios.all(
        //     [getPersonalized(),
        //     newsong(),
        //     getBanner(),
        //     ]
        // ).then(Axios.spread((songSheets, bannerList, songList) => {

        // }))
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
                                            return <a key={item.id} className="remd_li">
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
