import React, { Component } from 'react';

import { /* withAuthenticator , */Authenticator, SignIn, SignUp } from 'aws-amplify-react';
import queryString from 'query-string'

import {
  MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse,
  MDBDropdown, MDBDropdownToggle, MDBIcon, MDBDropdownMenu, MDBDropdownItem
  } from "mdbreact";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';


import Inicio from '../IntroductionPage/Inicio';

import CustomSignIn from '../Authentication/SignIn';
import CustomSignUp from '../Authentication/SignUp';
import Profile from '../Profile/index.js/index.js';
import ConfigureProfile from '../Profile/Company/ProfileManagement/ConfigureProfile';
import DoctorSearch from '../DoctorSearch';
import ConsultingRoom from '../ConsultingRoom';
//import IntroductionPage from '../IntroductionPage/IntroductionPage';

import { listConsultingRooms } from '../../graphql/queries';

import Amplify, {API,graphqlOperation,Auth} from 'aws-amplify';
import aws_exports from './aws-exports'; // specify the location of aws-exports.js file on your project
/* import AWSAppSyncClient from 'aws-appsync'
import { ApolloProvider } from 'react-apollo'
import { Rehydrated } from 'aws-appsync-react' */

Amplify.configure(aws_exports); 

/* const client = new AWSAppSyncClient({
  url: aws_exports.aws_appsync_graphqlEndpoint,
  region: aws_exports.aws_appsync_region,
  auth: {
    type: aws_exports.aws_appsync_authenticationType,
    apiKey: aws_exports.aws_appsync_apiKey,
  }
}) */


//about, secret, auth
class HeaderLinks extends Component {

  handlesignOut = () => {
    Auth.signOut().then(d => {
      window.location.reload()
    });
  }

  render() {
    return (
      <MDBNavbar color="indigo" dark expand="md">
            <MDBCollapse id="navbarCollapse3" /* isOpen={this.state.isOpen} */ navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink to="/">Home</MDBNavLink>
                </MDBNavItem>
                {/* <MDBNavItem>
                  <MDBNavLink to="/about">About Page</MDBNavLink>
                </MDBNavItem>*/}
                <MDBNavItem> 
                  <MDBNavLink to="/search">Secret Page</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            
              {!this.props.childProps.isLoggedIn &&<MDBNavbarNav right><MDBNavItem><MDBNavLink to="/profile">LogIn</MDBNavLink></MDBNavItem></MDBNavbarNav>}
              {this.props.childProps.isLoggedIn &&
              <MDBNavbarNav right>
                <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>
                        <MDBIcon icon="user" />
                      </MDBDropdownToggle>
                      <MDBDropdownMenu className="dropdown-default" right>
                        <MDBDropdownItem onClick={this.handlesignOut}>LogOut</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown> 
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/profile">{this.props.childProps.state.username}</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              }
              
            </MDBCollapse>
      </MDBNavbar>
    );
  }
}

const ProtectedRouteClients = ({ render: C, props: childProps, ...rest }) => (
  <Route
    {...rest}
    render={rProps =>
      (childProps.isLoggedIn) ? (
          (childProps.state.user_roll !== "company") ? (
            <C {...rProps} {...childProps} />
          ) : (<Redirect to="/profile"/>)
      ) : (
        <Redirect
          to={`/auth?redirect=${rProps.location.pathname}${
            rProps.location.search
          }`}
        />
      )
    }
  />
);

const ProtectedRoute = ({ render: C, props: childProps, ...rest }) => (
  <Route
    {...rest}
    render={rProps =>
      childProps.isLoggedIn ? (
        <C {...rProps} {...childProps} />
      ) : (
        <Redirect
          to={`/auth?redirect=${rProps.location.pathname}${
            rProps.location.search
          }`}
        />
      )
    }
  />
);

const ProppedRoute = ({ render: C, props: childProps, ...rest }) => (
  <Route {...rest} render={rProps => <C {...rProps} {...childProps} />} />
);

class AuthComponent extends Component {
  
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
                  SignUp
              ]
          }
          //hideDefault={true}
          onStateChange={this.handleStateChange}
        >
            <CustomSignIn override={SignIn}/>
            <CustomSignUp override={SignUp}/>
        </Authenticator>
      </div>
    );
  }
}

