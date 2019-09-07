import { withApollo } from 'react-apollo'
import { flowRight } from 'lodash'

import { Home } from './Home'

export const HomePage = flowRight(withApollo)(Home)
