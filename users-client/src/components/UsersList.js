import React from 'react'

export const UsersList = (props) => (
	<ol>
		{props.users.map((user) => (
			<li key={user.id}>
				{' '}
				| {user.id} | {user.name}
			</li>
		))}
	</ol>
)
