import gql from 'graphql-tag'

export const fetchCompaniesQuery = gql`
	query fetchCompanies {
		companies {
			id
			name
			market
			catchPhrase
		}
	}
`
