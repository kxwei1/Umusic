import React, { Component } from 'react'
import '../../assets/css/Search.css'

export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            heatRanking: [
                {
                    id: 1,
                    title: 'Taylor Swift'
                },
                {
                    id: 2,
                    title: 'Billie Eilish'
                },
                {
                    id: 3,
                    title: '无滤镜'
                },
                {
                    id: 4,
                    title: '潘玮柏'
                },
                {
                    id: 5,
                    title: '天外来物'
                },
                {
                    id: 6,
                    title: 'Troye Sivan'
                },
                {
                    id: 7,
                    title: '亚运会歌征集'
                },
                {
                    id: 8,
                    title: '上半年音乐榜单'
                },
                {
                    id: 9,
                    title: '要我怎么办'
                },
                {
                    id: 10,
                    title: '2020毕业音乐会'
                },
            ]


        }
    }

    render() {
        const { heatRanking } = this.state
        return (
            <div className='search'>
                <form className="m-input f-bd f-bd-btm" method="get" action="#">
                    <div className="inputcover">
                        <i className="u-svg u-svg-srch">
                        </i>
                        <input type="search" name="search" className="input" placeholder="" />
                        <label className="holder">搜索歌曲、歌手、专辑</label>
                        <figure className="close">
                            <i className="u-svg u-svg-empty"></i>
                        </figure>
                    </div>
                    <div className="m-default">
                        <section className="m-hotlist">
                            <h3 className="hot">热门搜索</h3>
                            <ul className="list">
                                {
                                    heatRanking.map(item => {
                                        return <li key={item.id} className="item f-bd f-bd-full">
                                            <a className="link">{item.title}</a>
                                        </li>
                                    })
                                }

                            </ul>
                        </section>
                    </div>
                </form>
            </div>
        )
    }
}
