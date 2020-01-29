import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBInput, MDBIcon,
         MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBDatePicker } from "mdbreact";
import NewPatient from './newPatient'


import useConsultations from '../useConsultations';
import useConsultationProcess from './useConsultationProcess';

const ConsultationProcess = ({childProps:childProps}) => {
  const { error, loading, swapFormActive, handleNextPrevClick, handleSubmission, calculateAutofocus, selectedDate, setSelectedDate, setCreateNewPatient,
          formActivePanelChanged, setFormActivePanelChanged, formActivePanel, setFormActivePanel, createNewPatient, createNewPatientName } = useConsultationProcess();

  const { createConsultation } = useConsultations();

  return (
    <MDBContainer>
        <h2 className="text-center font-weight-bold pt-4 pb-5 mb-2"><strong>Historia Clinica</strong></h2>
        <MDBStepper icon>
          <MDBStep icon="user" stepName="Paciente" onClick={swapFormActive(1)}></MDBStep>
          <MDBStep icon="folder-open" stepName="Antecedentes" onClick={swapFormActive(2)}></MDBStep>
          <MDBStep icon="stethoscope" stepName="Examen Medico" onClick={swapFormActive(3)}></MDBStep>
          <MDBStep icon="prescription-bottle-alt" stepName="Prescripciones y Estudios" onClick={swapFormActive(4)}></MDBStep>
        </MDBStepper>
          <MDBRow>
            {formActivePanel === 1 &&
              (<MDBCol md="12">
                <h3 className="font-weight-bold pl-0 my-4">
                  <strong>Paciente</strong>
                </h3>
                <MDBCol>
                  {!createNewPatient &&
                    (
                      <MDBCard style={{ width: "22rem" }}>
                        <MDBCardImage className="img-fluid" src="https://www.morpht.com/sites/morpht/files/styles/landscape/public/dalibor-matura_1.jpg" waves />
                        <MDBCardBody>
                          <MDBCardTitle>Bartolo Antonio de Jesús Valerio</MDBCardTitle>
                          <MDBCardText>
                            34 años, Email: bjesus@gmail.com, Telefono: 809-232-3344
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    )
                  }
                  {createNewPatient &&
                    (
                      <NewPatient 
                        createConsultation={createConsultation} 
                        setCreateNewPatient={setCreateNewPatient} 
                        name={createNewPatientName}
                        childProps={childProps}
                      />
                    )
                  }
                </MDBCol>
                <br/>
                <MDBBtn color="mdb-color" rounded className="float-right" onClick={handleNextPrevClick(2)}>next</MDBBtn>
              </MDBCol>)}

            {formActivePanel === 2 &&
            (<MDBCol md="12">
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
              <br/>
              <MDBBtn color="mdb-color" rounded className="float-left" onClick={handleNextPrevClick(1)}>previous</MDBBtn>
              <MDBBtn color="mdb-color" rounded className="float-right" onClick={handleNextPrevClick(3)}>next</MDBBtn>
            </MDBCol>)}

            {formActivePanel == 3 &&
            (<MDBCol md="12">
              <h3 className="font-weight-bold pl-0 my-4"><strong>Exploracion Fisica</strong></h3>
              <MDBInput label="First Name" className="mt-3" />
              <MDBInput label="Second Name" className="mt-3" />
              <MDBInput label="Surname" className="mt-3" />
              <MDBInput label="I agreee to the terms and conditions" type="checkbox" id="checkbox"/>
              <MDBInput label="I want to receive newsletter" type="checkbox" id="checkbox2" />
              <br/>
              <MDBBtn color="mdb-color" rounded className="float-left" onClick={handleNextPrevClick(2)}>previous</MDBBtn>
              <MDBBtn color="mdb-color" rounded className="float-right" onClick={handleNextPrevClick(4)}>next</MDBBtn>
            </MDBCol>)}

            {formActivePanel == 4 &&
            (<MDBCol md="12">
              <h3 className="font-weight-bold pl-0 my-4"><strong>Prescripciones y Estudios</strong></h3>
              <MDBInput label="I agreee to the terms and conditions" type="checkbox" id="checkbox" />
              <MDBInput label="I want to receive newsletter" type="checkbox" id="checkbox2" />
              <MDBInput label="Second Name" className="mt-3" />
              <MDBInput label="Surname" className="mt-3" />
              <br/>
              <MDBBtn color="mdb-color" rounded className="float-left" onClick={handleNextPrevClick(3)}>previous</MDBBtn>
              <MDBBtn color="success" rounded className="float-right" onClick={handleSubmission}>submit</MDBBtn>
            </MDBCol>)}
          </MDBRow>
      </MDBContainer>
    );
}

export default ConsultationProcess;