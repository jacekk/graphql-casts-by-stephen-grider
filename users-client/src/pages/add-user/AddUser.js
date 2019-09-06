import React from 'react'
import { navigate } from '@reach/router'

import { UserCreationForm } from '../../components/UserCreationForm'

export const AddUser = (props) => {
	const onFormSubmit = (variables) => {
		props
			.mutate({ variables })
			.then((resp) => {
				console.log('addUser success', resp)
				navigate('/')
			})
			.catch((err) => {
				console.error('addUser error', err)
			})
	}

	return (
		<div>
			<h3>User creation</h3>
			<UserCreationForm onSubmit={onFormSubmit} />
		</div>
	)
}
