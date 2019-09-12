import React, { useState } from 'react'

import { Alert } from '../components/Alert'

import './AuthForm.sass'

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
	const [submitError, setSubmitError] = useState(null)

	const onInputChange = (ev) => {
		const { name, value } = ev.target
		setFormValues({
			...formValues,
			[name]: String(value).trim(),
		})
	}

	const onFormSubmit = (ev) => {
		ev.preventDefault()
		setSubmitError(null)
		props.onSubmit({ variables: formValues }).catch((err) => {
			console.error(`error in ${props.title}:`, err)
			if (Array.isArray(err.graphQLErrors) && err.graphQLErrors[0]) {
				setSubmitError(err.graphQLErrors.map((item) => item.message).join(', '))
			} else {
				setSubmitError(err)
			}
		})
	}

	return (
		<div className="container auth-form__wrapper">
			<div className="row justify-content-md-center">
				<div className="col-12">
					<form onSubmit={onFormSubmit}>
						<h3>{props.title}</h3>
						{submitError && (
							<div>
								<br />
								<Alert type="danger" msg={submitError} />
								<br />
							</div>
						)}
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
			</div>
		</div>
	)
}
