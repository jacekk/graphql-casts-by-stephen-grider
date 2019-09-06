import React from 'react'

import { Alert } from '../../components/Alert'
import { UsersList } from '../../components/UsersList'

import './Home.sass'

export const Home = (props) => {
	const { loading, error, users } = props.data

	if (loading) {
		return <Alert type="light" msg="loading users data..." />
	}
	if (error) {
		return <Alert type="danger" msg={error} />
	}
	if (Array.isArray(users) && users.length) {
		return <UsersList users={users} removeUserMutate={props.mutate} />
	}

	return <span>No users yet :(</span>
}
