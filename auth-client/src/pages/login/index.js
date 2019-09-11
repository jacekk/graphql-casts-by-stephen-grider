import { flowRight } from 'lodash'
import { withApollo, graphql } from 'react-apollo'

import { currentUserQuery } from '../../queries/user'
import { loginMutation } from '../../mutations/auth'

import { Login } from './Login'

export const LoginPage = flowRight(
	withApollo,
	graphql(loginMutation, {
		options: () => ({
			awaitRefetchQueries: true,
			delayQuery: true,
			refetchQueries: [{ query: currentUserQuery }],
		}),
	})
)(Login)
