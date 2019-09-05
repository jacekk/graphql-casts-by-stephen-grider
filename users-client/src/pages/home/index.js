import { graphql } from 'react-apollo'

import { fetchUsersQuery } from '../../queries/users'

import { Home } from './Home'

export const HomePage = graphql(fetchUsersQuery)(Home)
