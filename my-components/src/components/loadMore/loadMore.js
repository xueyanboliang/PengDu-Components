import React, { PropTypes, Component } from 'react'
import Style from './loadMore.css'

class index extends Component{
    constructor(props){
        super(props)

    }

    onLoad(e){
        if(this.props.isLoading){
            return
        }
        this.props.onLoad()
    }

    render () {
        return (
            <a href="javascript:;"
               className={`${Style['pd-btn-loadmore']} ${this.props.isLoading?Style['pd-btn-loadmore-loading']:null}`}
               onClick={this.onLoad.bind(this)}>
                <span className={Style['pd-icon-label']}>
                    <i className={Style['pd-icon-loadmore']} />
                    {this.props.isLoading?'加载中...':'加载更多'}
                </span>
                <span className={Style['pd-btn-loadmore-inner']}  />
            </a>
        )
    }
}

index.propTypes = {
    isLoading: PropTypes.bool.isRequired,       //正在加载中？
    onLoad: PropTypes.func.isRequired           //加载回调
}

export default index