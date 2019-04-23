import React, { useState } from 'react'
import Menu from './components/Menu'
import BarChart from './components/BarChart';

const App = () => {
	const topics = [
		{
			name: "sea",
			data: [12, 31, 22, 17, 25, 18, 29, 14, 9],
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
	const [selectedTopic, setSelectedTopic] = useState(topics[0])

	const selectTopic = (newTopic) => {
		console.log(newTopic)
		setSelectedTopic(newTopic)
	}

	return (
		<div>
			<Menu topics={topics} selectTopic={selectTopic} />
			<div>
				<h1>{selectedTopic.name}</h1>
				<BarChart data={selectedTopic.data} />
			</div> 
		</div>
	)
}

export default App