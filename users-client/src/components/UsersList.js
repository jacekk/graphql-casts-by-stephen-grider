import React from 'react'

import './UsersList.sass'

export const UsersList = (props) => (
	<ul className="list-group users-list__wrapper">
		{props.users.map((user) => (
			<li key={user.id} className="list-group-item">
				{user.id} | {user.name}
			</li>
		))}
	</ul>
)
