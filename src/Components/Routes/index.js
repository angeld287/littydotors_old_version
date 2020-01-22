import React from 'react';

import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import AuthComponent from '../Authentication/AuthComponent';
import Profile from '../Profile';
import ConfigureProfile from '../Profile/Company/ProfileManagement/ConfigureProfile';
import MedicalAppointmentsManagement from '../MedicalAppointmentsManagement';
import Reports from '../Profile/Company/Reports';
import Error from '../Error'
import IntroductionPage from '../IntroductionPage';
//import Inicio from './Components/IntroductionPage/Inicio';
//import CustomrequireNewPassword from './Components/Authentication/RequireNewPassword';
import ConsultationProcess from '../Consultations/ConsultationProcess';
import Consultations from '../Consultations/index';

export const Routes = ({ childProps }) => (
  <Switch>
    <Route exact path="/" render={() => <IntroductionPage/>} />
    <ProppedRoute
      exact
      path="/signin"
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
      path="/medicalappointmentsmanagement"
      render={() => <MedicalAppointmentsManagement childProps={childProps}/>}
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
    <Route exact path="/consultations" render={() => <Consultations childProps={childProps} />} />
    <Route exact path="/consultations/process/:patient" render={() => <ConsultationProcess childProps={childProps} />} />
  </Switch>
);

export const ProtectedRouteClients = ({ render: C, props: childProps, ...rest }) => (
  <Route
    {...rest}
    render={rProps =>
      (childProps.isLoggedIn) ? (
          (childProps.state.user_roll === "client") ? (
            <C {...rProps} {...childProps} />
          ) : (<Redirect to="/profile"/>)
      ) : (
        <Redirect
          to={`/signin?redirect=${rProps.location.pathname}${
            rProps.location.search
          }`}
        />
      )
    }
  />
);

export const ProtectedRouteCompany = ({ render: C, props: childProps, ...rest }) => (
  <Route
    {...rest}
    render={rProps =>
      (childProps.isLoggedIn) ? (
          (childProps.state.user_roll === "doctor") ? (
            <C {...rProps} {...childProps} />
          ) : (<Redirect to="/profile"/>)
      ) : (
        <Redirect
          to={`/signin?redirect=${rProps.location.pathname}${
            rProps.location.search
          }`}
        />
      )
    }
  />
);

export const ProtectedRoute = ({ render: C, props: childProps, ...rest }) => (
  <Route
    {...rest}
    render={rProps =>
      childProps.isLoggedIn ? (
        <C {...rProps} {...childProps} />
      ) : (
        <Redirect
          to={`/signin?redirect=${rProps.location.pathname}${
            rProps.location.search
          }`}
        />
      )
    }
  />
);

export const ProppedRoute = ({ render: C, props: childProps, ...rest }) => (
  <Route {...rest} render={rProps => <C {...rProps} {...childProps} />} />
);