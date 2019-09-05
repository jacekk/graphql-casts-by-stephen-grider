import gql from 'graphql-tag'

export const fetchUsersQuery = gql`
	{
		users {
			id
			name
		}
	}
`

export const addUserMutation = gql`
	mutation AddUser($name: String!, $username: String!) {
		addUser(name: $name, username: $username) {
			id
			name
		}
	}
`

export const deleteUserMutation = gql`
	mutation DeleteUser($id: ID) {
		deleteUser(id: $id) {
			id
		}
	}
`
