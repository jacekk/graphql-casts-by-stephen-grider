import { flowRight } from 'lodash'
import { withApollo, graphql } from 'react-apollo'

import { currentUserQuery } from '../../queries/user'
import { signupMutation } from '../../mutations/auth'

import { Signup } from './Signup'

export const SignupPage = flowRight(
	withApollo,
	graphql(signupMutation, {
		options: () => ({
			awaitRefetchQueries: true,
			delayQuery: true,
			refetchQueries: [{ query: currentUserQuery }],
		}),
	})
)(Signup)
