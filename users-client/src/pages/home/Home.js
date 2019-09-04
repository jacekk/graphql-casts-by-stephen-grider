import React from 'react'

export const Home = (props) => (
	<div>
		{Array.isArray(props.data.users) && (
			<ol>
				{props.data.users.map((user) => (
					<li key={user.id}>
						{' '}
						| {user.id} | {user.name}
					</li>
				))}
			</ol>
		)}
	</div>
)
