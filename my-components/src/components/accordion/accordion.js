import React, { PropTypes, Component } from 'react'
import Style from './accordion.css'


class index extends Component{
    constructor(props){
        super(props)

        this.state = {
            opens: [],
            heights: []
        }
    }

    componentDidMount(){
        if(this.props.defaultIndex>0){
            this.state.opens.push(this.props.defaultIndex)
            this.forceUpdate()
        }


        var elements = document.getElementsByClassName(Style['pd-accordion-body-inner'])

        for(var i=0; i<elements.length; i++){
            this.state.heights.push(
                elements[i].clientHeight
            )
        }
    }

    onToggle(value){
        if(typeof this.props.onToggle === 'function'){
            this.props.onToggle(value)
        }
        if(this.props.isOnly){
            var opened = this.state.opens.pop()
            if(opened!==value){
                this.state.opens.push(value)
            }
        }else{
            var index = this.state.opens.indexOf(value)
            if(index>-1){
                this.state.opens.splice(index, 1)
            }else{
                this.state.opens.push(value)
            }
        }

        this.forceUpdate()
    }

    render(){
        return (
            <div className={Style['pd-accordion']}>
                {
                    this.props.children.map(function(item, index){
                        return (
                            <div  key={`${'accordion-'}${index}`} className={Style['pd-accordion-item']}>
                                <a href="javascript:;"
                                   className={Style['pd-btn-accordion']}
                                   onClick={this.onToggle.bind(this,index)}>
                                    <i className={`${Style['pd-ico']} ${this.state.opens.indexOf(index)>-1?Style['pd-ico-open']:null}`} />
                                    {item.props.title}
                                </a>
                                <div className={Style['pd-accordion-body']} style={this.state.opens.indexOf(index)>-1?{height: this.state.heights[index]+'px'}:null}>
                                    <div className={Style['pd-accordion-body-inner']}>
                                        {item.props.children}
                                    </div>
                                </div>
                            </div>
                        )
                    }, this)
                }
            </div>
        )
    }
}

index.propTypes = {
    defaultIndex: PropTypes.number,          //当前展开项
    isOnly: PropTypes.bool.isRequired,       //是否值展开一项
    onToggle: PropTypes.func                 //切换展开回调
}

index.AccordionPanel = class panel extends Component{
    constructor(props){
        super(props)
        this.propTypes = {

        }
    }
}

export default index