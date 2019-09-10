import { Link } from '@reach/router'
import React from 'react'

export const Navbar = () => (
	<nav className="navbar navbar-dark bg-primary navbar-expand-lg">
		<Link className="navbar-brand" to="/">
			<img
				alt="logo"
				className="app-logo"
				src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png"
			/>
		</Link>
		<ul className="navbar-nav ml-auto">
			<li className="nav-item">
				<Link className="nav-link" to="/signup">
					Sign up
				</Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" to="/login">
					Log in
				</Link>
			</li>
		</ul>
	</nav>
)
