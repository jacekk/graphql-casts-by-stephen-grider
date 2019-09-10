import { withApollo } from 'react-apollo'
import { flowRight } from 'lodash'

import { Signup } from './Signup'

export const SignupPage = flowRight(withApollo)(Signup)
