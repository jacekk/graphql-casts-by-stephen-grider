import React from 'react'

import { Alert } from '../../components/Alert'
import { UsersList } from '../../components/UsersList'

import './Home.sass'

export const Home = (props) => {
	if (props.data.loading) {
		return <span>loading users data ...</span>
	}
	if (props.data.error) {
		return <Alert type="danger" msg={props.data.error} />
	}
	if (Array.isArray(props.data.users)) {
		return <UsersList users={props.data.users} />
	}

	return <span>No users yet :(</span>
}
