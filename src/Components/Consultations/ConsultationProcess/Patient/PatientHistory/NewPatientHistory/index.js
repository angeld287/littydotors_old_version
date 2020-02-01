import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBInput, MDBIcon, MDBSpinner, MDBBox,
         MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBDatePicker, MDBDataTable } from "mdbreact";

import useNewPatientHistory from './useNewPatientHistory';
import NonPathologicalHistory from './NonPathologicalHistory';
import PathologicalHistory from './PathologicalHistory';
import FamilyHistory from './FamilyHistory';



const NewPatientHistory = () => {
  const { api, setPatientMedications, setPatientSurgicalInterventions, register, onSubmit, setPatientAllergies, 
          loadingButton, handleSubmit, formState, errors, setDiseases, setFatherDiseases, setMotherDiseases, setBrothersDiseases, 
          setGrandfatherDiseases, setGrandmotherDiseases, setOtherDisease } = useNewPatientHistory();

  return (
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
                  register={register}
                  errors={errors}
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
                <NonPathologicalHistory register={register} errors={errors}/>
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
                <FamilyHistory 
                  setFatherDiseases={setFatherDiseases}
                  setMotherDiseases={setMotherDiseases}
                  setBrothersDiseases={setBrothersDiseases}
                  setGrandfatherDiseases={setGrandfatherDiseases}
                  setGrandmotherDiseases={setGrandmotherDiseases}
                  setOtherDisease={setOtherDisease}
                  api={api}
                  register={register}
                  errors={errors}
                />
              </MDBCard>
            </MDBCol>
        </MDBRow>
        <br/>
        <div className="text-center py-4 mt-3">
                  {!loadingButton && <MDBBtn className="btn btn-outline-blue" type="submit" disabled={formState.isSubmitting}>Agregar</MDBBtn>}
                  {loadingButton && <MDBSpinner small />}
				</div>
      </form>
  );
}

export default NewPatientHistory;