import React from 'react'

import { Alert } from '../../components/Alert'

import './UserDetails.sass'

export const UserDetails = (props) => {
	const { error, user, loading } = props.data

	if (loading) {
		return <Alert type="info" msg="loading user data..." />
	}
	if (error) {
		return <Alert type="danger" msg={error} />
	}
	if (!user) {
		return <Alert type="danger" msg="Sth went wrong. User details cannot be displayed" />
	}

	return (
		<div className="card user-details__card">
			<div className="card-body">
				<h5 className="card-title">{user.name}</h5>
				<h6 className="card-subtitle mb-3 text-muted">ID: {user.id}</h6>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						Username: <b>{user.username}</b>
					</li>
					<li className="list-group-item">
						Typename: <b>{user.__typename}</b>
					</li>
				</ul>
			</div>
		</div>
	)
}
