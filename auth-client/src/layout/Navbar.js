import { flowRight } from 'lodash'
import { Link } from '@reach/router'
import { graphql, withApollo } from 'react-apollo'
import React from 'react'

import { currentUserQuery } from '../queries/user'

const LoggedInMenu = ({ user }) => (
	<ul className="navbar-nav ml-auto">
		<li className="nav-item">
			<Link className="nav-link" to="/logout">
				Logout ({user.email})
			</Link>
		</li>
	</ul>
)

const GuestMenu = () => (
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
)

const NavbarMarkup = (props) => (
	<nav className="navbar navbar-dark bg-primary navbar-expand-lg">
		<Link className="navbar-brand" to="/">
			<img
				alt="logo"
				className="app-logo"
				src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png"
			/>
		</Link>
		{props.data.currentUser ? <LoggedInMenu user={props.data.currentUser} /> : <GuestMenu />}
	</nav>
)

export const Navbar = flowRight(
	withApollo,
	graphql(currentUserQuery)
)(NavbarMarkup)
