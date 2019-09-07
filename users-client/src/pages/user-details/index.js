import { graphql, withApollo } from 'react-apollo'
import { flowRight } from 'lodash'

import { fetchUserQuery } from '../../queries/users'
import { setUserCompanyMutation } from '../../queries/companies'

import { UserDetails } from './UserDetails'

export const UserDetailsPage = flowRight(
	withApollo,
	graphql(fetchUserQuery, {
		options: (props) => ({
			variables: { id: parseInt(props.id) },
		}),
	}),
	graphql(setUserCompanyMutation)
)(UserDetails)
