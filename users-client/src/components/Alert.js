import React from 'react'

export const Alert = ({ type = 'light', msg }) => (
	<div>
		<span className={`alert alert-${type}`}>{String(msg)}</span>
	</div>
)
