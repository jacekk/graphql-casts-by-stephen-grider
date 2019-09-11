import React from 'react'

import { AuthForm } from '../../components/AuthForm'

export const Signup = (props) => <AuthForm title="Signup form" onSubmit={props.mutate} />
