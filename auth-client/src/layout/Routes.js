import { Router } from '@reach/router'
import React from 'react'

import { DashboardPage } from '../pages/dashboard'
import { HomePage } from '../pages/home'
import { LoginPage } from '../pages/login'
import { NotFound } from '../pages/NotFound'
import { SignupPage } from '../pages/signup'

export const Routes = () => (
	<Router>
		<DashboardPage path="/dashboard" />
		<HomePage path="/" />
		<LoginPage path="/login" />
		<NotFound default />
		<SignupPage path="/signup" />
	</Router>
)
