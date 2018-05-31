import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

	/**
	 * A generalized function that renders JSX for various Field components. 
	 * Titles are dynamically rendered, and pulled from the props passed to the Field
	 * component. 
	 * @param {*} field Contains event handlers and other things for the component property of 
	 * 						the Field component of redux-form.CONNECTS the JSX that renders the Field component 
	 * 						with the actual Field component. 
	 */
	renderField(field) {
		return (
			<div className="form-group">
				<label>{field.label}</label>
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
				// 2 things needed for Field component: Name, component (textarea, input, radio, select)
				// Also can pass ARBITRARY PROPERTIES that will automatically get passed down 
			}
				<Field
					label="Title"
										name="title"
					component={this.renderField}
				/>
				<Field 
					label="Tags"
					name="tags"
					component={this.renderField}
				/>
				<Field 
					label="Post Content"
					name="content"
					component={this.renderField}
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