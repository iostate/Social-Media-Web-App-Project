import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

  /**
   * A generalized function that renders JSX for Field components. 
   * @param {*} field Contains event handlers and other things for the component 
   * 	property of the Field component. The big picture is that field 
   * 	parameter CONNECTS the JSX that renders the Field component with 
   * 	the actual Field component. 
   */
  renderField(field) {
    // destructuring field.meta.touched and field.meta.error in order to clean up code
    const { meta: { touched, error } } = field;
    // className for the input fields
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        {
          // field.input contains event handlers and props. 
          // Any arbitrary properties passed into the Field
          // component will be passed to the input tag
          // using {...field.input}
        }
        <input 
          className="form-control"
          type="text"
          {...field.input}
        />
        {/* shows the error messages created in the validate fn */}
        <div className="text-help"> 
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    
    {/* this property is being passed to the component
    on behalf of redux form */}
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
      {
        // handleSubmit runs the redux form side of things, i.e., validating the form.
        // if the form is valid, then we call the onSubmit fn, which gives us the values to work with.
      }
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
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field 
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button className="btn btn-primary" type="submit">Submit</button>
        <Link className="btn btn-danger" to="/">Cancel</Link>
      </form> 
     
    );
  }
}

/**
 * Used to validate the input from the user. This function will be called
 * everytime a user attempts to validate a form.
 * @param {*} values 
 */
function validate(values) {
  // console.log(values); // --> { title: 'asdf', categories: 'asdf', content: 'asdf' } 
  const errors = {};

  // The properties of values come from name property of Field component 
  if ( !values.title ) {
    errors.title = "Enter a title";
  }
  if ( !values.categories ) {
    errors.categories = "Enter some categories";
  }
  if  (!values.content ) {
    errors.content = "Enter some content";
  }

  // If errors is empty, the form is OK for submittal
  // If errors has any properties, redux form assumes form is invalid
  return errors;
}


// Note: Make sure that string assigned to form is UNIQUE
// reduxForm is a decorator that CONNECTS your form to redux 
// It takes a function as a parameter. Configuration stuff goes inside the function.
 export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);