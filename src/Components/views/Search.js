import React, { Component } from 'react'
import '../../assets/css/Search.css'
import { searchHot, searchInfo, suggestedSearch } from '../../util/axios'

export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            heatRanking: [],
            searchList: [],
            searchListInfo: []
        }
        this.inpVal = React.createRef()
    }
    componentDidMount() {
        this.getSearchHot()
    }
    getSearchHot() {
        searchHot()
            .then(res => {
                if (res.code == 200) {
                    console.log(res, '热门标签')
                    this.setState({
                        heatRanking: res.result.hots
                    })
                }
            })
    }
    goSearch(keywords) {
        this.inpVal.current.value = keywords
        document.getElementsByClassName('u-svg-empty')[0].style.display = 'block'
        searchInfo({ keywords })
            .then(res => {
                if (res.code == 200) {
                    console.log(res.result.songs, '搜索结果')
                    this.setState({
                        searchList: res.result.songs,
                        searchListInfo: []

                    })
                }
            })
    }
    getInput() {
        if (this.inpVal.current.value == '') {
            document.getElementsByClassName('u-svg-empty')[0].style.display = 'none'
        }
        else {
            document.getElementsByClassName('u-svg-empty')[0].style.display = 'block'
            this.suggestedSearch(this.inpVal.current.value, 'mobile')
        }
    }
    suggestedSearch(keywords, type) {
        suggestedSearch({ keywords, type }).then(res => {
            console.log(res.result.allMatch);
            if (res.code === 200) {
                this.setState({
                    searchListInfo: res.result.allMatch
                })
            }
        })
    }
    clearInfo() {
        this.inpVal.current.value = ''
        document.getElementsByClassName('u-svg-empty')[0].style.display = 'none'
        this.setState({
            searchList: [],
            searchListInfo: []
        })
    }
    render() {
        const { searchList, heatRanking, searchListInfo } = this.state
        let valFlag = ''
        if (this.inpVal.current) {
            valFlag = this.inpVal.current.value
            console.log(valFlag, 'this.inpVal.current.value')
        }
        let searchListDom = <div>
            <ul>{
                searchListInfo.map((item, index) => {
                    return <li key={index} onClick={this.goSearch.bind(this, item.keyword)} className="recomitem"><i className="u-svg u-svg-search"></i><span id='sthide' className="f-bd f-bd-btm f-thide">{item.keyword}</span></li>
                })
            }
            </ul>
        </div>
        let hotInfo = <div className="m-default">
            <section className="m-hotlist">
                <h3 className="hot">热门搜索</h3>
                <ul className="list">
                    {
                        heatRanking.map((item, index) => {
                            return <li key={index} onClick={this.goSearch.bind(this, item.first)} className="item f-bd f-bd-full">
                                <a className="link">{item.first}</a>
                            </li>
                        })
                    }

                </ul>
            </section>
        </div>
        return (
            <div className='search'>
                <form className="m-input f-bd f-bd-btm" method="get" action="#">
                    <div className="inputcover">
                        <i className="u-svg u-svg-srch">
                        </i>
                        <input type="search" name='search' className='input' ref={this.inpVal} onInput={this.getInput.bind(this)} placeholder='搜索歌曲、歌手、专辑' />
                        <figure className="close">
                            <i className="u-svg u-svg-empty" onClick={this.clearInfo.bind(this)}></i>
                        </figure>
                    </div>
                    <div className="m-default">
                        <section className="m-hotlist">
                            <ul className="list">
                                {
                                    searchList.length > 0 ? searchList.map((item, i) => {
                                        return <a key={item.id} className="m-sgitem">
                                            <div className="sgfr f-bd f-bd-btm">
                                                <div className="sgchfl">
                                                    <div className="f-thide sgtl">{item.name}
                                                        <span className="sgalia">{item.alias}</span>
                                                    </div>
                                                    <div className="f-thide sginfo">
                                                        <i className="u-hmsprt sghot"></i>{
                                                            item.artists.map(item1 => {
                                                                return item1.name
                                                            })
                                                        } - {item.album.name}
                                                    </div>
                                                </div>
                                                <div className="sgchfr">
                                                    <span className="u-hmsprt sgchply"></span>
                                                </div>
                                            </div>
                                        </a>
                                    })
                                        : ''
                                }

                            </ul>
                        </section>
                    </div>
                    <div className="m-default">
                        {
                            searchListInfo.length == 0 ? searchList.length == 0 ? hotInfo : '' : searchListDom

                        }
                    </div>
                </form>
            </div >
        )
    }
}
