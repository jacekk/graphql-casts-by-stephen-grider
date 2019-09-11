import React from 'react'

export const Dashboard = (props) => {
	const { error, loading, allUsers } = props.data

	if (loading) {
		return <>loading...</>
	}
	if (error) {
		return <Alert type="danger" msg={error} />
	}
	if (!Array.isArray(allUsers)) {
		return <Alert type="danger" msg="Fetched data is not valid." />
	}

	return (
		<div>
			<h3>All signed in users:</h3>
			<ul className="list-group users-list__wrapper">
				{allUsers.map((user) => (
					<li key={user.id} className="list-group-item d-flex justify-content-between">
						{user.email}
						&nbsp;
						<span className="text-muted">[id: {user.id}]</span>
					</li>
				))}
			</ul>
		</div>
	)
}
