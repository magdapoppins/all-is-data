import React from 'react'
import './Menu.css'

const Menu = (props) => {
    return (
        <div className="topMenu">
            {props.topics.map(topic => 
                <h2 className="menuItem" onClick={() => props.selectTopic(topic)} key={topic.name}>{topic.name}</h2>)}
        </div>
    )
} 

export default Menu