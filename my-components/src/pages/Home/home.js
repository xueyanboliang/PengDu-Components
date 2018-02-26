import React, { Component } from 'react'
import './home.css'
import title_image from './assets/hero.jpg'

class Index extends Component {
    render () {
        return (
            <div>
                <div className='title_img'>
                    <img className='img' src={title_image } alt='' />
                </div>
                <h3 className='title'>
                    你好react,
                    <span style={{color:'red'}}> 给你一个微笑</span>
                </h3>
            </div>
        )
    }
}

export default Index