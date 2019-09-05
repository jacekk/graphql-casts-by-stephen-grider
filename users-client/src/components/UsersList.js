import React from 'react'

export const UsersList = (props) => (
	<ul className="list-group">
		{props.users.map((user) => (
			<li key={user.id} className="list-group-item">
				{user.id} | {user.name}
			</li>
		))}
	</ul>
)
