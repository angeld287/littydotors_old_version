import React from "react";
import {  MDBRow, MDBCol, MDBCard,  MDBCardBody, MDBIcon, MDBBtn } from "mdbreact";

class EcommercePage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = { activeItemPills: "1", };
      }

      togglePills = tab => () => {
        if (this.state.activePills !== tab) {
            this.props.handleSetPlan(tab)
          this.setState({
            activeItemPills: tab
          });
        }
      }
      
      
  render(){
    return (
        <section className="text-center my-5">
          <MDBRow>
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBCard>
                <MDBCardBody>
                  <h5 className="mb-4">Basic plan</h5>
                  <div className="d-flex justify-content-center">
                    <div className="card-circle d-flex justify-content-center align-items-center">
                      <MDBIcon icon="home" className="indigo-text" />
                    </div>
                  </div>
                  <h2 className="font-weight-bold my-4">10$</h2>
                  <p className="grey-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Culpa pariatur id nobis accusamus deleniti cumque hic
                    laborum.
                  </p>
                  <MDBBtn color="primary" className={this.state.activeItemPills==="1" ? "active" : "" } onClick={this.togglePills("1")}>
                    Select Plan
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBCard className="indigo">
                <MDBCardBody className="white-text">
                  <h5 className="mb-4">Premium plan</h5>
                  <div className="d-flex justify-content-center">
                    <div className="card-circle d-flex justify-content-center align-items-center">
                      <MDBIcon icon="users" className="light-blue-text" />
                    </div>
                  </div>
                  <h2 className="font-weight-bold my-4">20$</h2>
                  <p>
                    Esse corporis saepe laudantium velit adipisci cumque iste
                    ratione facere non distinctio cupiditate sequi atque.
                  </p>
                  <MDBBtn color="primary" className={this.state.activeItemPills==="2" ? "active" : "" } onClick={this.togglePills("2")}>
                    Select Plan
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBCard>
                <MDBCardBody>
                  <h5 className="mb-4">Advanced plan</h5>
                  <div className="d-flex justify-content-center">
                    <div className="card-circle d-flex justify-content-center align-items-center">
                      <MDBIcon far icon="chart-bar" className="indigo-text" />
                    </div>
                  </div>
                  <h2 className="font-weight-bold my-4">30$</h2>
                  <p className="grey-text">
                    At ab ea a molestiae corrupti numquam quo beatae minima
                    ratione magni accusantium repellat eveniet quia vitae.
                  </p>
                  <MDBBtn color="primary" className={this.state.activeItemPills==="3" ? "active" : "" } onClick={this.togglePills("3")}>
                    Select Plan
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </section>
      );
  }
}

export default EcommercePage;