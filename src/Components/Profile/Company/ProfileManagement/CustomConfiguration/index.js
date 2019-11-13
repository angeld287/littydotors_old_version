import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBCol, MDBRow } from
'mdbreact';
import Card from './Card'

class ModalPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            OpenModal: false,
            item: null,
        }
        this.toggleOpen = this.toggleOpen.bind(this)
        this.toggleClose = this.toggleClose.bind(this)
    }

toggleOpen = (item) => {
    this.setState({item: item, OpenModal: true})
}

toggleClose = () => {
    this.setState({item: null, OpenModal: false})
}

render() {
    const { item } = this.state;
    const name = (item != null) ? item.name : "no data"
  return (
      <MDBContainer>
        <Card childProps={this.props.childProps} toggleOpen={this.toggleOpen} toggleClose={this.toggleClose}/>

        <MDBModal isOpen={this.state.OpenModal} toggle={this.toggleClose}>
          <MDBModalHeader toggle={this.toggleClose}>MDBModal title</MDBModalHeader>

          <MDBModalBody>
            <MDBContainer fluid className="text-white">
              <MDBRow>
                <MDBCol md="4" className="bg-info">.col-md-4</MDBCol>
                <MDBCol md="4" className="ml-auto bg-info">{name}</MDBCol>
              </MDBRow>
              <br />
              <MDBRow>
                <MDBCol md="3" className="ml-auto bg-info">.col-md-3 .ml-auto</MDBCol>
                <MDBCol md="2" className="ml-auto bg-info">.col-md-2 .ml-auto</MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="6" className="ml-5 bg-info">.col-md-6 .ml-5</MDBCol>
              </MDBRow>
              <br />
              <MDBRow>
                <MDBCol sm="9" className="bg-info">
                  Level 1: .col-sm-9
                  <MDBRow>
                    <MDBCol sm="6" className="bg-info">
                      Level 2: .col-8 .col-sm-6
                    </MDBCol>
                    <MDBCol sm="6" className="bg-info">
                      Level 2: .col-4 .col-sm-6
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggleClose}>Close</MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;