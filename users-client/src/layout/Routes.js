import { Router } from '@reach/router'
import React from 'react'

import { HomePage } from '../pages/home'

export const Routes = () => (
	<Router>
		<HomePage path="/" />
	</Router>
)
