import { withApollo, graphql } from 'react-apollo'
import { flowRight } from 'lodash'

import { currentUserQuery } from '../../queries/user'

import { Home } from './Home'

export const HomePage = flowRight(
	withApollo,
	graphql(currentUserQuery)
)(Home)
