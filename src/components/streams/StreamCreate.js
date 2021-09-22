// Field is a react component thats why its uppser case
// reduxForm is a function and will have the exact same functionality
// as the connect function that was used from the react redux library 
// it allows the access of some form data and happens automatically
// 


import React from 'react';
import { Field , reduxForm} from 'redux-form'

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




class StreamCreate extends React.Component {
    renderInput() {
        return <input /> 

    }
    render() {
        console.log(this.props)
        return (
            <form>
                <Field name="title" component={this.renderInput } /> 
                <Field name="description" component={this.renderInput} />
            </form>
        )
        
    }
};

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);