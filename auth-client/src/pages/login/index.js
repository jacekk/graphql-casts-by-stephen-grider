import { withApollo } from 'react-apollo'
import { flowRight } from 'lodash'

import { Login } from './Login'

export const LoginPage = flowRight(withApollo)(Login)
