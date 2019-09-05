import React from 'react'
import { navigate } from '@reach/router'

import { fetchUsersQuery } from '../queries/users'

const INPUT_PROPS = {
	autoComplete: 'off',
	className: 'form-control',
	type: 'text',
}

export class UserCreationForm extends React.Component {
	state = {
		email: '',
		name: '',
		phone: '',
		username: '',
		website: '',
		// @todo add address
		// @todo add company
	}

	onInputChange = (ev) => {
		const { name, value } = ev.target

		this.setState({
			[name]: String(value).trim(),
		})
	}

	onFormSubmit = (ev) => {
		ev.preventDefault()

		this.props
			.addUser({
				variables: this.state,
				refetchQueries: [{ query: fetchUsersQuery }],
			})
			.then(() => {
				setTimeout(() => {
					navigate('/')
				}, 10e3)
			})
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<div className="form-group">
					<input
						{...INPUT_PROPS}
						name="name"
						onChange={this.onInputChange}
						placeholder="Name"
						value={this.state.name}
					/>
				</div>
				<div className="form-group">
					<input
						{...INPUT_PROPS}
						name="username"
						onChange={this.onInputChange}
						placeholder="Username"
						value={this.state.username}
					/>
				</div>
				<div className="form-group">
					<input
						{...INPUT_PROPS}
						name="phone"
						onChange={this.onInputChange}
						placeholder="Phone"
						value={this.state.phone}
					/>
				</div>
				<div className="form-group">
					<input
						{...INPUT_PROPS}
						name="website"
						onChange={this.onInputChange}
						placeholder="Website"
						type="url"
						value={this.state.website}
					/>
				</div>
				<div className="form-group">
					<input
						{...INPUT_PROPS}
						name="email"
						onChange={this.onInputChange}
						placeholder="E-mail"
						type="email"
						value={this.state.email}
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		)
	}
}
