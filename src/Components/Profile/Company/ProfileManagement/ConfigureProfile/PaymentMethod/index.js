import React, { Component } from 'react';
import { 
  MDBContainer, 
  MDBBtn, 
  MDBInput, 
  MDBCol, 
  MDBRow, 
  MDBCard, 
  MDBCardBody,
  
} from 'mdbreact';

import _ from 'lodash';


const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
    cardNumber: "",
    ccv: "",
    year: 0, 
    month: 0,
};

class PaymentMethod extends Component {
  constructor(props){
      super(props);

      this.state = { ...INITIAL_STATE };

      this.handleGenerateToken = this.handleGenerateToken.bind(this);
      this.getYear = this.getYear.bind(this);
  }

  getYear = () => {
    return new Date().getFullYear();
  }

  handleGenerateToken = () => {

    fetch('https://613b5audw3.execute-api.us-east-1.amazonaws.com/dev/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          number: this.state.cardNumber,
          exp_month: this.state.month,
          exp_year: this.state.year,
          cvc: this.state.ccv
        })
      }).then((r) => r.json()).then((r) => {
          var responseObject = JSON.parse(r.body);
          this.props.handleSetCard(responseObject.stripeResponse.id);
          this.setState(INITIAL_STATE);
      }).catch((err) => { // Error response
          console.log(err);
      });
  };

  render() {
    const { cardNumber, ccv, year, month } = this.state;

    const currentYear = this.getYear().toString().substr(-2);
    const complete = (!(cardNumber === '') && !(ccv === '') && !(year === '') && !(month === '')) 
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol lg="9" md="9">
            <MDBCard className="card-body">
              <MDBCardBody className="mx-4">
                <MDBInput
                  value={cardNumber}
                  onChange={event =>
                    this.setState(updateByPropertyName("cardNumber", event.target.value))
                  }
                  label="Card Number"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBRow>
                  <MDBCol md="6">
                    <select className="browser-default custom-select"
                            value={month} 
                            onChange={event =>
                              this.setState(updateByPropertyName("month", event.target.value))
                            }
                    >
                      <option value="0">Month</option>
                      <option value="1">January</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
                      <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
                      <option value="8">August</option>
                      <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>
                  </MDBCol>
                  <MDBCol md="6">
                    <select className="browser-default custom-select"
                            value={year} 
                            onChange={event =>
                              this.setState(updateByPropertyName("year", event.target.value))
                            }
                    >
                      <option value="0">Year</option>
                      { _.range(currentYear, 99).map(value => <option key={value} value={value}>{value}</option>) }
                    </select>
                  </MDBCol>
                </MDBRow>
                <br/>
                <MDBRow>
                  <MDBCol md="6">
                    <input
                      value={ccv}
                      onChange={event =>
                        this.setState(updateByPropertyName("ccv", event.target.value))
                      }
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="CCV"
                    />
                  </MDBCol>
                </MDBRow>
                <br/>
                <MDBRow>
                  <MDBCol md="12">
                    <div className="text-center mb-3">
                      <MDBBtn
                        disabled={!complete}
                        type="button"
                        onClick={this.handleGenerateToken}
                        gradient="blue"
                        rounded
                        className="btn-block z-depth-1a"
                      >
                        Save Card
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
              {/*!complete && 
              <MDBAlert color="danger" >
                  Some required fields are not completed
              </MDBAlert> */}
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      );
    }
}

export default PaymentMethod;