import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Table from './components/Table'

let dataset = require('./employee_data.json')

class App extends Component {

	render() {
    console.log(dataset)
		return (
			<div>
				<div className="container">
					<Navbar />
					<Table />
				</div>
			</div>
		)
	}
}

export default App
