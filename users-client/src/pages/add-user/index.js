import { graphql, withApollo } from 'react-apollo'
import { flowRight } from 'lodash'

import { addUserMutation, fetchUsersQuery } from '../../queries/users'

import { AddUser } from './AddUser'

export const AddUserPage = flowRight(
	withApollo,
	graphql(addUserMutation, {
		options: () => ({
			awaitRefetchQueries: true,
			delayQuery: true,
			refetchQueries: () => [{ query: fetchUsersQuery }],
		}),
	})
)(AddUser)
