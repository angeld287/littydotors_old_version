import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBInput, MDBIcon, MDBSpinner, MDBBox,
         MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBDatePicker, MDBDataTable } from "mdbreact";

import useMedicalHistory from './useMedicalHistory';

const MedicalHistory = ({childProps: childProps, patientData: patientData}) => {
  const { loading, error } = useMedicalHistory(childProps, patientData);

    if (loading) {
        return (
          <MDBContainer>
            <MDBBox display="flex" justifyContent="center" className="mt-5">
              <MDBSpinner big/>
            </MDBBox>
          </MDBContainer>
        );
      }

    if (error) return <h2 className="text-center font-weight-bold pt-6 pb-2 mb-2">Ha ocurrido un error</h2>;

  return (
    <div>
        <h3 className="font-weight-bold pl-0 my-4">
          <strong>Antecedentes</strong>
        </h3>
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
        <MDBInput label="Alcohol" className="mt-4" />
        <MDBInput label="Tabaquismo" className="mt-4" />
        <MDBInput label="Drogas" className="mt-4" />
        <MDBInput label="Inmunizaciones" className="mt-4" />
        <MDBInput label="Otros" className="mt-4" />
        <br/>
        <h5 className="font-weight-bold pl-0 my-4">
          <strong>Familiares</strong>
        </h5>
        <MDBInput type="checkbox" label="Padre Vivo" className="mt-4" />
        <MDBInput label="Enfermedades que padece" className="mt-4" />
        <br/>
        <MDBInput type="checkbox" label="Madre Viva" className="mt-4" />
        <MDBInput label="Enfermedades que padece" className="mt-4" />
    </div>
  );
}

export default MedicalHistory;