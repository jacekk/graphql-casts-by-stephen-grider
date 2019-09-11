import React, { useState } from 'react'
import { navigate } from '@reach/router'

const INPUT_PROPS = {
	autoComplete: 'off',
	className: 'form-control',
	type: 'text',
}

export const AuthForm = (props) => {
	const [formValues, setFormValues] = useState({
		email: '',
		password: '',
	})

	const onInputChange = (ev) => {
		const { name, value } = ev.target
		setFormValues({
			...formValues,
			[name]: String(value).trim(),
		})
	}

	const onFormSubmit = (ev) => {
		ev.preventDefault()
		props
			.onSubmit({ variables: formValues })
			.then((resp) => {
				navigate('/dashboard')
			})
			.catch((err) => {
				console.error(`error in ${props.title}:`, err)
			})
	}

	return (
		<div>
			<h3>{props.title}</h3>
			<form onSubmit={onFormSubmit}>
				<div className="form-group">
					<input
						{...INPUT_PROPS}
						name="email"
						onChange={onInputChange}
						placeholder="Email"
						value={formValues.email}
					/>
				</div>
				<div className="form-group">
					<input
						{...INPUT_PROPS}
						name="password"
						onChange={onInputChange}
						placeholder="Password"
						type="password"
						value={formValues.password}
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	)
}
