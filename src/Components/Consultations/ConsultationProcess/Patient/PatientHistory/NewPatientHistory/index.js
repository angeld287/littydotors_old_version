import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBInput, MDBIcon, MDBSpinner, MDBBox,
         MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBDatePicker, MDBDataTable } from "mdbreact";

import useNewPatientHistory from './useNewPatientHistory';
import NonPathologicalHistory from './NonPathologicalHistory';
import PathologicalHistory from './PathologicalHistory/';



const NewPatientHistory = () => {
  const { api, setPatientMedications, setPatientSurgicalInterventions, register, onSubmit, setPatientAllergies, loadingButton, handleSubmit, formState, errors } = useNewPatientHistory();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h5 className="font-weight-bold pl-0 my-4">
          <strong>Personales Patológicos</strong>
        </h5>
          <MDBRow>
            <MDBCol md="12">
              <MDBCard>
                <br/>
                <PathologicalHistory
                  setPatientMedications={setPatientMedications}
                  setPatientAllergies={setPatientAllergies}
                  setPatientSurgicalInterventions={setPatientSurgicalInterventions}
                  api={api}
                />
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
                <NonPathologicalHistory register={register}/>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        <br/>
        <h5 className="font-weight-bold pl-0 my-4">
          <strong>Familiares</strong>
        </h5>
        <MDBInput type="checkbox" label="Padre Vivo" className="mt-4" />
        <MDBInput label="Enfermedades que padece" className="mt-4" />
        <br/>
        <MDBInput type="checkbox" label="Madre Viva" className="mt-4" />
        <MDBInput label="Enfermedades que padece" className="mt-4" />
        <br/>
        <div className="text-center py-4 mt-3">
                  {!loadingButton && <MDBBtn className="btn btn-outline-blue" type="submit" disabled={formState.isSubmitting}>Agregar</MDBBtn>}
                  {loadingButton && <MDBSpinner small />}
				</div>
      </form>
    </div>
  );
}

export default NewPatientHistory;