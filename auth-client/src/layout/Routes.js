import { Router, Redirect } from '@reach/router'
import React from 'react'

import { DashboardPage } from '../pages/dashboard'
import { HomePage } from '../pages/home'
import { LoginPage } from '../pages/login'
import { NotFound } from '../components/NotFound'
import { ProfilePage } from '../pages/profile'
import { SignupPage } from '../pages/signup'

import { Authenticate } from './Authenticate'
import { Authenticated } from './Authenticated'

export const Routes = () => (
	<Router>
		<Authenticated path="/app">
			<DashboardPage path="/dashboard" />
			<NotFound default />
			<ProfilePage path="/profile" />
		</Authenticated>
		<Authenticate path="/">
			<HomePage path="home" default />
			<LoginPage path="login" />
			<SignupPage path="signup" />
		</Authenticate>
		<Redirect from="*" to="/app/dashboard" />
	</Router>
)
