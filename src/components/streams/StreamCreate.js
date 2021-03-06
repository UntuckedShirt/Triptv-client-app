// Field is a react component thats why its uppser case
// reduxForm is a function and will have the exact same functionality
// as the connect function that was used from the react redux library 
// it allows the access of some form data and happens automatically
// 


import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

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


class StreamCreate extends React.Component {

    
  
   
    // anytimethis is called. its called with an event obj (event)
    // whenever user ubmits form we validate inputs and if calid we call
    // onsbumit and the aciton createro on stream and attemptsto make requests
    // over to api server thats creatrs a stream through restful conventions

    onSubmit = formValues => {
        this.props.createStream(formValues);
    };

// onSubmit is th name of the prop we are passing to the form
// if we pass a function on the onSubmit prop down into form the func is called
// anytime form is submitted. this.props.onSubmit isa func proivded by redux form
// we then use our callback method we put inside of component
// when we go through processitll change how onsubmit is called
// interanlly redux form will hanle everything

    
render() {
    return (
        <div>
            <h3>Create a stream</h3>
            <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}


// below is  way to wrap connect and redux form


  
  export default connect(
    null,
    { createStream }
  )(StreamCreate)