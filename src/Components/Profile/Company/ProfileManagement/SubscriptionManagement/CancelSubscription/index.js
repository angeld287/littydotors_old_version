import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class CancelSubscription extends Component {
state = {
  modal: false
}

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

CancelSubscription = () => {
  this.props.CancelSubscription();
  this.toggle();
}

render() {
  return (
    <MDBContainer>
      <MDBBtn color="danger" onClick={this.toggle}>Cancel Now</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>You want to cancel your current subscription?</MDBModalHeader>
        <MDBModalFooter>
          <MDBBtn onClick={this.CancelSubscription}>Yes</MDBBtn>
          <MDBBtn color="primary" onClick={this.toggle}>No</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default CancelSubscription;