import gql from 'graphql-tag'

export const logoutMutation = gql`
	mutation Logout {
		logout {
			id
			email
		}
	}
`

export const signupMutation = gql`
	mutation Signup($email: String!, $password: String!) {
		signup(email: $email, password: $password) {
			id
			email
		}
	}
`

export const loginMutation = gql`
	mutation Login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			id
			email
		}
	}
`
