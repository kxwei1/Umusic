import React, { Component } from 'react'
import '../../assets/css/Play.css'
import qs from 'querystring'
export default class play extends Component {
    goBack() {

    }
    render() {
        return (
            <div id="j-app" className="u-height">
                <div className="root">
                    <div className="m-song">
                        <div className="m-newsong" id="j-songwrap">
                            <div className="m-song-bg"></div>
                            <div className="m-scroll_wrapper m-song_nor j-songsrl">
                                <div className="m-scroll_scroller m-scroll_scroller_vertical"><div>
                                    <div className="m-logo">
                                        <img src={require('../../assets/img/logo.png')} alt="" />
                                    </div>
                                    <div className="m-song_newfst">
                                        <div>
                                            <div className="m-song-wrap ">
                                                <div className="m-song-disc">
                                                    <div className="m-song-turn">
                                                        <div className="m-song-rollwrap">
                                                            <div className="m-song-img ">
                                                                <img className="u-img" alt="song-img" src="https://p1.music.126.net/UH6mbkyWNd9hRocMk3hd6Q==/109951163240596163.jpg?imageView&amp;thumbnail=360y360&amp;quality=75&amp;tostatic=0" />
                                                            </div>
                                                        </div>
                                                        <div className="m-song-lgour">
                                                            <div className="m-song-light ">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span className="m-song-plybtn">
                                                    </span>
                                                </div>
                                                <div className="m-song-clickarea">
                                                </div>
                                            </div>
                                            <div>
                                                <div className="m-song-info">
                                                    <h2 className="m-song-h2">
                                                        <span className="m-song-sname">爸爸妈妈</span>
                                                        <span className="m-song-gap">-</span>
                                                        <b className="m-song-autr">李荣浩</b>
                                                    </h2>
                                                    <div className="m-song-lrc f-pr">
                                                        <div className="m-song-scroll" >
                                                            <div className="m-song-iner">
                                                                <p className="m-song-lritem j-lritem" >作曲 : 李荣浩</p>
                                                                <p className="m-song-lritem j-lritem">作词 : 李荣浩</p>
                                                                <p className="m-song-lritem j-lritem">我曾经很想知道</p>
                                                                <p className="m-song-lritem j-lritem">同样的话要说多少次才好</p>
                                                                <p className="m-song-lritem j-lritem">那些再三强调的老套</p>
                                                                <p className="m-song-lritem j-lritem">长大了才知道是不是需要</p>
                                                                <p className="m-song-lritem j-lritem">很少主动拥抱</p>
                                                                <p className="m-song-lritem j-lritem">就算为了自豪</p>
                                                                <p className="m-song-lritem j-lritem">腼腆的笑</p>
                                                                <p className="m-song-lritem j-lritem">要强而又低调</p>
                                                                <p className="m-song-lritem j-lritem">穿的布料</p>
                                                                <p className="m-song-lritem j-lritem">我赠送的外套</p>
                                                                <p className="m-song-lritem j-lritem">过时也不丢掉</p>
                                                                <p className="m-song-lritem j-lritem">还是一样</p>
                                                                <p className="m-song-lritem j-lritem">太多理所应当让人觉得平常</p>
                                                                <p className="m-song-lritem j-lritem">不算太小的房</p>
                                                                <p className="m-song-lritem j-lritem">冬暖夏凉的那间放着我的床</p>
                                                                <p className="m-song-lritem j-lritem">歌颂这种平凡 一两句唱不完</p>
                                                                <p className="m-song-lritem j-lritem">恩重如山 听起来不自然</p>
                                                                <p className="m-song-lritem j-lritem">回头去看</p>
                                                                <p className="m-song-lritem j-lritem">这是说了谢谢</p>
                                                                <p className="m-song-lritem j-lritem">反而才亏欠的情感</p>
                                                                <p className="m-song-lritem j-lritem">爸爸妈妈给我的不少不多</p>
                                                                <p className="m-song-lritem j-lritem">足够我在这年代奔波</p>
                                                                <p className="m-song-lritem j-lritem">足够我生活</p>
                                                                <p className="m-song-lritem j-lritem">年少的轻狂不能用来挥霍</p>
                                                                <p className="m-song-lritem j-lritem">也曾像朋友一样和我诉说</p>
                                                                <p className="m-song-lritem j-lritem">爸爸妈妈总说经历的坎坷</p>
                                                                <p className="m-song-lritem j-lritem">是度过青春的快乐</p>
                                                                <p className="m-song-lritem j-lritem">这时候这个季节</p>
                                                                <p className="m-song-lritem j-lritem">又想起了这首歌</p>
                                                                <p className="m-song-lritem j-lritem">还是一样</p>
                                                                <p className="m-song-lritem j-lritem">太多理所应当让人觉得平常</p>
                                                                <p className="m-song-lritem j-lritem">不算太小的房</p>
                                                                <p className="m-song-lritem j-lritem">冬暖夏凉的那间放着我的床</p>
                                                                <p className="m-song-lritem j-lritem">歌颂这种平凡 一两句唱不完</p>
                                                                <p className="m-song-lritem j-lritem">恩重如山 听起来不自然</p>
                                                                <p className="m-song-lritem j-lritem">回头去看</p>
                                                                <p className="m-song-lritem j-lritem">这是说了谢谢</p>
                                                                <p className="m-song-lritem j-lritem">反而才亏欠的情感</p>
                                                                <p className="m-song-lritem j-lritem">爸爸妈妈给我的不少不多</p>
                                                                <p className="m-song-lritem j-lritem">足够我在这年代奔波</p>
                                                                <p className="m-song-lritem j-lritem">足够我生活</p>
                                                                <p className="m-song-lritem j-lritem">年少的轻狂不能用来挥霍</p>
                                                                <p className="m-song-lritem j-lritem">也曾像朋友一样和我诉说</p>
                                                                <p className="m-song-lritem j-lritem">爸爸妈妈总说经历的坎坷</p>
                                                                <p className="m-song-lritem j-lritem">是度过青春的快乐</p>
                                                                <p className="m-song-lritem j-lritem">这时候这个季节</p>
                                                                <p className="m-song-lritem j-lritem">又想起了这首歌</p>
                                                                <p className="m-song-lritem j-lritem">爸爸妈妈给我的不少不多</p>
                                                                <p className="m-song-lritem j-lritem">足够我在这年代奔波</p>
                                                                <p className="m-song-lritem j-lritem">足够我生活</p>
                                                                <p className="m-song-lritem j-lritem">年少的轻狂不能用来挥霍</p>
                                                                <p className="m-song-lritem j-lritem">也曾像朋友一样和我诉说</p>
                                                                <p className="m-song-lritem j-lritem">爸爸妈妈总说经历的坎坷</p>
                                                                <p className="m-song-lritem j-lritem">是度过青春的快乐</p>
                                                                <p className="m-song-lritem j-lritem">这时候这个季节</p>
                                                                <p className="m-song-lritem j-lritem">又想起了这首歌</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div id="m-simi-playlist" className="m-moreLists undefined">
                                            <h2 className="u-title">包含这首歌的歌单</h2>
                                            <ul>
                                                <li><figure className="cover u-cover">
                                                    <img src="http://p3.music.126.net/1gNcBmzdIaQtU00Dvp_TvQ==/109951163912081772.jpg?imageView=1&amp;type=webp&amp;thumbnail=246x0" alt="playlist" />
                                                    <span className="u-earp sgply_cut">1.7亿</span>
                                                </figure>
                                                    <h3 className="tit f-fs13 f-thide">好听到单曲循环</h3>
                                                    <p className="sub">
                                                        <span className="author">by 洒酒无牵挂</span>
                                                    </p>
                                                </li>
                                                <li>
                                                    <figure className="cover u-cover">
                                                        <img src="http://p4.music.126.net/ow3CnHMPqa56OCSEmSWJGw==/18865420509947064.jpg?imageView=1&amp;type=webp&amp;thumbnail=246x0" alt="playlist" />
                                                        <span className="u-earp sgply_cut">5830.7万</span>
                                                    </figure><h3 className="tit f-fs13 f-thide">支撑美术画画Or肝作业的力量 耐听 杂食</h3>
                                                    <p className="sub">
                                                        <span className="author">by 樱剑乱舞</span>
                                                    </p>
                                                </li>
                                                <li>
                                                    <figure className="cover u-cover">
                                                        <img src="http://p4.music.126.net/xR2JRNsveP4nm4i2Jtch-g==/109951164208335626.jpg?imageView=1&amp;type=webp&amp;thumbnail=246x0" alt="playlist" />
                                                        <span className="u-earp sgply_cut">4835.5万</span>
                                                    </figure>
                                                    <h3 className="tit f-fs13 f-thide">薛之谦 陈奕迅 李荣浩 林宥嘉 林俊杰 郭顶</h3>
                                                    <p className="sub">
                                                        <span className="author">by 难寻1022</span>
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div id="m-simi-song" className="m-moreSongs undefined">
                                            <h2 className="u-title">喜欢这首歌的人也听</h2>
                                            <ul className="m-card m-card-sml m-card-list">
                                                <li className="itm">
                                                    <figure className="cover u-cover">
                                                        <img src="https://p1.music.126.net/JzsER44sOReoM6mR8XKnsw==/109951165182029540.jpg?imageView=1&amp;type=webp&amp;thumbnail=80x0" alt="song" />
                                                    </figure>
                                                    <article className="cnt f-fvc f-bd f-bd-btm">
                                                        <h3 className="f-thide">麻雀</h3>
                                                        <p className="sub f-thide">李荣浩  - 麻雀</p>
                                                    </article><i className="play f-vc"></i>
                                                </li>
                                                <li className="itm">
                                                    <figure className="cover u-cover">
                                                        <img src="https://p1.music.126.net/NhkuFBphLFaSmYMeW1-frQ==/109951164271814514.jpg?imageView=1&amp;type=webp&amp;thumbnail=80x0" alt="song" />
                                                    </figure>
                                                    <article className="cnt f-fvc f-bd f-bd-btm">
                                                        <h3 className="f-thide">嚣张</h3>
                                                        <p className="sub f-thide">en  - 嚣张</p>
                                                    </article>
                                                    <i className="play f-vc"></i>
                                                </li>
                                                <li className="itm">
                                                    <figure className="cover u-cover">
                                                        <img src="https://p1.music.126.net/zgDvTPDSYKjQUjkV8sQUOA==/109951164605092552.jpg?imageView=1&amp;type=webp&amp;thumbnail=80x0" alt="song" />
                                                    </figure>
                                                    <article className="cnt f-fvc f-bd f-bd-btm">
                                                        <h3 className="f-thide">大眠 (完整版)</h3>
                                                        <p className="sub f-thide">小乐哥  - 大眠 (完整版)</p>
                                                    </article>
                                                    <i className="play f-vc"></i>
                                                </li>
                                                <li className="itm">
                                                    <figure className="cover u-cover">
                                                        <img src="https://p1.music.126.net/rFUKVdOjqxgwAT6Zi6qv7A==/109951164906689206.jpg?imageView=1&amp;type=webp&amp;thumbnail=80x0" alt="song" />
                                                    </figure>
                                                    <article className="cnt f-fvc f-bd f-bd-btm">
                                                        <h3 className="f-thide">夏天的风</h3>
                                                        <p className="sub f-thide">火羊瞌睡了  - 夏天的风</p>
                                                    </article><i className="play f-vc">
                                                    </i>
                                                </li>
                                                <li className="itm">
                                                    <figure className="cover u-cover">
                                                        <img src="https://p1.music.126.net/DK1_4sP_339o5rowMdPXdw==/109951164071024476.jpg?imageView=1&amp;type=webp&amp;thumbnail=80x0" alt="song" />
                                                    </figure>
                                                    <article className="cnt f-fvc f-bd f-bd-btm">
                                                        <h3 className="f-thide">世间美好与你环环相扣</h3>
                                                        <p className="sub f-thide">柏松  - 听闻余生</p>
                                                    </article>
                                                    <i className="play f-vc"></i>
                                                </li>
                                            </ul>
                                        </div>
                                        <div id="m_comment" className="m_newcomm">
                                            <div className="m-talk m-talk-imm m-talk-song ">
                                                <div className="m-comments m-comments-black">
                                                    <h4 className="cmt_title">精彩评论</h4>
                                                    <div className="cmt_list">
                                                        <div className="cmt_item j-cmt_item_133768446">
                                                            <div className="cmt_head">
                                                                <a className="userphoto" href="/user/home?nickname=%E4%BD%A0%E4%BB%AC%E4%B8%8D%E9%85%8D%E5%92%8C%E6%88%91%E5%90%AC%E6%AD%8C">
                                                                    <img src="https://p1.music.126.net/pVRxWzeT13i4kSKmDNmROQ==/109951164781786629.jpg?imageView=1&amp;type=webp&amp;thumbnail=60x0" alt="" />
                                                                </a>
                                                            </div>
                                                            <div className="cmt_wrap f-bd f-bd-btm">
                                                                <div className="cmt_header">
                                                                    <div className="cmt_meta">
                                                                        <span className="cmt_user">
                                                                            <a className="nickname" href="/user/home?nickname=%E4%BD%A0%E4%BB%AC%E4%B8%8D%E9%85%8D%E5%92%8C%E6%88%91%E5%90%AC%E6%AD%8C">你们不配和我听歌</a>
                                                                            <i className="vip vip-annualfee"> </i>
                                                                        </span>
                                                                        <div className="cmt_time">
                                                                            <span>2016年3月25日</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cmt_like">
                                                                        <span className="cmt_likearea">
                                                                            <span className="cmt_count">38.5万</span>
                                                                            <i className="cmt_likeicn"></i>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="cmt_content ">
                                                                    <span className="cmt_text">老人拿手机去店里维修工作人员告诉他手机并没有坏老人突然哭了“那我的孩子们怎么不给我打电话”近期看过最心酸的一个段子…</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="cmt_item j-cmt_item_132612221">
                                                            <div className="cmt_head">
                                                                <a className="userphoto" href="/user/home?nickname=%E5%AF%92-%E9%BD%90%E5%A4%AA">
                                                                    <img src="https://p1.music.126.net/mgXnVPAfw8HpcpsAruGatw==/109951164284569905.jpg?imageView=1&amp;type=webp&amp;thumbnail=60x0" alt="" />
                                                                    <span className="ava-icon ava-icon-daren"></span>
                                                                </a>
                                                            </div>
                                                            <div className="cmt_wrap f-bd f-bd-btm">
                                                                <div className="cmt_header">
                                                                    <div className="cmt_meta">
                                                                        <span className="cmt_user">
                                                                            <a className="nickname" href="/user/home?nickname=%E5%AF%92-%E9%BD%90%E5%A4%AA">寒-齐太</a>
                                                                        </span>
                                                                        <div className="cmt_time">
                                                                            <span>2016年3月22日</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cmt_like">
                                                                        <span className="cmt_likearea">
                                                                            <span className="cmt_count">24.9万</span>
                                                                            <i className="cmt_likeicn"></i>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="cmt_content ">
                                                                    <span className="cmt_text">年度最佳温暖歌曲</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="cmt_item j-cmt_item_143836297">
                                                            <div className="cmt_head">
                                                                <a className="userphoto" href="/user/home?nickname=%E8%B5%B7%E5%90%8D%E5%AD%97%E8%BF%99%E4%B9%88%E7%B4%AF-">
                                                                    <img src="https://p1.music.126.net/lVVUfFA8dX4l6lHSFbpbVQ==/109951163092491607.jpg?imageView=1&amp;type=webp&amp;thumbnail=60x0" alt="" />
                                                                </a>
                                                            </div>
                                                            <div className="cmt_wrap f-bd f-bd-btm">
                                                                <div className="cmt_header">
                                                                    <div className="cmt_meta">
                                                                        <span className="cmt_user">
                                                                            <a className="nickname" href="/user/home?nickname=%E8%B5%B7%E5%90%8D%E5%AD%97%E8%BF%99%E4%B9%88%E7%B4%AF-">起名字这么累-</a>
                                                                        </span>
                                                                        <div className="cmt_time">
                                                                            <span>2016年4月20日</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cmt_like">
                                                                        <span className="cmt_likearea">
                                                                            <span className="cmt_count">24.8万</span>
                                                                            <i className="cmt_likeicn"></i>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="cmt_content ">
                                                                    <span className="cmt_text">刚好处在这个尴尬的年龄：心里会开始在关心爸妈，却不愿说出口；想多陪陪爸妈，却又无法控制自己经常去按手机玩电脑；知道爸妈想和自己说话，却不知道他们的话题要怎么接。看得到爸妈在变老心会疼，却仍不耐烦听他们过时的唠叨；但其实心里真的很爱他们，很想他们可以一直陪着我。</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="cmt_item j-cmt_item_219955490">
                                                            <div className="cmt_head">
                                                                <a className="userphoto" href="/user/home?nickname=%E5%B9%BF%E4%B8%9C%E6%9D%8E%E8%8D%A3%E6%B5%A9c">
                                                                    <img src="https://p1.music.126.net/KMP2JkgWTR-QpaBOaTBRzA==/109951163913992207.jpg?imageView=1&amp;type=webp&amp;thumbnail=60x0" alt="" />
                                                                </a>
                                                            </div>
                                                            <div className="cmt_wrap f-bd f-bd-btm">
                                                                <div className="cmt_header">
                                                                    <div className="cmt_meta">
                                                                        <span className="cmt_user">
                                                                            <a className="nickname" href="/user/home?nickname=%E5%B9%BF%E4%B8%9C%E6%9D%8E%E8%8D%A3%E6%B5%A9c">广东李荣浩c</a>
                                                                        </span>
                                                                        <div className="cmt_time">
                                                                            <span>2016年9月25日</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cmt_like">
                                                                        <span className="cmt_likearea">
                                                                            <span className="cmt_count">12.4万</span>
                                                                            <i className="cmt_likeicn"></i>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="cmt_content ">
                                                                    <span className="cmt_text">小时候总骗爸妈我没钱了  现在总骗爸妈没事我还有钱</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="cmt_item j-cmt_item_132673626">
                                                            <div className="cmt_head">
                                                                <a className="userphoto" href="/user/homenickname=%E4%BD%A0%E5%8F%AF%E4%BB%A5%E7%AB%99%E5%9C%A8%E6%88%91%E7%9A%84%E4%BC%9E%E4%B8%8B">
                                                                    <img src="https://p1.music.126.net/3ozppUBwdYVSPhiQgFJgUQ==/109951163767118914.jpg?imageView=1&amp;type=webp&amp;thumbnail=60x0" alt="" />
                                                                </a>
                                                            </div>
                                                            <div className="cmt_wrap f-bd f-bd-btm">
                                                                <div className="cmt_header">
                                                                    <div className="cmt_meta">
                                                                        <span className="cmt_user">
                                                                            <a className="nickname" href="/user/home?nickname=%E4%BD%A0%E5%8F%AF%E4%BB%A5%E7%AB%99%E5%9C%A8%E6%88%91%E7%9A%84%E4%BC%9E%E4%B8%8B">你可以站在我的伞下</a>
                                                                            <i className="vip vip-associator"></i>
                                                                        </span>
                                                                        <div className="cmt_time">
                                                                            <span>2016年3月22日</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cmt_like">
                                                                        <span className="cmt_likearea">
                                                                            <span className="cmt_count">11.8万</span>
                                                                            <i className="cmt_likeicn"></i>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="cmt_content ">
                                                                    <span className="cmt_text">老爸不在几年了。翻老照片，发现近几年回家漫不经心拍的照片，当时觉得拍得不好，都是废片，现在竟然都觉得珍贵，每一张都有沉甸甸的意义。所以每次回家，都要好好拍拍亲人。说不定哪一天，就不在了。</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="cmt_item j-cmt_item_132686383">
                                                            <div className="cmt_head">
                                                                <a className="userphoto" href="/user/home?nickname=afan715">
                                                                    <img src="https://p1.music.126.net/cXRh0XkceLHZHdd_JyFOYQ==/109951163457613943.jpg?imageView=1&amp;type=webp&amp;thumbnail=60x0" alt="" />
                                                                </a>
                                                            </div>
                                                            <div className="cmt_wrap f-bd f-bd-btm">
                                                                <div className="cmt_header">
                                                                    <div className="cmt_meta">
                                                                        <span className="cmt_user">
                                                                            <a className="nickname" href="/user/home?nickname=afan715">afan715</a>
                                                                        </span>
                                                                        <div className="cmt_time">
                                                                            <span>2016年3月22日</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cmt_like">
                                                                        <span className="cmt_likearea">
                                                                            <span className="cmt_count">76546</span>
                                                                            <i className="cmt_likeicn"></i>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="cmt_content ">
                                                                    <span className="cmt_text">去年和老爹吵了一架，第二天知道他快过生日了，刚好也发了助学金，买了皮带和一件西装给他，我给他礼物的时候我可以看到他眼睛湿润了，又是一年我依然没看见他穿我给他的西装，戴我给他的皮带，他一直都在悄悄藏着，过时也不丢掉</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="cmt_item j-cmt_item_222509481">
                                                            <div className="cmt_head">
                                                                <a className="userphoto" href="/user/home?nickname=%E6%AC%B2%E6%B8%A1%E4%BA%BA%E5%86%8D%E6%B8%A1%E5%B7%B1">
                                                                    <img src="https://p2.music.126.net/k3MftBG4ahxaDs5GDnfw1Q==/18753270324703702.jpg?imageView=1&amp;type=webp&amp;thumbnail=60x0" alt="" />
                                                                </a>
                                                            </div>
                                                            <div className="cmt_wrap f-bd f-bd-btm">
                                                                <div className="cmt_header">
                                                                    <div className="cmt_meta">
                                                                        <span className="cmt_user">
                                                                            <a className="nickname" href="/user/home?nickname=%E6%AC%B2%E6%B8%A1%E4%BA%BA%E5%86%8D%E6%B8%A1%E5%B7%B1">欲渡人再渡己</a>
                                                                        </span>
                                                                        <div className="cmt_time">
                                                                            <span>2016年10月1日</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cmt_like">
                                                                        <span className="cmt_likearea">
                                                                            <span className="cmt_count">74356</span>
                                                                            <i className="cmt_likeicn"></i>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="cmt_content ">
                                                                    <span className="cmt_text">我爸妈是文盲，庄稼人，人家说什么他们信什么，只有一件事他们不信，自己孩子比人家孩子差。</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="cmt_item j-cmt_item_134040352">
                                                            <div className="cmt_head">
                                                                <a className="userphoto" href="/user/home?nickname=%E8%BF%9C%E6%84%94-">
                                                                    <img src="https://p2.music.126.net/EcE8Fk_cepPBrcSAtK55VQ==/109951163937324786.jpg?imageView=1&amp;type=webp&amp;thumbnail=60x0" alt="" />
                                                                </a>
                                                            </div>
                                                            <div className="cmt_wrap f-bd f-bd-btm">
                                                                <div className="cmt_header">
                                                                    <div className="cmt_meta">
                                                                        <span className="cmt_user">
                                                                            <a className="nickname" href="/user/home?nickname=%E8%BF%9C%E6%84%94-">远愔-</a>
                                                                            <i className="vip vip-associator"></i>
                                                                        </span>
                                                                        <div className="cmt_time">
                                                                            <span>2016年3月25日</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cmt_like">
                                                                        <span className="cmt_likearea">
                                                                            <span className="cmt_count">64961</span>
                                                                            <i className="cmt_likeicn"></i>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="cmt_content ">
                                                                    <span className="cmt_text">想起了北大某学生的诗：
                                                                    我是使爸妈衰老的诸多事件之一
                                                                    职称、房贷、牛肉的价格
                                                                    我跻身其中，最为持久
                                                                    我是这对中年夫妻唯一相符的病症
                                                                    共同的疾患，二十三年来
                                                                    无时不在考验他们的婚姻
                                                                    我差不多就是耐性本身
                                                                    我是疲惫的侧面，谩骂的间歇
                                                                    我是流水中较大的那块石头
                                                                        将眼泪分成两份</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="cmt_item j-cmt_item_132713458">
                                                            <div className="cmt_head">
                                                                <a className="userphoto" href="/user/home?nickname=ChocoBaylor">
                                                                    <img src="https://p2.music.126.net/cBVpdQZ6rY31kHaFCYv1Cg==/109951163000555387.jpg?imageView=1&amp;type=webp&amp;thumbnail=60x0" alt="" />
                                                                </a>
                                                            </div>
                                                            <div className="cmt_wrap f-bd f-bd-btm">
                                                                <div className="cmt_header">
                                                                    <div className="cmt_meta">
                                                                        <span className="cmt_user">
                                                                            <a className="nickname" href="/user/home?nickname=ChocoBaylor">ChocoBaylor</a>
                                                                            <i className="vip vip-annualfee"></i>
                                                                        </span>
                                                                        <div className="cmt_time">
                                                                            <span>2016年3月22日</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cmt_like">
                                                                        <span className="cmt_likearea">
                                                                            <span className="cmt_count">51089</span>
                                                                            <i className="cmt_likeicn"></i>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="cmt_content ">
                                                                    <span className="cmt_text"></span>
                                                                    <a className="at" href="/user/home?nickname=%E6%9D%8E%E8%8D%A3%E6%B5%A9">@李荣浩</a>
                                                                    <span className="cmt_text"> 说这是他最难写的词，既不想煽情又要表达那种情感，最终完成那一瞬间他在微博叫大家跟他一起喊“耶”，可能他也觉得这首词太满意。既不煽情，又抒发了想表达的那种情感。</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="cmt_item j-cmt_item_132665843">
                                                            <div className="cmt_head">
                                                                <a className="userphoto" href="/user/home?nickname=%E4%BD%A0%E5%8F%AF%E4%BB%A5%E7%AB%99%E5%9C%A8%E6%88%91%E7%9A%84%E4%BC%9E%E4%B8%8B">
                                                                    <img src="https://p2.music.126.net/3ozppUBwdYVSPhiQgFJgUQ==/109951163767118914.jpg?imageView=1&amp;type=webp&amp;thumbnail=60x0" alt="" />
                                                                </a>
                                                            </div>
                                                            <div className="cmt_wrap f-bd f-bd-btm">
                                                                <div className="cmt_header">
                                                                    <div className="cmt_meta">
                                                                        <span className="cmt_user">
                                                                            <a className="nickname" href="/user/home?nickname=%E4%BD%A0%E5%8F%AF%E4%BB%A5%E7%AB%99%E5%9C%A8%E6%88%91%E7%9A%84%E4%BC%9E%E4%B8%8B">你可以站在我的伞下</a>
                                                                            <i className="vip vip-associator"></i>
                                                                        </span>
                                                                        <div className="cmt_time">
                                                                            <span>2016年3月22日</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cmt_like">
                                                                        <span className="cmt_likearea">
                                                                            <span className="cmt_count">47757</span>
                                                                            <i className="cmt_likeicn"></i>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="cmt_content ">
                                                                    <span className="cmt_text">在妈妈的眼里 所有的病起源都是因为不喝水 不吃青菜 不早早睡觉 可是我爱她啊</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="cmt_more_applink f-bd-top">
                                                        <span className="box">打开云音乐查看更多精彩评论</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="u-ft">
                                <div className="footer-wrap">
                                    <div className='open'>
                                        <button className='openbut'>打 开</button>
                                    </div>
                                    <span className="u-btn u-btn-red">下 载</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
