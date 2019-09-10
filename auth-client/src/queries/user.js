import gql from 'graphql-tag'

export const currentUserQuery = gql`
	query fetchCurrentUser {
		currentUser {
			id
			email
		}
	}
`
