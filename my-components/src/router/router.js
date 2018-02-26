import React, { Component } from 'react'
import { HashRouter as Router, Route} from 'react-router-dom'
import Index from '../pages/Home/home'

class Routes extends Component {

    render () {
        return (
            <Router>
                <div>
                    <Route path="/" component={Index} />
                </div>
            </Router>
        );
    }
}


export default Routes;