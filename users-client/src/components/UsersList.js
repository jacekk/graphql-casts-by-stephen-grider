import React from 'react'

import './UsersList.sass'

export const UsersList = (props) => (
	<ul className="list-group users-list__wrapper">
		{props.users.map((user) => (
			<li key={user.id} className="list-group-item d-flex justify-content-between">
				<span className="users-list__list-item-details d-flex align-items-center">
					{user.id} | {user.name}
				</span>
				<button type="button" class="btn btn-danger btn-sm" onClick={props.onRemoveClick}>
					✖
				</button>
			</li>
		))}
	</ul>
)
