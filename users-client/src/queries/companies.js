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

export const setUserCompanyMutation = gql`
	mutation setUserCompany($userId: Int!, $companyId: Int) {
		setUserCompany(userId: $userId, companyId: $companyId) {
			id
			name
			company {
				id
				name
			}
		}
	}
`
