import { Router } from '@reach/router'
import React from 'react'

import { AddUserPage } from '../pages/add-user'
import { HomePage } from '../pages/home'
import { NotFound } from '../pages/NotFound'

export const Routes = () => (
	<Router>
		<AddUserPage path="/users/add" />
		<HomePage path="/" />
		<NotFound default />
	</Router>
)
