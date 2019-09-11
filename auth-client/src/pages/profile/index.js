import { withApollo, graphql } from 'react-apollo'
import { flowRight } from 'lodash'

import { currentUserQuery } from '../../queries/user'

import { Profile } from './Profile'

export const ProfilePage = flowRight(
	withApollo,
	graphql(currentUserQuery)
)(Profile)
