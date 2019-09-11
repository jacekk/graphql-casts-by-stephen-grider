import { withApollo, graphql } from 'react-apollo'
import { flowRight } from 'lodash'

import { currentUserQuery } from '../../queries/user'

import { Dashboard } from './Dashboard'

export const DashboardPage = flowRight(
	withApollo,
	graphql(currentUserQuery) // @todo replace with sth else; like a list of all users
)(Dashboard)
