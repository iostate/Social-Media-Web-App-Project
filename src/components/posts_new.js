import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

	/**
	 * Renders JSX for the Field component. 
	 * @param {*} field Contains event handlers and other things for the component property of 
	 * 						the Field component of redux-form.CONNECTS the JSX that renders the Field component 
	 * 						with the actual Field component. 
	 */
	renderFieldComponent(field) {
		return (
			<div className="form-group">
				<label>Title</label>
				{
					// field.input contains event handlers and props
				}
				<input 
					className="form-control"
					type="text"
					{...field.input}
				/>
			</div>
		);
	}


	render() {
		return (
			<form>
			{
				// https://redux-form.com/7.3.0/docs/api/field.md/ 
				// 2 things needed for Field component: Name, component (textarea, input, radio, select), 
			}
				<Field
					name="title"
					component={this.renderFieldComponent}
				/>
			</form>
		);
	}
}
// ensure that the string you assign to form is unique
// Creates a decorator with which you use redux-form to connect your form component to Redux. 
// It takes a config parameter which lets you configure your form.
export default reduxForm({
	form: 'PostsNewForm'
})(PostsNew);