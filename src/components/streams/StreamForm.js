// Field is a react component thats why its uppser case
// reduxForm is a function and will have the exact same functionality
// as the connect function that was used from the react redux library 
// it allows the access of some form data and happens automatically
// 


import React from 'react';
import { Field, reduxForm } from 'redux-form';



// below willshow the form and make use of redux form
// a Field is some type of input text, dropdown etc
// whenever we place a field tag its alwats proivded some number of props
// name prop is the name of the property this field is goingto manage
// a field doesnt know how to show a text inout or a text box
// its jsut a compoienent thats going to be part of the system thatll
// handle all the forms you put together, but not individually responble
// for putting anything on the screen
// ---------------------------------------------------------------//

// in order to tell Field how to show text inout you assign aprop called component
// this comp or function needs to return an ele thatll be returned on the screen
// you would reutnr an input from whatever function we pass to the component
// prop. Anyime we showan inout ele we always are supposed ot make sure we show 
// that input ele and assign that value property and callback handler
// form props input property itll take all the key value pairs and add them ass 
// properties to the input elemtnt
// as a way of shortning syntax further we can destructure the input argument
// out of the form props obj return <input {...input} /> 
// anyyimte we add props to our field compoent redux-form sees that a prop was passed in
// and has no diea what to do. So we can add additional props to the firld element


class StreamForm extends React.Component {
    renderError({ error, touched }) {
      if (touched && error) {
        return (
          <div className="ui error message">
            <div className="header">{error}</div>
          </div>
        );
      }
    }
  
    renderInput = ({ input, label, meta }) => {
      const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
      return (
        <div className={className}>
          <label>{label}</label>
          <input {...input} autoComplete="off" />
          {this.renderError(meta)}
        </div>
      );
    };
    // anytimethis is called. its called with an event obj (event)
    // whenever user ubmits form we validate inputs and if calid we call
    // onsbumit and the aciton createro on stream and attemptsto make requests
    // over to api server thats creatrs a stream through restful conventions
    // we dont want streamForm to handle submission. StreamForm should pass down some props

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
      };

// onSubmit is th name of the prop we are passing to the form
// if we pass a function on the onSubmit prop down into form the func is called
// anytime form is submitted. this.props.onSubmit isa func proivded by redux form
// we then use our callback method we put inside of component
// when we go through processitll change how onsubmit is called
// interanlly redux form will hanle everything

    
render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
    const errors = {};
  
    if (!formValues.title) {
      errors.title = 'You must enter a title';
    }
  
    if (!formValues.description) {
      errors.description = 'You must enter a description';
    }
  
    return errors;
  };


// below is  way to wrap connect and redux form
// streamForm does not need to call an action creator. Itll be a parent ocmponent
// thatll call some action creator

export default reduxForm({
    form: 'streamForm',
    validate
  })(StreamForm);