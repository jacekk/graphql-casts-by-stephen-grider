import { graphql, withApollo } from 'react-apollo'
import { flowRight } from 'lodash'

import { fetchUserQuery } from '../../queries/users'

import { UserDetails } from './UserDetails'

export const UserDetailsPage = flowRight(
	withApollo,
	graphql(fetchUserQuery, {
		options: (props) => {
			const id = parseInt(props.id)

			return {
				variables: { id },
			}
		},
	})
)(UserDetails)
