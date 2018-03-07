import React, { PropTypes, Component } from 'react'
import Style from './dialog.css'

class index extends Component{
    constructor(props){
        super(props)

    }

    onCancel(e){
        if(typeof this.props.onCancel === 'function' ){
            this.props.onCancel()
        }
    }

    onConfirm(e){
        if(typeof this.props.onConfirm === 'function' ){
            this.props.onConfirm()
        }
    }

    render(){

        var header = null;
        if(this.props.title){
            header = (
                <div className={Style['pd-dialog-header']}>{this.props.title}</div>
            )
        }

        var footer = null;
        if(this.props.isConfirm && this.props.isCancel){
            footer = (
                <div className={Style['pd-dialog-footer']}>
                    <a href="javascript:;" className={Style['pd-btn-dialog-cancel']} onClick={this.onCancel.bind(this)}>取消</a>
                    <a href="javascript:;" className={Style['pd-btn-dialog-confirm']} onClick={this.onConfirm.bind(this)}>确定</a>
                </div>
            )
        }else if(this.props.isConfirm){
            footer = (
                <div className={Style['pd-dialog-footer']}>
                    <a href="javascript:;" className={Style['pd-btn-dialog-confirm']} onClick={this.onConfirm.bind(this)}>确定</a>
                </div>
            )
        }else if(this.props.isCancel){
            footer = (
                <div className={Style['pd-dialog-footer']}>
                    <a href="javascript:;" className={Style['pd-btn-dialog-cancel']} onClick={this.onCancel.bind(this)}>取消</a>
                </div>
            )
        }

        return (
            <div>
                <div className={`${Style['pd-mask']} ${this.props.isShow?null:Style['pd-hidden']}`} onClick={this.onCancel.bind(this)}>
                </div>
                <div className={`${Style['pd-dialog']} ${this.props.isShow?Style['pd-dialog-show']:null}`}>
                    {header}
                    <div className={Style['pd-dialog-body']}>
                        {this.props.children}
                    </div>
                    {footer}
                </div>
            </div>
        )
    }
}

index.propTypes = {
    isShow: PropTypes.bool,                 //显示状态
    title: PropTypes.string,                //标题
    isConfirm: PropTypes.bool.isRequired,   //是否显示确认按钮
    isCancel: PropTypes.bool.isRequired,    //是否显示取消按钮
    onConfirm: PropTypes.func,              //确认事件回调
    onCancel: PropTypes.func                //取消事件回调
}

export default index