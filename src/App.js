import React, { Component } from 'react';

import { /* withAuthenticator , */Authenticator, SignIn, SignUp, RequireNewPassword } from 'aws-amplify-react';
import queryString from 'query-string'

import logo from './images/logo-blanco.png';

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


//import Inicio from './Components/IntroductionPage/Inicio';

import CustomSignIn from './Components/Authentication/SignIn';
import CustomSignUp from './Components/Authentication/SignUp';
import CustomrequireNewPassword from './Components/Authentication/RequireNewPassword';
import Profile from './Components/Profile';
import ConfigureProfile from './Components/Profile/Company/ProfileManagement/ConfigureProfile';
import ConsultationsManagement from './Components/ConsultationsManagement';
import Reports from './Components/Profile/Company/Reports';
import Error from './Components/Error'
import DoctorSearch from './Components/DoctorSearch';
import ConsultingRoom from './Components/ConsultingRoom';
import IntroductionPage from './Components/IntroductionPage';

import { listConsultingRooms } from './graphql/queries';

import Amplify, {API,graphqlOperation,Auth} from 'aws-amplify';
import aws_exports from './aws-exports'; // specify the location of aws-exports.js file on your project
/* import AWSAppSyncClient from 'aws-appsync'
import { ApolloProvider } from 'react-apollo'
import { Rehydrated } from 'aws-appsync-react' */

const listConsultingRoomsSecretary = `query ListConsultingRooms(
  $filter: ModelConsultingRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  listConsultingRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      doctor {
        id
        name
        username
        email
        speciality
        sex
        image
      }
      secretary
      location {
        id
        name
      }
    }
    nextToken
  }
}
`;

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
                  <MDBNavLink to="/"><img className="card-img-top" src={logo} style={{height: 20, width: 25}} alt="" /> Medical Consultations</MDBNavLink>
                </MDBNavItem>
                {/* <MDBNavItem>
                  <MDBNavLink to="/about">About Page</MDBNavLink>
                </MDBNavItem>*/}
                {(this.props.childProps.state.user_roll === 'secretary' || this.props.childProps.state.user_roll === 'company') && <MDBNavItem ><MDBNavLink to="/consultationsmanagement">Administraccion de Consultas</MDBNavLink></MDBNavItem>}
                {this.props.childProps.state.user_roll === 'company' && <MDBNavItem ><MDBNavLink to="/reports">Reportes</MDBNavLink></MDBNavItem>}
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
          (childProps.state.user_roll === "client") ? (
            <C {...rProps} {...childProps} />
          ) : (<Redirect to="/profile"/>)
      ) : (
        <Redirect
          to={`/?redirect=${rProps.location.pathname}${
            rProps.location.search
          }`}
        />
      )
    }
  />
);

const ProtectedRouteCompany = ({ render: C, props: childProps, ...rest }) => (
  <Route
    {...rest}
    render={rProps =>
      (childProps.isLoggedIn) ? (
          (childProps.state.user_roll === "company") ? (
            <C {...rProps} {...childProps} />
          ) : (<Redirect to="/profile"/>)
      ) : (
        <Redirect
          to={`/?redirect=${rProps.location.pathname}${
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
          to={`/?redirect=${rProps.location.pathname}${
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

const Routes = ({ childProps }) => (
  <Switch>
    {/* <Route exact path="/" render={() => <IntroductionPage/>} /> */}
    <ProppedRoute
      exact
      path="/"
      render={AuthComponent}
      props={childProps}
    />
    <ProppedRoute
      exact
      path="/error"
      render={() => <Error childProps={childProps}/>}
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
    <ProtectedRoute
      exact
      path="/consultationsmanagement"
      render={() => <ConsultationsManagement childProps={childProps}/>}
      props={childProps}
    />
    <ProtectedRouteCompany
      exact
      path="/reports"
      render={() => <Reports childProps={childProps}/>}
      props={childProps}
    />
    {/* <ProtectedRouteClients
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
    <Route exact path="/about" render={() => <div>About Content</div>} />*/}
  </Switch>
);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      authState: {
        isLoggedIn: false,
        error: false,
      },
      username: null,
    };
  }

  componentWillMount = () => {
    //this.handleUserSignIn();
    this.GetCompanyUserProfile();
  }

  GetCompanyUserProfile = () => {
    Auth.currentSession().then(data => {
      const roll = data.accessToken.payload['cognito:groups'][0];
      this.setState({user_roll: roll})
      if (roll === 'company') {
        API.graphql(graphqlOperation(listConsultingRooms)).then( result =>{
            this.setState({
                id: result.data.listConsultingRooms.items[0].id,
                doctorname: result.data.listConsultingRooms.items[0].doctor.name,
                doctorusername: result.data.listConsultingRooms.items[0].doctor.username,
                speciality: result.data.listConsultingRooms.items[0].doctor.speciality,
                image: result.data.listConsultingRooms.items[0].doctor.image,
                email: result.data.listConsultingRooms.items[0].doctor.email,
                location: result.data.listConsultingRooms.items[0].location.name,
                secretary: result.data.listConsultingRooms.items[0].secretary,
                stripe_source_token: result.data.listConsultingRooms.items[0].stripe.source_token,
                stripe_plan_id: result.data.listConsultingRooms.items[0].stripe.plan_id,
                stripe_plan_name: result.data.listConsultingRooms.items[0].stripe.plan_name,
                stripe_customer_id: result.data.listConsultingRooms.items[0].stripe.customer_id,
                stripe_subscription_id: result.data.listConsultingRooms.items[0].stripe.subscription_id,
            });
        }).catch( err => {
          this.setState({
              error: true,
          });
          console.log(err)
        });

      }else if(roll === 'secretary'){
        API.graphql(graphqlOperation(listConsultingRoomsSecretary,{
          filter:{
            secretary:{
              contains: this.state.username
            }
          }
        })).then( result =>{
            this.setState({
                id: result.data.listConsultingRooms.items[0].id,
                doctorname: result.data.listConsultingRooms.items[0].doctor.name,
                doctorusername: result.data.listConsultingRooms.items[0].doctor.username,
                speciality: result.data.listConsultingRooms.items[0].doctor.speciality,
                image: result.data.listConsultingRooms.items[0].doctor.image,
                email: result.data.listConsultingRooms.items[0].doctor.email,
                location: result.data.listConsultingRooms.items[0].location.name,
                secretary: result.data.listConsultingRooms.items[0].secretary,
            });
        }).catch( err => {
          this.setState({
              error: true,
          });
          console.log(err)
        });
      }
    }).catch(err => {
      console.log('There was an error: ' + err);
    });
  }

  handleUserSignIn = async () => {
    this.setState({ authState: { isLoggedIn: true } });
    const user = await Auth.currentUserInfo();
    this.setState({
      username: user.username,
      email: user.attributes.email,
      phonenumber: user.attributes.phone_number,
      name: user.attributes.name,
    })
    
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