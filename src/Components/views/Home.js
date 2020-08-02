import React, { Component } from 'react'
import '../../assets/css/Home.css'

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            songSheets: [
                {
                    id: 1,
                    img: 'http://p2.music.126.net/NUoBu3y4srByMPoCeBWh3g==/109951165178088042.jpg?imageView=1&amp;type=webp&amp;thumbnail=246x0',
                    herf: '//y.music.163.com/m/playlist?id=5126542986',
                    heat: '124.9',
                    title: '2020上半年最受欢迎日语新歌'
                },
                {
                    id: 2,
                    img: "http://p2.music.126.net/uRKi7uzwfXCQmoS21u5VJA==/109951165145224508.jpg?imageView=1&amp;type=webp&amp;thumbnail=246x0",
                    herf: "//y.music.163.com/m/playlist?id=5126389016",
                    heat: '55.9',
                    title: '盛夏白瓷梅子汤，碎冰碰壁铛啷响'
                },
                {
                    id: 3,
                    img: "http://p2.music.126.net/PrdnMhohYoKbeh1Ue79LAg==/109951164297851087.jpg?imageView=1&amp;type=webp&amp;thumbnail=246x0",
                    href: "//y.music.163.com/m/playlist?id=2194601729",
                    heat: '852.8',
                    title: '『练球必备』超燃英文BGM'
                },
                {
                    id: 4,
                    img: "http://p2.music.126.net/ABGShD3CbGSUpyp49pzE6g==/109951164762093476.jpg?imageView=1&amp;type=webp&amp;thumbnail=246x0",
                    href: "//y.music.163.com/m/playlist?id=3136952023",
                    heat: '17.7',
                    title: '今天从《雅俗共赏》听起|私人雷达'
                },
                {
                    id: 5,
                    img: "http://p2.music.126.net/u5w-1-f8kbSX0ZgewCmiGA==/109951165134080652.jpg?imageView=1&amp;type=webp&amp;thumbnail=246x0",
                    href: "//y.music.163.com/m/playlist?id=2816437068",
                    heat: '2556.1',
                    title: '打游戏必备【战歌、节奏电音、重金属】'
                },
                {
                    id: 6,
                    img: "http://p2.music.126.net/rhGZZ-rNKgyh_bwf-zvYaw==/109951163659800127.jpg?imageView=1&amp;type=webp&amp;thumbnail=246x0",
                    href: "//y.music.163.com/m/playlist?id=385793698",
                    heat: '405.9',
                    title: '赵雷最好听的二十五首歌'
                },
            ],
            songList: [
                {
                    id: 1,
                    songTitle: '致我们终将逝去的青春 (2020重唱版)',
                    href: "//music.163.com/m/song?id=1466595872",
                    singer: '张靓颖',
                    album: '致我们终将逝去的青春'
                },
                {
                    id: 2,
                    songTitle: '如果我是海',
                    href: "//music.163.com/m/song?id=1466675564",
                    singer: '李荣浩',
                    album: '麻雀'
                },
                {
                    id: 3,
                    songTitle: '祝我快乐',
                    href: "//music.163.com/m/song?id=1466643383",
                    singer: '汪苏泷',
                    album: '祝我快乐'
                },
                {
                    id: 4,
                    songTitle: '星星之火',
                    href: "//music.163.com/m/song?id=1465026481",
                    singer: '罗云熙',
                    album: '星星之火'
                },
                {
                    id: 5,
                    songTitle: '晚来天欲雪',
                    href: "//music.163.com/m/song?id=1466822129",
                    singer: '恋恋故人难 / 云の泣 ',
                    album: '晚来天欲雪'
                },
                {
                    id: 6,
                    songTitle: '先知',
                    href: "//music.163.com/m/song?id=1466033420",
                    singer: '田馥甄',
                    album: '先知'
                },
                {
                    id: 7,
                    songTitle: '我行我素我爱你',
                    href: "//music.163.com/m/song?id=1465598472",
                    singer: '郁可唯',
                    album: '我行我素我爱你'
                },
                {
                    id: 8,
                    songTitle: 'PARADISE',
                    href: "//music.163.com/m/song?id=1465598472",
                    singer: 'Ravi / 河成云',
                    album: 'PARADISE'
                },
                {
                    id: 9,
                    songTitle: '睹物思人',
                    href: "//music.163.com/m/song?id=1465765256",
                    singer: '武艺',
                    album: '睹物思人'
                },
                {
                    id: 10,
                    songTitle: '尘埃',
                    href: "//music.163.com/m/song?id=1465274224",
                    singer: '董嘉鸿',
                    album: '尘埃'
                },

            ]
        }
    }
    render() {
        const { songSheets, songList } = this.state
        return (
            <div className='home'>
                <div className="m-tabct">
                    <div className="tabctitem">
                        <div className="m-homeremd">
                            <h2 className="remd_tl">推荐歌单</h2>
                            <div className="remd_songs">
                                <div className="remd_ul">
                                    {
                                        songSheets.map(item => {
                                            return <a key={item.id} className="remd_li" href={item.herf}>
                                                <div className="remd_img">
                                                    <img className="u-img" src={item.img} />
                                                    <span className="u-earp remd_lnum">{item.heat}万</span>
                                                </div>
                                                <p className="remd_text">{item.title}</p>
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
                                                        <div className="f-thide sgtl">{item.songTitle}
                                                        </div>
                                                        <div className="f-thide sginfo">
                                                            <i className="u-hmsprt sghot"></i>{item.singer} - {item.album}
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
