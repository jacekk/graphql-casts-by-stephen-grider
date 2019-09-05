import React from 'react'

export const Alert = ({ type = 'dark', msg }) => (
	<div>
		<span className={`alert alert-${type}`}>{String(msg)}</span>
	</div>
)
