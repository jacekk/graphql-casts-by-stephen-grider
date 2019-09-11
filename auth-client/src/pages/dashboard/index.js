import { withApollo, graphql } from 'react-apollo'
import { flowRight } from 'lodash'

import { currentUserQuery } from '../../queries/user'

import { Dashboard } from './Dashboard'

export const DashboardPage = flowRight(
	withApollo,
	graphql(currentUserQuery)
)(Dashboard)
