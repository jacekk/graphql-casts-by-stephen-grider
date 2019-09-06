import gql from 'graphql-tag'

export const fetchUsersQuery = gql`
	query fetchUsers {
		users {
			id
			name
		}
	}
`

export const addUserMutation = gql`
	mutation addUser($name: String!, $username: String!) {
		addUser(name: $name, username: $username) {
			id
			name
		}
	}
`

export const deleteUserMutation = gql`
	mutation deleteUser($id: Int!) {
		deleteUser(id: $id) {
			id
		}
	}
`
