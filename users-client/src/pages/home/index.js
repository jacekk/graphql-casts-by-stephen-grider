import { graphql, withApollo } from 'react-apollo'
import { flowRight } from 'lodash'

import { fetchUsersQuery, deleteUserMutation } from '../../queries/users'

import { Home } from './Home'

export const HomePage = flowRight(
	withApollo,
	graphql(fetchUsersQuery),
	graphql(deleteUserMutation, {
		options: () => ({
			awaitRefetchQueries: true,
			delayQuery: true,
			refetchQueries: [{ query: fetchUsersQuery }],
		}),
	})
)(Home)
