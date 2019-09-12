import { flowRight } from 'lodash'
import { navigate } from '@reach/router'
import { withApollo, graphql } from 'react-apollo'
import React from 'react'

import { Alert } from '../components/Alert'
import { currentUserQuery } from '../queries/user'

export const Authenticated = flowRight(
	withApollo,
	graphql(currentUserQuery)
)((props) => {
	const { loading, error, currentUser } = props.data

	if (loading) {
		return <>loading...</>
	}
	if (error) {
		return <Alert type="danger" msg={err} />
	}
	if (!currentUser) {
		navigate('/login')
		return null
	}

	return props.children
})
