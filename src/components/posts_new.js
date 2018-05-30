import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

	render() {
		return (
			<form>
			// https://redux-form.com/7.3.0/docs/api/field.md/ 
			// 2 things needed for Field component: Name, component (textarea, input, radio, select), 
				<Field 
					name="title"
					component={}
				/>
			</form>
		);
	}
}
// ensure that the string you assign to form is unique
export default reduxForm({
	form: 'PostsNewForm'
})(PostsNew);