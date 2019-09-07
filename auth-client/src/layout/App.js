import { ApolloProvider } from 'react-apollo'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { Link } from '@reach/router'
import ApolloClient from 'apollo-client'
import React from 'react'

import { Routes } from './Routes'
import './App.sass'

const dataIdFromObject = (o) => o.id
const cache = new InMemoryCache()
const link = new HttpLink({
	uri: 'http://localhost:4000/graphql',
})
const client = new ApolloClient({ cache, dataIdFromObject, link })

export const App = () => (
	<ApolloProvider client={client}>
		<div className="app-wrapper">
			<nav className="navbar navbar-dark bg-primary navbar-expand-lg">
				<Link className="navbar-brand" to="/">
					<img
						alt="logo"
						className="app-logo"
						src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png"
					/>
				</Link>
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<Link className="nav-link" to="/">
							Home
						</Link>
					</li>
				</ul>
			</nav>
			<main className="container app-main">
				<Routes />
			</main>
		</div>
	</ApolloProvider>
)
