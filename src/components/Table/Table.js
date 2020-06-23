import React from 'react'

let dataset = require('../../employee_data.json')

const displayElems = (props) => {
	const body = Object.values(props.pass)
	const listItems = body.map((each) => (
		<tr>
			<th>{each.id}</th>
			<th>{each.first_name}</th>
			<th>{each.last_name}</th>
			<th>{each.department}</th>
			<th>{each.job_title}</th>
		</tr>
	))
	return <tbody>listItems</tbody>
}

const Table = () => {
	return (
		<table className="table">
			<thead>
				<tr>
					<th>id</th>
					<th>first name</th>
					<th>surname</th>
					<th>department</th>
					<th>title</th>
				</tr>
			</thead>
			<displayElems pass={dataset} />
		</table>
	)
}

export default Table
