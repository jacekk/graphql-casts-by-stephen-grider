import React from 'react'

import { AuthForm } from '../../components/AuthForm'

export const Login = (props) => (
	<div>
		<AuthForm title="Login form" onSubmit={props.mutate} />
	</div>
)
