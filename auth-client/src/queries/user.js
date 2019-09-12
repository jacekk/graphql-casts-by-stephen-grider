import gql from 'graphql-tag'

export const currentUserQuery = gql`
	query fetchCurrentUser {
		currentUser {
			id
			email
		}
	}
`

export const allUsersQuery = gql`
	query fetchAllUsers {
		allUsers {
			id
			email
		}
	}
`
