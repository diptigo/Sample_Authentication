
import React, { Component } from 'react';
import { observer } from 'mobx-react';

///
/// App
///
/// We create and export a constant named "App" which is the return value of a mobx function called "observer".
/// This function, in turn, is wrapping around our class named "BasePage", which represents the outermost
/// container of our application.  We won't render BasePage directly, because we want the mobx wrapper
/// function so that our page can watch our model for changes.  All of this is done more easily with
/// @decorator syntax, but that is not presently working in VS Code and I don't have time to sort it out :(
/// You can use the approach below *or* decorator syntax if you can get it working.
///
export const App = observer(

	class BasePage extends Component {

		/// 
		OnLogin = (e) => {

			this.props.model.Login();

		}

		///
		OnChangeEmailAddress = (e) => {

			// Extract value from the event object.
			const NewValue = e.target.value;
			
			// Update the model *directly* using a model method.
			this.props.model.SetEmailAddress(NewValue);

		}

		///
		OnChangePassword = (e) => {

			// Extract value from the event object.
			const NewValue = e.target.value;
			
			// Update the model *directly* using a model method.
			this.props.model.SetPassword(NewValue);

		}

		///
		render() {

			// Sample the current state.
			const EmailAddress = this.props.model.EmailAddress;
			const Password = this.props.model.Password;

			// Render JSX to visualize sampled state.
			return (

				<main>

					<div className="x-centered-y-centered-column">

						<input type="text" name="EmailAddress" onChange={this.OnChangeEmailAddress} />
						<input type="text" name="Password" onChange={this.OnChangePassword} />

					</div>

					<div style={{ marginTop:3 + "rem" }}>

						Email: {EmailAddress}<br/>
						PW: {Password}<br/>

					</div>

					<div style={{ marginTop:3 + "rem" }}>
						<button className="rectangular" onClick={this.OnLogin} >Login</button>
					</div>

				</main>

			);

		}

	}

);