const Routes = ({ childProps }) => (
  <Switch>
    <Route exact path="/" render={() => <div>About Content</div>} />
    <ProppedRoute
      exact
      path="/auth"
      render={AuthComponent}
      props={childProps}
    />
    <ProtectedRoute
      exact
      path="/secret"
      render={() => <Inicio/>}
      props={childProps}
    />
    <ProtectedRoute
      exact
      path="/subscribe"
      render={() => <ConfigureProfile childProps={childProps}/>}
      props={childProps}
    />
    <ProtectedRoute
      exact
      path="/profile"
      render={() => <Profile childProps={childProps}/>}
      props={childProps}
    />
    <ProtectedRouteClients
      exact
      path="/search"
      render={() => <DoctorSearch childProps={childProps} />}
      props={childProps}
    />
    <ProtectedRouteClients
      exact
      path="/consultingroom/:id"
      render={(props) => <ConsultingRoom childProps={childProps} {...props} />}
      props={childProps}
    />
    <Route exact path="/about" render={() => <div>About Content</div>} />
  </Switch>
);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      authState: {
        isLoggedIn: false,
      }
    };
    this._isMounted = false;
  }

  componentWillMount = () => {
    //this.handleUserSignIn();
    this._isMounted = true;
    this.GetCompanyUserProfile();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  GetCompanyUserProfile = () => {
    API.graphql(graphqlOperation(listConsultingRooms)).then( result =>{
      this.setState({
        id: result.data.listConsultingRooms.items[0].id,
        Specialty: result.data.listConsultingRooms.items[0].doctor.speciality,
        location: result.data.listConsultingRooms.items[0].location.name,
        stripe_source_token: result.data.listConsultingRooms.items[0].stripe.source_token,
        stripe_plan_id: result.data.listConsultingRooms.items[0].stripe.plan_id,
        stripe_plan_name: result.data.listConsultingRooms.items[0].stripe.plan_name,
        stripe_customer_id: result.data.listConsultingRooms.items[0].stripe.customer_id,
        stripe_subscription_id: result.data.listConsultingRooms.items[0].stripe.subscription_id,
    });
    }).catch( err => {
    });
  }

  handleUserSignIn = () => {
    this.setState({ authState: { isLoggedIn: true } });
    Auth.currentUserInfo()
      .then(data => {
        this.setState({
          username: data.username,
          email: data.attributes.email,
          phonenumber: data.attributes.phone_number,
          name: data.attributes.name,
          //authState: {
          //  isLoggedIn: true,
          //}
        })
      })
      .catch(err =>{})


      Auth.currentSession().then(data => {
        this.setState({
          user_roll: data.accessToken.payload['cognito:groups'][0]
        })
      }).catch(err => {
        console.log('There was an error: ' + err);
      });
      this.GetCompanyUserProfile();
  };

  handleUserLogOut = () => {
    this.setState({ authState: { isLoggedIn: false } });
  }; 
  
  render() {

    const childProps = {
      isLoggedIn: this.state.authState.isLoggedIn,
      onUserSignIn: this.handleUserSignIn,
      onUserLogOut: this.handleUserLogOut,
      state: this.state
    };


    return (
      <div className="App">
        <HeaderLinks childProps={childProps}/>
        <Routes childProps={childProps} />
      </div>
    );
  }
}

const AppWithRouter = () => (
/*   <ApolloProvider client={client}>
    <Rehydrated> */
      <Router>
        <App />
      </Router>
/*     </Rehydrated>
  </ApolloProvider> */
);

export default AppWithRouter;