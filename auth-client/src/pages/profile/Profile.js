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
			<h3>Your profile</h3>
			<div>
				ID: <b>{currentUser.id}</b>
			</div>
			<div>
				Email: <b>{currentUser.email}</b>
			</div>
		</div>
	)
}
