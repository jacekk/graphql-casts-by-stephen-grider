import { flowRight } from 'lodash'
import { graphql, withApollo } from 'react-apollo'
import { Link, navigate } from '@reach/router'
import React from 'react'

import { currentUserQuery } from '../queries/user'
import { logoutMutation } from '../mutations/auth'

const LoggedInMenu = ({ user, onLogout }) => (
	<ul className="navbar-nav ml-auto">
		<li className="nav-item">
			<Link className="nav-link" to="/app/dashboard">
				Dashboard
			</Link>
		</li>
		<li className="nav-item">
			<Link className="nav-link" to="/app/profile">
				Profile
			</Link>
		</li>
		<li className="nav-item">
			<a href="#" className="nav-link" onClick={onLogout}>
				Logout [{(user || {}).email || '!no-email!'}]
			</a>
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

const NavbarMarkup = (props) => {
	const { loading, error, currentUser } = props.data

	if (loading) {
		return null
	}
	if (error) {
		return <Alert type="danger" msg={error} />
	}

	const onLogoutClick = (ev) => {
		ev.preventDefault()
		props
			.mutate()
			.then(() => {
				navigate('/')
			})
			.catch((err) => {
				console.error('on logout', err)
			})
	}

	return (
		<nav className="navbar navbar-dark bg-primary navbar-expand-lg">
			<Link className="navbar-brand" to="/">
				<img
					alt="logo"
					className="app-logo"
					src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png"
				/>
			</Link>
			{currentUser ? <LoggedInMenu user={currentUser} onLogout={onLogoutClick} /> : <GuestMenu />}
		</nav>
	)
}

export const Navbar = flowRight(
	withApollo,
	graphql(currentUserQuery),
	graphql(logoutMutation, {
		options: () => ({
			// @todo check whether all `awaitRefetchQueries` and `delayQuery` are necessary
			awaitRefetchQueries: true,
			delayQuery: true,
			refetchQueries: [{ query: currentUserQuery }],
		}),
	})
)(NavbarMarkup)
