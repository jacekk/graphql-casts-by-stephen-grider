import { Router } from '@reach/router'
import React from 'react'

import { AddUserPage } from '../pages/add-user'
import { HomePage } from '../pages/home'
import { NotFound } from '../pages/NotFound'
import { UserDetailsPage } from '../pages/user-details'

export const Routes = () => (
	<Router>
		<AddUserPage path="/users/add" />
		<UserDetailsPage path="/users/:id" />
		<HomePage path="/" />
		<NotFound default />
	</Router>
)
