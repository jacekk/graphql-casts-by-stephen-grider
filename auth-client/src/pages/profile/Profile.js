import { navigate } from '@reach/router'
import React from 'react'

export const Profile = (props) => {
	const { currentUser, error, loading } = props.data

	if (loading) {
		return null
	}
	if (error) {
		return <Alert type="danger" msg={error} />
	}
	if (!currentUser) {
		navigate('/')
		return null
	}

	return (
		<div>
			<h3>Profile page</h3>
			<div>
				Your email is: <b>{currentUser.email}</b>
			</div>
		</div>
	)
}
