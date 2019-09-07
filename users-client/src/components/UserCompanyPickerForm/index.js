import { flowRight } from 'lodash'
import { graphql, withApollo } from 'react-apollo'

import { fetchCompaniesQuery } from '../../queries/companies'

import { UserCompanyPicker } from './UserCompanyPicker'

export const UserCompanyPickerForm = flowRight(
	withApollo,
	graphql(fetchCompaniesQuery)
)(UserCompanyPicker)
