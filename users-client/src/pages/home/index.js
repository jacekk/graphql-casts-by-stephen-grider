import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import { Home } from './Home'

const query = gql`
	{
		users {
			id
			name
			company {
				id
				name
			}
		}
	}
`

const mutation = gql`
	mutation DeleteUser($id: ID) {
		deleteUser(id: $id) {
			id
		}
	}
`

export const HomePage = graphql(mutation)(graphql(query)(Home))
