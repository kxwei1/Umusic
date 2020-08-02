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
                    songName: '爸爸妈妈'
                },
                {
                    id: 2,
                    songName: '你走'
                },
                {
                    id: 3,
                    songName: '海底'
                },
                {
                    id: 4,
                    songName: '夏天的风'
                },
                {
                    id: 5,
                    songName: '丢了你'
                },
            ]
        }
    }
    goPlay(id) {
        this.props.history.push(`/play/${id}`)
    }
    render() {
        const { bgImg, rankList } = this.state
        return (
            <div className='rank'>
                <div>
                    <img className='bgImg' src={bgImg} alt="" />
                </div>
                <ul>
                    {
                        rankList.map(item => {
                            return <li key={item.id} onClick={()=>this.goPlay(item.id)} className='songList'>
                                <div className='songLeft'>
                                    {item.id}
                                </div>
                                <div className='songRight'>
                                    {item.songName}
                                </div>
                            </li>
                            // </NavLink>
                            // <NavLink key={item.id} to={'/play/'+item.id}>
                            //     <li className='songList'>
                            //         <div className='songLeft'>
                            //             {item.id}
                            //         </div>
                            //         <div className='songRight'>
                            //             {item.songName}
                            //         </div>
                            //     </li>
                            // </NavLink>
                        })
                    }

                </ul>
            </div>
        )
    }
}
