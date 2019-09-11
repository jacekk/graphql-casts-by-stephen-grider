import { navigate } from '@reach/router'
import React from 'react'

export const Home = (props) => {
	const { currentUser } = props.data

	if (currentUser) {
		navigate('/dashboard')
		return null
	}

	return <div>Home page</div>
}
