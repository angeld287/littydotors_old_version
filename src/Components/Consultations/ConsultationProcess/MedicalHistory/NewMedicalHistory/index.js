import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBInput, MDBIcon, MDBSpinner, MDBBox,
         MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBDatePicker, MDBDataTable } from "mdbreact";

import useNewMedicalHistory from './useNewMedicalHistory';



const NewMedicalHistory = () => {
  const { onSubmit, egister, setBirthdate, loadingButton, handleSubmit, formState, birthdate, newPatient, errors, loading, setLoading, name, setName } = useNewMedicalHistory();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h5 className="font-weight-bold pl-0 my-4">
          <strong>Personales Patológicos</strong>
        </h5>
        <MDBRow>
          <MDBCol>
            <MDBInput label="Cardiovasculares" type="checkbox" id="checkbox" />
            <MDBInput label="Pulmonares" type="checkbox" id="checkbox"/>
            <MDBInput label="Renales" type="checkbox" id="checkbox"/>
            <MDBInput label="Quirúrgicos" type="checkbox" id="checkbox"/>
          </MDBCol>
          <MDBCol>
            <MDBInput label="Digestivos" type="checkbox" id="checkbox"/>
            <MDBInput label="Alérgicos" type="checkbox" id="checkbox"/>
            <MDBInput label="Transfusiones" type="checkbox" id="checkbox"/>
            <MDBInput label="Diabetes" type="checkbox" id="checkbox"/>
          </MDBCol>
        </MDBRow>
        <MDBInput label="Medicamentos" className="mt-4" />
        <MDBInput label="Especifique" className="mt-4" />
        
        <br/>
        <h5 className="font-weight-bold pl-0 my-4">
          <strong>Personales No Patológicos</strong>
        </h5>
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
                  {loadingButton && <MDBBtn className="btn btn-outline-blue" type="submit" disabled={formState.isSubmitting}>Agregar</MDBBtn>}
                  {!loadingButton && <MDBSpinner small />}
				</div>
      </form>
    </div>
  );
}

export default NewMedicalHistory;