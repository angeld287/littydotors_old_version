import React, { useEffect, useState } from 'react';
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
  //const { data } = usePatientHistory(global, setGlobalData);

  //const object = (global.patient.patientHistory === null || global.patient.patientHistory === undefined) ? data : global.patient.patientHistory;

	if (global.patient.patientHistory === null || global.patient.patientHistory === undefined) return (<MDBContainer><MDBBox display="flex" justifyContent="center" className="mt-5"><MDBSpinner big/></MDBBox></MDBContainer>)
  
  const hasPatientHistory = (global.patient.patientHistory !== null && global.patient.patientHistory !== undefined);
  const hasPathological = (global.patient.patientHistory.pathologicalHistory !== null && global.patient.patientHistory.pathologicalHistory !== undefined);
  const hasNonPathological = (global.patient.patientHistory.nonPathologicalHistory !== null && global.patient.patientHistory.nonPathologicalHistory !== undefined);
  const hasFamilyHistory = (global.patient.patientHistory.familyHistory !== null && global.patient.patientHistory.familyHistory !== undefined);
  
  return (
      <div>
        <h5 className="font-weight-bold pl-0 my-4">
          <strong>Personales Patológicos</strong>
        </h5>
          <MDBRow>
            <MDBCol md="12">
              <MDBCard>
                <br/>
                {(hasPatientHistory && hasPathological) &&
                  <Pathological data={global.patient.patientHistory.pathologicalHistory}/>
                }
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
                {(hasPatientHistory && hasNonPathological) &&
                  <NonPathological data={global.patient.patientHistory.nonPathologicalHistory}/>
                }
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
                {(hasPatientHistory && hasFamilyHistory) &&
                  <Family data={global.patient.patientHistory.familyHistory}/>
                }
              </MDBCard>
            </MDBCol>
        </MDBRow>
        <br/>
      </div>
  );
}

export default PatientHistory;