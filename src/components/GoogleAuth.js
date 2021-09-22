// 30741193357-p63go3ag8oh2qlcv3v2ssa8bq3q080t7.apps.googleusercontent.com

import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '30741193357-p63go3ag8oh2qlcv3v2ssa8bq3q080t7.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
            this.auth = window.gapi.auth2.getAuthInstance();
            
            this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

    // below was wired to the google api library with the isSignIn listen call
    // at present we are getting a call from the this.Auth.isSignIn.get
    // it gets called with a boolean of true or

    onAuthChange = isSignedIn => {
        if (isSignedIn) {
          this.props.signIn(this.auth.currentUser.get().getId());
        } else {
          this.props.signOut();
        }
      };

    // onSignIn is supposed ot be calledw hen the user is attempting to sign in
    // itll be a funcional call when the sign out button is clicked

    onSignInClick = () => {
        this.auth.signIn();
      };
    
      onSignOutClick = () => {
        this.auth.signOut();
      };
    
      renderAuthButton() {
        if (this.props.isSignedIn === null) {
          return null;
        } else if (this.props.isSignedIn) {
          return (
            <button onClick={this.onSignOutClick} className="ui red google button">
              <i className="google icon" />
              Sign Out
            </button>
          );
        } else {
          return (
            <button onClick={this.onSignInClick} className="ui red google button">
              <i className="google icon" />
              Sign In with Google
            </button>
          );
        }
      }
    
      render() {
        return <div>{this.renderAuthButton()}</div>;
      }
}
    
const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn}
}
    
    export default connect(
      mapStateToProps,
      { signIn, signOut }
    )(GoogleAuth);