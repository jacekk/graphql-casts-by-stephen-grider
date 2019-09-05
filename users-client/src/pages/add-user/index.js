import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import { AddUser } from './AddUser'

const mutation = gql`
	mutation AddUser($name: String) {
		addUser(name: $name) {
			id
			name
		}
	}
`

export const AddUserPage = graphql(mutation)(AddUser)
