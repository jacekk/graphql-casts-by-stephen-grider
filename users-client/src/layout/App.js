import { Link } from '@reach/router'
import React from 'react'

// import { Routes } from './Routes'
import './App.sass'

export const App = () => (
	<div>
		<header>
			<img className="app-logo" src="https://via.placeholder.com/100x100?text=clients" alt="logo" />
			<nav className="app-menu">
				<Link to="/">Clients list</Link>
				<Link to="/add">Add new client</Link>
			</nav>
		</header>
		<main className="app-main">Routes</main>
	</div>
)
