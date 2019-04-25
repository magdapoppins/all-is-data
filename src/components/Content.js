import React, { Component } from 'react'
import BarChart from './BarChart'
import './Content.css'

class Content extends Component {
    render() {
        return (
            <div className="container">
                <h1>{this.props.topic.name}</h1>
                <BarChart data={this.props.topic.data} />
            </div> 
        )
    }
}

export default Content