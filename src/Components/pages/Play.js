import React, { Component } from 'react'
//引入jq
import $ from 'jquery'
import '../../assets/css/Play.css'
import { getLyric, getUrl, getSongDetail } from '../../util/axios'
import axios from 'axios'
export default class Index extends Component {
    constructor() {
        super()
        this.state = {
            img: require('../../assets/img/needle-ip6.png'),
            songUrl: '',
            lyric: '',
            songDetail: '',
            flag: false,
            playTime: "00:00"
        }
        this.playIcon = React.createRef()
        this.audio = React.createRef()
    }
    componentDidMount() {
        axios.all([getLyric({ id: this.props.location.state.id }), getUrl({ id: this.props.location.state.id }), getSongDetail({ ids: this.props.location.state.id })])
            .then(axios.spread((lyric, songUrl, songDetail) => {
                console.log(lyric, '歌词')
                console.log(songUrl, '音乐地址')
                console.log(songDetail, 'songDetail')
                if (lyric.code === 200) {
                    let lyricInfo = lyric.lrc.lyric
                    let reg = /\[(.*?)](.*)/g
                    let obj = {}
                    lyricInfo.replace(reg, (a, b, c) => {
                        b = b.slice(0, 5)
                        obj[b] = c
                    })

                    console.log(obj, '歌词转化之后的对象')
                    this.setState({
                        lyric: obj
                    }, () => {
                        let audio = this.audio.current
                        audio.ontimeupdate = () => {
                            let nowTime = this.tranTime(audio.currentTime)
                            if (nowTime in this.state.lyric) {
                                this.setState({
                                    playTime: nowTime
                                }, () => {
                                    //歌词滚动
                                    this.moveLyric()
                                })
                            }
                        }
                    })
                }
                if (songUrl.code === 200) {
                    this.setState({
                        songUrl: songUrl.data[0].url
                    })
                }
                if (songDetail.code === 200) {
                    this.setState({
                        songDetail: songDetail.songs[0]
                    })
                }
            }))
    }
    tranTime(timer) {
        let minute = (Math.floor(timer / 60) + '').padStart(2, '0')
        let second = (Math.floor(timer % 60) + '').padStart(2, '0')
        return `${minute}:${second}`
    }
    moveLyric() {
        let active = document.getElementsByClassName('active')[0]
        let index = $('.geci_box').children().index(active)
        let offset = 31
        if (active) {
            if (active.offsetTop > offset) {
                console.log('进来')
                $('.geci_box').css("transform", `translateY(-${index * offset}px)`)
            }
        }
    }
    toPlay() {
        this.setState({
            flag: !this.state.flag
        }, () => {
            if (this.state.flag) {
                this.audio.current.pause()
                this.playIcon.current.style.display = 'block'
            } else {
                this.audio.current.play()
                this.playIcon.current.style.display = 'none'
            }
        })

    }
    render() {
        const { lyric, songUrl, songDetail, img, playTime } = this.state
        return (<div className='play'>
            <div className="play_top">
                <img src={img} />
            </div>
            <div className="play_img_all" >
                <i ref={this.playIcon} className="play_icon"></i>
                <div className="play_img_box" onClick={this.toPlay.bind(this)}>
                    <div className="small_img">
                        {songDetail.al ? <img src={songDetail.al.picUrl} alt="" /> : ''}
                    </div>
                </div>
            </div>
            <div className="play_txt">
                <div className="play_txt_name">
                    {songDetail.al ? <div>{songDetail.al.name}-<span className="singer">{songDetail.ar[0].name}</span></div> : ''}
                </div>
                <div className="play_txt_geci">
                    <div className="geci_box">
                        {
                            Object.entries(lyric).map((item, i) => {
                                if (playTime == item[0]) {
                                    return <p key={i} className='active'>{item[1]}</p>
                                } else {
                                    return <p key={i}>{item[1]}</p>
                                }

                            })
                        }
                        <p ></p>
                    </div>
                </div>
            </div >
            <div className="audio_box">
                <audio ref={this.audio} src={songUrl} autoPlay></audio>
            </div >
        </div >)
    }
}
