/*
 * @Author: Hao 
 * @Date: 2017-03-10 14:49:15 
 * @Last Modified by: Hao
 * @Last Modified time: 2017-04-08 10:40:56
 */


import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import './home.scss'

import Banner from '../../components/Banner/banner'
import ArticalColumn from '../../components/Articals/ArticalColumn'
import RealTime from '../../components/RealTime/realTime'
import SideAd from '../../components/Advertisement/sideAd'

class Home extends React.Component {

    constructor(props){
        super(props)
        this.state={
            bigBanner: {
                title: '雄安抢房实录：巨额现金漏夜赶，唯恐错过悔“千年”',
                picture: 'https://imgs.bipush.com/article/cover/201704/03/081817023323.jpg?imageView2/1/w/959/h/720/|imageMogr2/strip/interlace/1/quality/85/format/jpg'
            },
            smallBanner: {
                    title: '7个小故事告诉你，当人工智能遇上医生会发生什么',
                    picture: 'https://imgs.bipush.com/article/cover/201704/04/184734979537.jpg?imageView2/1/w/462/h/351/|imageMogr2/strip/interlace/1/quality/85/format/jpg'
            },
            articals:[
                {
                    title:'解读恒大、万科、碧桂园年报，都在抢地、抢钱、抢人',
                    picture:'https://imgs.bipush.com/article/cover/201703/29/073737167548.jpg?imageView2/1/w/396/h/297/|imageMogr2/strip/interlace/1/quality/85/format/jpg',
                    subtitle: '能够拿到钱，而且是便宜的钱，就显得至关重要',
                },
                {
                    title:'智能终端Mac Pro 要做“模块化”？这很好，但可能和酷无关',
                    picture:'https://imgs.bipush.com/article/cover/201704/05/225410074289.jpg?imageView2/1/w/396/h/297/|imageMogr2/strip/interlace/1/quality/85/format/jpg',
                    subtitle: '“模块化”其实是个很容易歧义的词',
                },
                {
                    title:'车与出行 智能终端苹果GPU供应商股价一日蒸发65%！苹果自主研发GPU意图何在？',
                    picture:'https://imgs.bipush.com/article/cover/201611/11/073921944714.jpg?imageView2/1/w/396/h/297/|imageMogr2/strip/interlace/1/quality/85/format/jpg',
                    subtitle: '简单分析了苹果自主GPU的市场',
                },

            ],
            loadMore: '点击加载更多',
            news: [
                {
                    'title': '科学家发现章鱼能编辑自己的基因',
                    'info': '章鱼以聪明和适应能力强著称，现在科学家可能找到了章鱼之所以如此聪明的原因：它们能编辑自己的基因。DNA 是一种基因指令蓝图，RNA 则充当了翻译转录 DNA 指令的作用，帮助执行 DNA 指令。'
                },
                {
                    'title': '美国学生写百遍"黑人的命更重要"被斯坦福大学录取',
                    'info': '来自美国新泽西州普林斯顿的18岁孟加拉裔男孩济艾因在入学申请书中写了100遍“黑人的命更重要”而被斯坦福大学录取，引起网友争议。济艾在社交网络上传了自己的入学申请书和斯坦福大学的录取通知书的照片。'
                },
                {
                    'title': '黑客杂志“2600”悬赏1万美元获取特朗普纳税申报单',
                    'info': '黑客季刊杂志“2600”公开表示，悬赏1万美元以上的奖金以获得特朗普联邦纳税申报单，并于去年秋天发布了1万美元的悬赏信息。'
                },
                {
                    'title': '美国海关和边境保护局索要怼特朗普的账号信息，Twitter：我们不给',
                    'info': 'Twitter周四起诉美国政府，希望法院禁止其向该公司索要关于@ALT_uscis帐号的用户个人信息。该帐号是“另类美国公民及移民服务处”的简写，也是美国总统特朗普上台后出现的许多“另类”政府机构帐号中的一个，该帐号目前的粉丝超过4万。Twitter表示，美国海关和边境保护局一名探员上月向Twitter发出传票，向其索要该帐号的登录信息、电话号码、电子邮箱和IP地址。'
                }
            ],
            ads: [
                {
                    'thumb':'https://imgs.bipush.com/upload/zhuanti/20160714/ec521f68f241735921cfcf97dade0d84.png?|imageMogr2/strip/interlace/1/quality/85/format/jpg',
                    'content':'技术原创力2018世界杯我们“出线”了',
                },
                {
                    'thumb':'https://imgs.bipush.com/upload/zhuanti/20170407/102516861e3b0b94877dd9d39a66b9db.jpg?|imageMogr2/strip/interlace/1/quality/85/format/jpg',
                    'content':'处女座座驾•如果汽车有星座，处女座是不是可以',
                }
            ]
        }
    }

    buildArticalColumns(){
        return(
            this.state.articals.map((artical, index)=>{
                return(
                    <ArticalColumn key={index} artical={artical} />
                )
            })
        )
    }


    render(){
        const {bigBanner, smallBanner, articals, loadMore, news, ads}  = this.state
        return(
            <div className="home container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="banner row">
                            <div className="col-lg-8">
                                <Banner data={bigBanner}/>
                            </div>
                            <div className="col-lg-4">
                                <div className="small-banner">
                                    <Banner data={smallBanner}/>
                                </div>
                                <div className="small-banner bottom">
                                    <Banner data={smallBanner}/>
                                </div>
                            </div>
                        </div>
                        <div className="artical mt-2x">
                            {
                                this.buildArticalColumns()
                            }
                            <div className="load-more">
                                {loadMore}
                            </div> 
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <img className="ad-top" src="https://ubmcmm.baidustatic.com/media/v1/0f000nRNWcem8ij69vjyD6.jpg" />
                        <RealTime lists={news}/>
                        <SideAd lists={ads}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(Home);

export { Home as HomeNotConnected };

