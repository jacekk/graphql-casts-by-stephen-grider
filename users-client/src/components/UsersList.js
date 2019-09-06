import React from 'react'
import { Link } from '@reach/router'

import './UsersList.sass'

const UserCompanyName = ({ user }) => <span className="text-muted ml-1 mr-1">{(user.company || {}).name || '-'}</span>

export const UsersList = (props) => (
	<ul className="list-group users-list__wrapper">
		{props.users.map((user) => (
			<li key={user.id} className="list-group-item d-flex justify-content-between">
				<Link className="users-list__list-item-details d-flex align-items-center" to={`/users/${user.id}`}>
					{user.id} | <UserCompanyName user={user} /> | {user.name}
				</Link>
				<button
					type="button"
					className="btn btn-danger btn-sm"
					onClick={(ev) => {
						const variables = { id: user.id }

						ev.preventDefault()
						props.removeUserMutate({ variables })
					}}
				>
					<i className="far fa-trash-alt"></i>
				</button>
			</li>
		))}
	</ul>
)
