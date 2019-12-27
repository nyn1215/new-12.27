import React, { Component } from 'react'
import $ from 'jquery'

export default class view extends Component {
    state = {
        data:[
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
            ],
            status:false,
            status1:false
    }    

    
    render() {
        let {data,data1,status,status1} = this.state
        return (
            <div className='food' ref='food' onScroll={(e)=>{
                if(e.target.scrollTop >= 240){
                    this.setState({
                        status1 : true,
                        status : true,
                    })
                }else if(e.target.scrollTop < 240 && e.target.scrollTop >= 140){
                    this.setState({
                        status1 : false,
                        status : true
                    })
                }else{
                    this.setState({
                        status1 : false,
                        status : false
                    })
                }
            }}>
                <header className={status ? 'on' : ''}>

                    <i className='iconfont icon-zuo'></i>
                    <div>
                        <i className='iconfont icon-sousuo'></i>
                        <span>请输入商家名，商品或商圈</span>
                    </div>
                    <i className='iconfont icon-wode'></i>
                </header>
                <section>
                <div className="mark" style={{ display:status1 ? 'block' : 'none'}} onClick={(e)=>{
                    
               }}>
                    置顶
                </div>
                    <img src="./img/file.png" alt=""/>
                    <ul>
                    {
                        data.map((v,i)=>{
                            return<li key={i}>
                                <img src={v.img} alt="" />
                                <span>{v.name}</span>
                            </li>
                        })
                    }
                    </ul>
                    <div className="main">
                        <div className={status1 ? 'nav-bar fixed' : 'nav-bar'}>
                            <div>
                                <span>全部类目</span>
                            </div>
                            <div>
                                <span>全部类目</span>
                            </div>
                            <div>
                                <span>全部类目</span>
                            </div>
                            <div>
                                <span>全部类目</span>
                            </div>
                        </div>
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
