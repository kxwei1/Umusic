import React, { Component } from 'react'
import '../../assets/css/Rank.css'
import { NavLink } from 'react-router-dom';

export default class Rank extends Component {
    constructor() {
        super();
        this.state = {
            bgImg: require('../../assets/img/hot_music_bg_2x.jpg'),
            rankList: [
                {
                    id: 1,
                    href: "//music.163.com/m/song?id=4074100223",
                    songTitle: '爸爸妈妈',
                    singer: '李荣浩',
                    originalName: '',
                    album: '有理想',
                },
                {
                    id: 2,
                    href: "//music.163.com/m/song?id=1426649237",
                    songTitle: '海底',
                    singer: '一支榴莲',
                    originalName: '',
                    album: '《独》',
                },
                {
                    id: 3,
                    href: "//music.163.com/m/song?id=10108071673",
                    songTitle: '你走',
                    singer: '松紧先生（李宗锦）',
                    originalName: '',
                    album: '你走',
                },
                {
                    id: 4,
                    href: "//music.163.com/m/song?id=14310449062",
                    songTitle: '收敛',
                    singer: '不够',
                    originalName: '',
                    album: '收敛',
                },
                {
                    id: 5,
                    href: "//music.163.com/m/song?id=14421008316",
                    songTitle: '丢了你',
                    singer: '井胧',
                    originalName: '',
                    album: '丢了你',
                },
                {
                    id: 6,
                    href: "//music.163.com/m/song?id=1460682363",
                    songTitle: '爱，存在',
                    singer: '卢卢快闭嘴',
                    originalName: '',
                    album: '爱，存在',
                },
                {
                    id: 7,
                    href: "//music.163.com/m/song?id=13710640677",
                    songTitle: '官方回答',
                    singer: 'O.WEN',
                    originalName: '',
                    album: '官方回答',
                },
                {
                    id: 8,
                    href: "//music.163.com/m/song?id=1436709403",
                    songTitle: '夏天的风',
                    singer: '火羊瞌睡了',
                    originalName: '',
                    album: '夏天的风',
                },
                {
                    id: 9,
                    href: "//music.163.com/m/song?id=4937310012",

                    songTitle: '无人之岛',
                    singer: '任然',
                    originalName: '',
                    album: '没有发生的爱情',
                },
                {
                    id: 10,
                    href: "//music.163.com/m/song?id=14631610983",

                    songTitle: '天外来物',
                    singer: '薛之谦',
                    originalName: '',
                    album: '天外来物',
                },
                {
                    id: 11,
                    href: "//music.163.com/m/song?id=1344897943",


                    songTitle: '你是人间四月天',
                    singer: '邵帅（解忧邵帅）',
                    originalName: '',
                    album: '你是人间四月天',
                },
                {
                    id: 12,
                    href: "//music.163.com/m/song?id=14410761206",
                    songTitle: '雨爱',
                    singer: '周星星',
                    originalName: '',
                    album: '雨爱',
                },
                {
                    id: 13,
                    href: "//music.163.com/m/song?id=140167141010",
                    songTitle: 'Love Is Gone (feat. Dylan Matthew) (Acoustic)',
                    singer: 'SLANDER / Dylan Matthew',
                    originalName: '',
                    album: 'Love Is Gone (Acoustic)',
                },
                {
                    id: 14,
                    href: "//music.163.com/m/song?id=141310810838",
                    songTitle: '与我无关',
                    singer: '阿冗',
                    originalName: '',
                    album: '与我无关',
                },
                {
                    id: 15,
                    href: "//music.163.com/m/song?id=1449678888",
                    songTitle: '回到夏天',
                    singer: '傲七爷 / 爱写歌的小田',
                    originalName: '(我多想回到那个夏天)',
                    album: '回到夏天',
                },
                {
                    id: 16,
                    href: "//music.163.com/m/song?id=46109211910",
                    songTitle: '还是分开',
                    singer: '张叶蕾',
                    originalName: '',
                    album: '还是分开',
                },
                {
                    id: 17,
                    href: "//music.163.com/m/song?id=141001074147",
                    songTitle: '情人',
                    singer: '蔡徐坤',
                    originalName: '',
                    album: '情人',
                },
                {
                    id: 18,

                    href: "//music.163.com/m/song?id=1363948882",
                    songTitle: '世间美好与你环环相扣',
                    singer: '柏松',
                    originalName: '',
                    album: '听闻余生',
                },
                {
                    id: 19,
                    href: "//music.163.com/m/song?id=1423241987",
                    songTitle: '7 %',
                    singer: 'XMASwu',
                    originalName: '',
                    album: '柒',
                },
                {
                    id: 20,
                    href: "//music.163.com/m/song?id=1398663411",
                    songTitle: '冬眠',
                    singer: '司南',
                    originalName: '',
                    album: '冬眠',
                },
            ]
        }
    }
    goPlay(id, songTitle) {
        this.props.history.push(
            {
                pathname: '/play',
                state: {
                    id,
                    songTitle,
                }
            }
        )
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
                                        rankList.map(item => {
                                            return <a key={item.id} className="m-sgitem" href={item.href}>
                                                <div className="sgfl rankcss">{item.id < 10 ? '0' + item.id : item.id}</div>
                                                <div className="sgfr f-bd f-bd-btm">
                                                    <div className="sgchfl">
                                                        <div className="f-thide sgtl">{item.songTitle}
                                                            <span className="sgalia">{item.originalName}</span>
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
                            <div className="hotdn">
                                <span className="hotview">查看完整榜单</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div>
                    <img className='bgImg' src={bgImg} alt="" />
                </div>
                <ul>
                    {
                        rankList.map(item => {
                            return  <li key={item.id} onClick={()=>this.goPlay(item.id,item.songTitle)} className='songList'>
                                <div className='songLeft'>
                                    {item.id}
                                </div>
                                <div className='songRight'>
                                    {item.songTitle}
                                </div>
                            </li>
                        })
                    }

                </ul> */}
            </div>
        )
    }
}
