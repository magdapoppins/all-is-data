import React, { Component } from 'react'
import * as d3 from 'd3'

export default class BarChart extends Component {

    componentDidMount() {
        const canvasHeight = 400
        const canvasWidth = 700

        const svg = d3.select(this.refs.canvas)
            .append("svg")
            .attr("width", canvasWidth)
            .attr("height", canvasHeight)
            
        svg.selectAll("rect")
            .data(this.props.data)
            .enter()
            .append("rect")
            .attr("x", (dataPointValue, index) => {
                return index * 60
            })
            .attr("y", (dataPointValue, index) => {
                return canvasHeight - dataPointValue * 10
            })
            .attr("width", 40)
            .attr("height", (dataPointValue, index) => {
                return dataPointValue * 10;
            })
            .attr("fill", "orange")
        
        svg.selectAll("text")
            .data(this.props.data)
            .enter()
            .append("text")
            .attr("x", (d, i) => i * 60)
            .attr("y", (d, i) => canvasHeight - 10 * d - 10)
            .text((d, i) => {
              return d
            })
    }
    
    // TODO clear canvas instead of pushing more stuff everytime component updates
    componentDidUpdate() {
        const canvasHeight = 400
        const canvasWidth = 700

        const svg = d3.select(this.refs.canvas)
            .append("svg")
            .attr("width", canvasWidth)
            .attr("height", canvasHeight)
            
        svg.selectAll("rect")
            .data(this.props.data)
            .enter()
            .append("rect")
            .attr("x", (dataPointValue, index) => {
                return index * 60
            })
            .attr("y", (dataPointValue, index) => {
                return canvasHeight - dataPointValue * 10
            })
            .attr("width", 40)
            .attr("height", (dataPointValue, index) => {
                return dataPointValue * 10;
            })
            .attr("fill", "orange")
        
        svg.selectAll("text")
            .data(this.props.data)
            .enter()
            .append("text")
            .attr("x", (d, i) => i * 60)
            .attr("y", (d, i) => canvasHeight - 10 * d - 10)
            .text((d, i) => {
              return d
            })
    }

    render() {
        console.log(this.props.data)
            return (
                <div ref="canvas"></div>
            )
    }
}