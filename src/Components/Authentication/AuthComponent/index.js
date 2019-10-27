import React, { Component } from 'react';


import { /* withAuthenticator , */Authenticator, SignIn, SignUp/* , RequireNewPassword */ } from 'aws-amplify-react';
import aws_exports from '../../../aws-exports.js'; 
import CustomSignIn from '../SignIn';
import CustomSignUp from '../SignUp';

import queryString from 'query-string';

export default class AuthComponent extends Component {
  
  handleStateChange = state => {
    const values = queryString.parse(this.props.location.search)
    if (state === 'signedIn') {
      this.props.onUserSignIn();
      if(this.props.location.search !== null && this.props.location.search !== ''){
        this.props.history.push(values.redirect);
      }else{
        this.props.history.push('/profile');
      }
    }else if (state === 'signIn') {
      this.props.onUserLogOut();
    }
  };

  render() {
    return (
      <div>
        <Authenticator 
          authState="signIn" 
          amplifyConfig={aws_exports}
          hide={ 
              [
                  SignIn,
                  SignUp,
              ]
          }
          hideDefault={false}
          onStateChange={this.handleStateChange}
        >
            <CustomSignIn override={SignIn}/>
            <CustomSignUp override={SignUp}/>
        </Authenticator>
      </div>
    );
  }
}