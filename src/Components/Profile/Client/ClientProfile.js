import React, {Component} from "react";
import { MDBFreeBird, MDBInput, MDBCol, MDBRow, MDBCardBody, MDBCardTitle, MDBContainer, MDBEdgeHeader } from
"mdbreact";

class ClientUserProfile extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: this.props.childProps.state.username,
        email: this.props.childProps.state.email,
        phonenumber: this.props.childProps.state.phonenumber,
        name: this.props.childProps.state.name
      }
    }

    render(){

      const { username, email, phonenumber, name } = this.state;

      return (
        <MDBContainer className="mt-3">
          <MDBEdgeHeader color="mdb-color darken-2"></MDBEdgeHeader>
          <MDBFreeBird>
            <MDBRow>
              <MDBCol md="8" lg="7" className="mx-auto float-none white z-depth-1 py-2 px-2">
                <MDBCardBody>
                  <MDBCardTitle>{username}</MDBCardTitle>
                  <p className="pb-4">You don't have access to the web application. You need to use the mobile application.</p>
                  <form>
                    <MDBInput readOnly group value={name} type="text" />
                    <MDBInput readOnly group value={email} />
                    <MDBInput readOnly rows="2" value={phonenumber}  />
                  </form>
                  {/* <div className="my-2">
                    <p style={{ fontWeight: "300", fontSize: "0.75rem" }}>Never submit your passwords here</p>
                  </div> */}
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBFreeBird>
        </MDBContainer>
      );
    }
};

export default ClientUserProfile;