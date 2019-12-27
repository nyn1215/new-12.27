import React, { Component } from 'react'
import Swiper from 'swiper'
import {NavLink} from 'react-router-dom'

export default class view extends Component {
    componentDidMount(){
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
        })
    }

    state = {
        data:[
            [
                {
                    img:'./img/3.jpg',
                    name:'美食'
                },{
                    img:'./img/3.jpg',
                    name:'美食'
                },{
                    img:'./img/3.jpg',
                    name:'美食'
                },{
                    img:'./img/3.jpg',
                    name:'美食'
                },{
                    img:'./img/3.jpg',
                    name:'美食'
                },{
                    img:'./img/3.jpg',
                    name:'美食'
                },{
                    img:'./img/3.jpg',
                    name:'美食'
                },{
                    img:'./img/3.jpg',
                    name:'美食'
                },{
                    img:'./img/3.jpg',
                    name:'美食'
                },{
                    img:'./img/3.jpg',
                    name:'美食'
                }
            ],
            [
                {
                    img:'./img/3.jpg',
                    name:'美食'
                },{
                    img:'./img/3.jpg',
                    name:'美食'
                },{
                    img:'./img/4.jpg',
                    name:'美食'
                },{
                    img:'./img/5.jpg',
                    name:'美食'
                },{
                    img:'./img/10.jpg',
                    name:'美食'
                },{
                    img:'./img/10.jpg',
                    name:'美食'
                },{
                    img:'./img/10.jpg',
                    name:'美食'
                },{
                    img:'./img/10.jpg',
                    name:'美食'
                },{
                    img:'./img/10.jpg',
                    name:'美食'
                },{
                    img:'./img/9.jpg',
                    name:'美食'
                }
            ]
        ],
        data1:[
            {
                img:"./img/14.jpg",
                name:"北京全聚德",
                good:'北京人气蛋挞[一份]',
                price:'三元',
                price2:'门市价:6元',
                num:'113548'
            }, {
                img:"./img/14.jpg",
                name:"北京全聚德",
                good:'北京人气蛋挞[一份]',
                price:'三元',
                price2:'门市价:6元',
                num:'113548'
            }, {
                img:"./img/14.jpg",
                name:"北京全聚德",
                good:'北京人气蛋挞[一份]',
                price:'三元',
                price2:'门市价:6元',
                num:'113548'
            }, {
                img:"./img/14.jpg",
                name:"北京全聚德",
                good:'北京人气蛋挞[一份]',
                price:'三元',
                price2:'门市价:6元',
                num:'113548'
            }
        ]
    }

    render() {
        let {data,data1} = this.state
        return (
            <div className='home'>
                <header>
                    <span>
                        北京
                    </span>
                    <div className="cen">
                        <i className='iconfont icon-sousuo'></i>
                        <input type="text" placeholder='请输入商家' />
                    </div>
                    <span>
                        <i className='iconfont icon-wode'></i>
                    </span>
                </header>
                <section>
                    <img src="./img/13.jpg" alt="" />
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                        {
                            data.map((v,i)=>{
                                return <div className="swiper-slide" key={i}>
                                     <ul>
                                    {
                                        v.map((item,index)=>{
                                            return index == 0 && i == 0 ? <li key={index}>
                                            <NavLink to='/food'>                                            
                                            <img src={item.img} alt="" />
                                            <span>{item.name}</span>
                                            </NavLink>
                                            </li> : <li key={index}>
                                            <img src={item.img} alt="" />
                                            <span>{item.name}</span>
                                            </li>
                                             
                                        })
                                    }
                                    </ul>
                                </div>
                            })
                        }
                            
                                
                         </div>
                    </div>
                    <div className="main">
                        <p>
                            猜你喜欢
                        </p>
                        {
                            data1.map((v,i)=>{
                                return <div className="con" key={i}>
                                <div className="left">
                                <img src={v.img} alt=""/> 
                                </div>
                                <div className="right">
                                    <p>{v.name}</p>
                                    <p>{v.good}</p>
                                    <p>
                                        <span>
                                        <span>{v.price}</span>
                                        <span>{v.price2}</span>
                                        </span>
                                        <span>
                                            已售{v.num}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            })
                        }
                        
                    </div>        
                </section>
            </div>
        )
    }
}
