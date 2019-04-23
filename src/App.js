import React, { useState } from 'react'
import Menu from './components/Menu'
import BarChart from './components/BarChart';
import Content from './components/Content';

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
			<Content topic={selectedTopic} />
		</div>
	)
}

export default App