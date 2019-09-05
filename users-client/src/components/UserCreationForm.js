import React from 'react'

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
		console.log('onFormSubmit', this.state)
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<div className="form-group">
					<input
						className="form-control"
						name="name"
						onChange={this.onInputChange}
						placeholder="Name"
						type="text"
						value={this.state.name}
					/>
				</div>
				<div className="form-group">
					<input
						className="form-control"
						name="username"
						onChange={this.onInputChange}
						placeholder="Username"
						type="text"
						value={this.state.username}
					/>
				</div>
				<div className="form-group">
					<input
						className="form-control"
						name="phone"
						onChange={this.onInputChange}
						placeholder="Phone"
						type="text"
						value={this.state.phone}
					/>
				</div>
				<div className="form-group">
					<input
						className="form-control"
						name="website"
						onChange={this.onInputChange}
						placeholder="Website"
						type="url"
						value={this.state.website}
					/>
				</div>
				<div className="form-group">
					<input
						className="form-control"
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
