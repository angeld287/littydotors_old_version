import React, { Component } from "react";
import { MDBContainer, MDBCollapse, MDBCard, MDBCardBody, MDBCollapseHeader } from "mdbreact";

import CompanyInformation from './CompanyInformation'
import UserInformation from './UserInformation'

class GeneralInformations extends Component {
  constructor(props) {
    super(props);

    this.state={
      collapseID: "collapse1"
    }
  }


toggleCollapse = collapseID => () =>
this.setState(prevState => ({
  collapseID: prevState.collapseID !== collapseID ? collapseID : ""
}));

render() {
const { collapseID } = this.state;
//const havePlan = (this.props.childProps.state.stripe_plan_name !== '' && this.props.childProps.state.stripe_plan_name !== null && this.props.childProps.state.stripe_plan_name !== 'undefined');
    return (
      <MDBContainer fluid>
        <MDBContainer className="md-accordion mt-5">
          <MDBCard className="mt-3">
            <MDBCollapseHeader onClick={event => {
                              event.preventDefault();
                              const collapseID = "collapse1"
                              this.setState(prevState => ({
                                collapseID: prevState.collapseID !== collapseID ? collapseID : ""
                              }));
                            }}>
                            Informacion Princial
              <i className={ collapseID==="collapse1" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
            </MDBCollapseHeader>
            <MDBCollapse id="collapse1" isOpen={collapseID}>
              <MDBCardBody>
                <UserInformation childProps={this.props.childProps}/>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard>
            <MDBCollapseHeader onClick={event => {
                              event.preventDefault();
                              const collapseID = "collapse2"
                              this.setState(prevState => ({
                                collapseID: prevState.collapseID !== collapseID ? collapseID : ""
                              }));
                            }}>
                            Informacion de Consultorio
              <i className={ collapseID==="collapse2" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
            </MDBCollapseHeader>
            <MDBCollapse id="collapse2" isOpen={collapseID}>
              <MDBCardBody>
                <CompanyInformation childProps={this.props.childProps}/>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          {/* <MDBCard>
            <MDBCollapseHeader onClick={event => {
                              event.preventDefault();
                              const collapseID = "collapse3"
                              this.setState(prevState => ({
                                collapseID: prevState.collapseID !== collapseID ? collapseID : ""
                              }));
                            }}>
                            Plan Information
              <i className={ collapseID==="collapse3" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
            </MDBCollapseHeader>
            <MDBCollapse id="collapse3" isOpen={collapseID}>
              <MDBCardBody>
                {havePlan ? (
                  <h5>{this.props.childProps.state.stripe_plan_name}</h5>
                ) : (
                  <h5>No tiene plan</h5>
                )}
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard> */}
        </MDBContainer>
      </MDBContainer>
    );
  }
}

export default GeneralInformations;