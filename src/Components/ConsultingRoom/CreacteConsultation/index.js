import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBCardHeader, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class CreacteConsultation extends Component {
state = {
  modal8: false,
  modal9: false
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
  return (
    <MDBContainer>
      <MDBBtn color="info" onClick={this.toggle(9)}>Bottom</MDBBtn>
      <MDBModal isOpen={this.state.modal9} toggle={this.toggle(9)} fullHeight position="bottom">
        <MDBModalHeader toggle={this.toggle(9)}>MDBModal title</MDBModalHeader>
        <MDBModalBody>
          <MDBContainer>
            <MDBCardHeader className="border-0  font-weight-bold d-flex justify-content-between">
              <p className="mr-4 mb-0">Leave a reply</p>
            </MDBCardHeader>
            <form className="mt-4" style={{color: "#495057"}}>
              <div className="d-md-flex flex-md-fill" >
                <div className="input-group  input-group-md px-2 mb-4">
                  <MDBInput label="Username" icon="user"  />
                </div>
                <div className="input-group input-group-md px-2 mb-4">
                  <MDBInput type="email" label="Email" icon="at" />
                </div>
                <div className="input-group  input-group-md px-2 mb-4">
                  <MDBInput label="Website" icon="code" />
                </div>
              </div>

              <div className="form-group px-2">
                <MDBInput
                  type="textarea"
                  label="Icon Prefix"
                  rows="2"
                  icon="pencil-alt"
                />
              </div>

              <div className="text-center mt-4">
                <MDBBtn color="primary">Submit</MDBBtn>
              </div>
            </form>
          </MDBContainer>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle(9)}>Close</MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default CreacteConsultation;