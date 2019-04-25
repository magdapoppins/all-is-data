import React, { useState, useEffect } from 'react'
import Menu from './components/Menu'
// import axios from 'axios' Not used due to CORS problem (OPTIONS req)
import Content from './components/Content';

const App = () => {
	const dataSources = [
		{
			name: "temperature",
			url: "https://pxnet2.stat.fi:443/PXWeb/api/v1/fi/StatFin/ymp/lampo/statfin_lampo_pxt_001.px",
			requestBody: {
				method: "post", 
				body: {
					  	"query": [{
							"code": "Vuosi",
							"selection": {
								"filter": "item",
								"values": [
									"2010",
									"2011",
									"2012",
									"2013",
									"2014",
									"2015",
									"2016",
									"2017",
									"2018",
									"2019"
							  ]
							}
					  }],
					  "response": {
							"format": "json"
					  	}	
					}
			}
		}
	]

	const dataHook = () => {
		console.log("Using effect")
		console.log("Data looks like: ", data)
		fetch(dataSources[0].url, 
		{
			method: "post", 
			body: JSON.stringify({
  				"query": [{
						"code": "Vuosi",
						"selection": {
							"filter": "item",
							"values": [
								"2010",
								"2011",
								"2012",
								"2013",
								"2014",
								"2015",
								"2016",
								"2017",
								"2018",
								"2019"
						  ]
						}
				  }],
  				"response": {
    			"format": "json"
  				}
		})})
		.then(response => response.json())
		.then(json => {
				setData(
					data.concat({
						name: dataSources[0].name,
						data: json.data,
						chartType: "scatterPlot"
					})
				)
			}).then(console.log(data))
		console.log("Data looks like: ", data)
	}

	// UseEffect(effect, when to fire (empty array leads to firing only on first render))
	useEffect(dataHook, [])

	const dummyTopics = [
		{
			name: "sea",
			data: [12, 31, 22, 17, 25],
			chartType: "barChart"
		},
		{
			name: "lakes",
			data: [1, 2, 3],
			chartType: "barChart"
		},
		{
			name: "forests",
			data: [1, 2, 3],
			chartType: "barChart"
		},
		{
			name: "humans",
			data: [1, 2, 3],
			chartType: "barChart"
		},
		{
			name: "overview",
			data: [1, 2, 3],
			chartType: "barChart"
		}
	]

	// Use effects to fetch data on load and push it to the topics.
	const [data, setData] = useState(dummyTopics)
	const [selectedData, setSelectedData] = useState(data[0])

	const selectData = (newTopic) => {
		setSelectedData(newTopic)
	}

	return (
		<div>
			<Menu topics={data} selectTopic={selectData} />
			<Content topic={selectedData} />
		</div>
	)
}

export default App