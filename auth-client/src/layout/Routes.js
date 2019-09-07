import { Router } from '@reach/router'
import React from 'react'

import { HomePage } from '../pages/home'
import { NotFound } from '../pages/NotFound'

export const Routes = () => (
	<Router>
		<HomePage path="/" />
		<NotFound default />
	</Router>
)
