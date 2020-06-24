import React, { useState } from 'react'

let dataset = require('../../employee_data.json')

const DisplayElems = (props) => {
	// const body = Object.values(props.pass)
	console.log(props)
	const listItems = props.data.map((each) => (
		<tr key={each.id}>
			<th>{each.id}</th>
			<th>{each.first_name}</th>
			<th>{each.last_name}</th>
			<th>{each.department}</th>
			<th>{each.job_title}</th>
		</tr>
	))
	return <tbody>{listItems}</tbody>
}
const buttons = [
	{ text: 'id', key: 'id' },
	{ text: 'first name', key: 'first_name' },
	{ text: 'surname', key: 'last_name' },
	{ text: 'department', key: 'department' },
	{ text: 'title', key: 'job_title' },
]
const Table = () => {
	const [filteredData, setFilteredData] = useState(dataset)
	return (
		<table className="table">
			<thead>
				<tr>
					{buttons.map((button) => (
						<th key={button.key}>
							<button
								className="btn btn-primary"
								onClick={() => {
									setFilteredData((prevData) => {
										prevData.sort((a, b) => {
											if (a[button.key] < b[button.key]) {
												return -1
											} else if (a[button.key] > b[button.key]) {
												return 1
											} else {
												return 0
											}
										})
										return prevData.map((t) => t)
									})
								}}
							>
								{button.text}
							</button>
						</th>
					))}
				</tr>
			</thead>
			<DisplayElems data={filteredData} />
		</table>
	)
}

export default Table
