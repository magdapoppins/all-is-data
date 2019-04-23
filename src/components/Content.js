import React from 'react'
import BarChart from './BarChart'
import './Content.css'

const Content = (props) => {

    return (
        <div className="container">
            <h1>{props.topic.name}</h1>
            <BarChart data={props.topic.data} />
        </div> 
    )
}

export default Content