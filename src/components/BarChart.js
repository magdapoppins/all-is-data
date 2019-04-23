import React, { Component } from 'react'
import * as d3 from 'd3'

export default class BarChart extends Component {
    render() {
        const data = this.props.data
        const svg = d3.select("body")
            .append("svg")
            .attr("width", 700)
            .attr("height", 300);
                   
        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => 20 - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d * 10)
            .attr("fill", "green")

        return <div></div>
    }
}