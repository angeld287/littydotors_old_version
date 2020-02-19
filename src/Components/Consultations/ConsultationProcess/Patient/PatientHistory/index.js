import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBInput, MDBIcon, MDBSpinner, MDBBox, MDBModal,
         MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBDatePicker, MDBDataTable } from "mdbreact";

import usePatientHistory from "./usePatientHistory"


const PatientHistory = ({
    global: global,
    setGlobalData: setGlobalData
}) => {
  const {  } = usePatientHistory(global, setGlobalData);

  return (
      <div>
        <h5 className="font-weight-bold pl-0 my-4">
          <strong>Personales Patológicos</strong>
        </h5>
          <MDBRow>
            <MDBCol md="12">
              <MDBCard>
                <br/>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        <br/>
        <h5 className="font-weight-bold pl-0 my-4">
          <strong>Personales No Patológicos</strong>
        </h5>
          <MDBRow>
            <MDBCol md="12">
              <MDBCard>
                <br/>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        <br/>
        <h5 className="font-weight-bold pl-0 my-4">
          <strong>Familiares</strong>
        </h5>
        <MDBRow>
            <MDBCol md="12">
              <MDBCard>
                <br/>
              </MDBCard>
            </MDBCol>
        </MDBRow>
        <br/>
      </div>
  );
}

export default PatientHistory;