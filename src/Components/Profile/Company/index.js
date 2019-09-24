import React, { Component } from "react";
/* import { MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBCardTitle, MDBCardText, MDBTabPane, MDBTabContent,
MDBNav, MDBNavItem, MDBIcon, MDBBtn } from "mdbreact"; */

import GeneralInformations from './ProfileManagement/GeneralInformations';
import PaymentInformation from './ProfileManagement/PaymentInformations';
import SubscriptionManagement from './ProfileManagement/SubscriptionManagement';

class CompanyUserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItemVerticalPills: "1",
      subscriptionData: null
    }
    this.GetSubscriptionData = this.GetSubscriptionData.bind(this)
  }


toggleVerticalPills = tab => () => {
  if (this.state.activeItem3 !== tab) {
    this.setState({
      activeItemVerticalPills: tab
    });
    if(tab === '4' && this.state.subscriptionData === null){
      this.GetSubscriptionData();
    }
  }
}

GetSubscriptionData = () => {
  fetch('https://ugwnuazczk.execute-api.us-east-1.amazonaws.com/dev/subscription/'+this.props.childProps.state.stripe_subscription_id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((r) => r.json()).then((r) => {
        var responseObject = JSON.parse(r.body);
        this.setState({ subscriptionData: responseObject.stripeResponse });
    }).catch((err) => { // Error response
        console.log(err);
    });
};

render() {
    const subscribed = (this.props.childProps.state.stripe_subscription_id !== 'undefined' &&
                        this.props.childProps.state.stripe_subscription_id !== undefined && 
                        this.props.childProps.state.stripe_subscription_id !== '' && 
                        this.props.childProps.state.stripe_subscription_id !== null)   

    let subsmanage;
    if (this.state.subscriptionData !== null) {
      subsmanage = <SubscriptionManagement childProps={this.props.childProps} subscriptionData={this.state.subscriptionData}/>;
    }
    return (
      <GeneralInformations childProps={this.props.childProps}/>
    );
  }
}

export default CompanyUserProfile;

{/* <MDBContainer fluid>
        <MDBRow>
          <MDBCol md="3">
            <MDBNav pills color="primary" className="flex-column">
              <MDBNavItem>
                <MDBBtn style={{width: 300}} color="primary" className={this.state.activeItemVerticalPills==="1" ? "active" : "" } onClick={this.toggleVerticalPills("1")}>
                  General
                  <MDBIcon icon="user" className="ml-2" />
                </MDBBtn>
              </MDBNavItem>
              <MDBNavItem>
                <MDBBtn style={{width: 300}} color="primary" className={this.state.activeItemVerticalPills==="2" ? "active" : "" } onClick={this.toggleVerticalPills("2")}>
                  Orders & invoices
                  <MDBIcon icon="file-alt" className="ml-2" />
                </MDBBtn>
              </MDBNavItem>
              <MDBNavItem>
                <MDBBtn style={{width: 300}} color="primary" className={this.state.activeItemVerticalPills==="3" ? "active" : "" } onClick={this.toggleVerticalPills("3")}>
                  Payment Method
                  <MDBIcon icon="address-card" className="ml-2" />
                </MDBBtn>
              </MDBNavItem>
              <MDBNavItem>
                <MDBBtn disabled={!subscribed} readOnly style={{width: 300}} color="primary" className={this.state.activeItemVerticalPills==="4" ? "active" : "" } onClick={this.toggleVerticalPills("4")}>
                  Subscription Management
                  <MDBIcon icon="address-card" className="ml-2" />
                </MDBBtn>
              </MDBNavItem>
            </MDBNav>
          </MDBCol>
          <MDBCol md="9">
            <MDBTabContent activeItem={this.state.activeItemVerticalPills}>
              <MDBTabPane tabId="1">
                <GeneralInformations childProps={this.props.childProps}/>
              </MDBTabPane>
              <MDBTabPane tabId="2">
                <MDBCardBody>
                  <MDBCardTitle>Orders & Invoices</MDBCardTitle>
                  <MDBCardText>
                    "Hello? Is it me you're looking for?"
                  </MDBCardText>
                </MDBCardBody>
              </MDBTabPane>
              <MDBTabPane tabId="3">
                <PaymentInformation childProps={this.props.childProps}/>
              </MDBTabPane>
              <MDBTabPane tabId="4">
                {subsmanage}
              </MDBTabPane>
            </MDBTabContent>
          </MDBCol>
        </MDBRow>
      </MDBContainer> */}