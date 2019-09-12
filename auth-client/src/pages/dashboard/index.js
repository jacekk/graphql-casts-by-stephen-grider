import { withApollo, graphql } from 'react-apollo'
import { flowRight } from 'lodash'

import { allUsersQuery } from '../../queries/user'

import { Dashboard } from './Dashboard'

export const DashboardPage = flowRight(
	withApollo,
	graphql(allUsersQuery)
)(Dashboard)
