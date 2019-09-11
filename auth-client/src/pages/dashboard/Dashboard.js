import React from 'react'

export const Dashboard = (props) => {
	const { error, loading } = props.data

	if (loading) {
		return null
	}
	if (error) {
		return <Alert type="danger" msg={error} />
	}

	return (
		<div>
			<h3>Dashboard page</h3>
			<div>@todo list of all signed in users</div>
		</div>
	)
}
