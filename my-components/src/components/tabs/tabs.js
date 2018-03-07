import React, { Component, PropTypes } from 'react'
import Style from './tabs.css'

class index extends Component{
    constructor(props){
        super(props)

        this.state = {
            activeIndex: 0
        }
    }

    componentDidMount(){
        if(this.props.defaultIndex){
            this.setState({
                activeIndex: this.props.defaultIndex
            })
        }
    }

    onTab(index){
        if(index==this.props.activeIndex){
            return;
        }
        if(typeof this.props.onTab === 'function'){
            this.props.onTab(index)
        }
        this.setState({
            activeIndex: index
        })
    }

    render(){
        var slideStyle = { }
        slideStyle.width = 100/this.props.children.length + '%'
        slideStyle.left = this.state.activeIndex * 100/this.props.children.length + '%'

        var bodyContentStyle = {}
        bodyContentStyle.transform = 'translate(-' + slideStyle.left + ',0%)'
        bodyContentStyle.width = 100 * this.props.children.length + '%'

        var panelStyle = {}
        panelStyle.width = 100/this.props.children.length + '%'

        return (
            <div>
                <div className={Style['pd-tabs']}>
                    {
                        this.props.children.map(function (item, index) {
                            return (
                                <a key={'tab-header-'+index} href="javascript:;"
                                   className={Style['pd-tab-item']+' '+(index==this.state.activeIndex?Style['pd-tab-item-active']:'')}
                                   onClick={this.onTab.bind(this,index)}
                                >{item.props.title}</a>
                            )
                        },this)
                    }
                    <div className={`${Style['pd-slide']} ${this.props.isTransition?Style['pd-transition']:''}`} style={slideStyle}></div>
                </div>
                <div className={Style['pd-body']}>
                    <div className={`${Style['pd-body-content']} ${this.props.isTransition?Style['pd-transition']:''}`} style={bodyContentStyle}>
                        {
                            this.props.children.map(function (item, index) {
                                return (
                                    <div className={Style['pd-tab-panel']} style={panelStyle}>
                                        {item.props.children}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}


index.TabPanel = class tabPanel extends Component{
    constructor(props){
        super(props)
    }
}

index.propTypes = {
    isTransition: PropTypes.bool,               //是否开启动画
    defaultIndex: PropTypes.number,             //当前激活项
    onTab: PropTypes.func                       //tab事件回调
}

export default index