import React from 'react'

import { UserCreationForm } from '../../components/UserCreationForm'

export const AddUser = (props) => {
	return (
		<div>
			<h3>User creation</h3>
			<UserCreationForm addUser={props.mutate} />
		</div>
	)
}
