import { flowRight } from 'lodash'
import { withApollo, graphql } from 'react-apollo'

import { loginMutation } from '../../mutations/auth'
import { Login } from './Login'

export const LoginPage = flowRight(
	withApollo,
	graphql(loginMutation)
)(Login)
