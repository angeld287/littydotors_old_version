import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBInput, MDBIcon, MDBSpinner, MDBBox,
         MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBDatePicker, MDBDataTable } from "mdbreact";
import { API, graphqlOperation } from 'aws-amplify';

//import UsePatientDetails from './usePatientDetails';
import { createPatient } from '../../../../../graphql/mutations';
import moment from 'moment';
import Swal from 'sweetalert2';

const NonPathologicalHistory = (
                      /* {
                        patientData: patientData,
                        childProps: childProps,
                        global: global,
                        setGlobalData: setGlobalData
                      } */
                   ) => {

  //const { loadingHistory, data } = UsePatientDetails(childProps, patientData, global, setGlobalData);
  //const age = moment(new Date()).format('YYYY') - moment(patientData.birthdate).format('YYYY');

  return (
    <div>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBContainer>
              <MDBInput label="Alcohol" className="mt-4" />
              <MDBInput label="Tabaquismo" className="mt-4" />
              <MDBInput label="Drogas" className="mt-4" />
              <MDBInput label="Inmunizaciones" className="mt-4" />
              <MDBInput label="Otros" className="mt-4" />
            </MDBContainer>
          </MDBCard>
        </MDBCol>
        <MDBCol md="6">
          <MDBContainer>
            <MDBInput label="Alcohol" className="mt-4" />
            <MDBInput label="Tabaquismo" className="mt-4" />
            <MDBInput label="Drogas" className="mt-4" />
            <MDBInput label="Inmunizaciones" className="mt-4" />
            <MDBInput label="Otros" className="mt-4" />
          </MDBContainer>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default NonPathologicalHistory;