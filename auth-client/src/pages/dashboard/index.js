import { withApollo } from 'react-apollo'
import { flowRight } from 'lodash'

import { Dashboard } from './Dashboard'

export const DashboardPage = flowRight(withApollo)(Dashboard)
