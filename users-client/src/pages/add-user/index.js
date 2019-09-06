import { graphql, withApollo } from 'react-apollo'
import { flowRight } from 'lodash'

import { addUserMutation, fetchUsersQuery } from '../../queries/users'

import { AddUser } from './AddUser'

export const AddUserPage = flowRight(
	withApollo,
	graphql(addUserMutation, {
		options: {
			// @todo sometimes fails with:
			// OPTIONS http://localhost:4000/graphql net::ERR_CONNECTION_REFUSED
			awaitRefetchQueries: true,
			delayQuery: true,
			refetchQueries: () => [{ query: fetchUsersQuery, fetchPolicy: 'network-only' }],
		},
	})
)(AddUser)
