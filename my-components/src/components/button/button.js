import React, { Component } from "react"
import PropTypes  from "prop-types"
import './button.css'

class Button extends Component {
    // constructor (props) {
    //     super(props)
    // }
    componentDidMount() {
        // console.log(typeof this.props.icon)
    }
    render () {
        return (
            <button type='button'
             disabled= {this.props.disabled ? 'disabled' : ''} 
             className={`pd_button pd_button_${this.props.size} pd_button_${this.props.type} ${this.props.round ? 'is_round' : ''} ${this.props.disabled ? 'is_disabled' : ''}`}
             >
                { this.props.icon && <img src= {this.props.icon} alt=""/> }
                <span>{ this.props.children }</span>
            </button>
        )
    }
}

Button.defaultProps = {
    size: 'default',
    type: 'default',
    round: false,
    disabled: false,
    icon: ''
}
Button.propTypes = {
    size: PropTypes.string,
    type: PropTypes.string,
    round: PropTypes.bool,
    disabled: PropTypes.bool,
    icon: PropTypes.string
}

export default Button