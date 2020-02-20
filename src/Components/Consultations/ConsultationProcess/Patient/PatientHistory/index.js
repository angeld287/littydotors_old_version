import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBInput, MDBIcon, MDBSpinner, MDBBox, MDBModal,
         MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBDatePicker, MDBDataTable } from "mdbreact";

import usePatientHistory from "./usePatientHistory"
import NonPathological from "./NonPathological";
import Pathological from "./Pathological";
import Family from "./Family";


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
                <Pathological data={global.patient.patientHistory.pathologicalHistory}/>
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
                <NonPathological data={global.patient.patientHistory.nonPathologicalHistory}/>
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
                <Family data={global.patient.patientHistory.familyHistory}/>
              </MDBCard>
            </MDBCol>
        </MDBRow>
        <br/>
      </div>
  );
}

export default PatientHistory;