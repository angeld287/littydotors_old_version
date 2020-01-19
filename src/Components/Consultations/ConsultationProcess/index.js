import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBInput } from "mdbreact";

import useConsultationProcess from './useConsultationProcess';

const ConsultationProcess = () => {
  const { error, loading, swapFormActive, handleNextPrevClick, handleSubmission, calculateAutofocus,
          formActivePanelChanged, setFormActivePanelChanged, formActivePanel, setFormActivePanel } = useConsultationProcess();

  return (
    <MDBContainer>
        <h2 className="text-center font-weight-bold pt-4 pb-5 mb-2"><strong>Proceso de Consulta Medica</strong></h2>
        <MDBStepper icon>
          <MDBStep far icon="folder-open" stepName="Antecedentes" onClick={swapFormActive(1)}></MDBStep>
          <MDBStep icon="clipboard-list" stepName="Historia Clinica" onClick={swapFormActive(2)}></MDBStep>
          <MDBStep icon="stethoscope" stepName="Examen Medico" onClick={swapFormActive(3)}></MDBStep>
          <MDBStep icon="prescription-bottle-alt" stepName="Prescripciones y Estudios" onClick={swapFormActive(4)}></MDBStep>
        </MDBStepper>

        <form role="form" action="" method="post">
          <MDBRow>
            {formActivePanel === 1 &&
            (<MDBCol md="12">
              <h3 className="font-weight-bold pl-0 my-4">
                <strong>Antecedentes</strong>
              </h3>
              <MDBInput label="Email" className="mt-4" autoFocus={calculateAutofocus} />
              <MDBInput label="Username" className="mt-4" />
              <MDBInput label="Password" className="mt-4" />
              <MDBInput label="Repeat Password" className="mt-4" />
              <br/>
              <MDBBtn color="mdb-color" rounded className="float-right" onClick={handleNextPrevClick(2)}>next</MDBBtn>
            </MDBCol>)}

            {formActivePanel == 2 &&
            (<MDBCol md="12">
              <h3 className="font-weight-bold pl-0 my-4"><strong>Historia Clinica</strong></h3>
              <MDBInput label="First Name" className="mt-3" autoFocus={calculateAutofocus} />
              <MDBInput label="Second Name" className="mt-3" />
              <MDBInput label="I want to receive newsletter" type="checkbox" id="checkbox2" />
              <MDBInput label="Surname" className="mt-3" />
              <MDBInput label="Address" type="textarea" rows="2" />

              <MDBInput label="I want to receive newsletter" type="checkbox" id="checkbox2" />

              <MDBInput label="I want to receive newsletter" type="checkbox" id="checkbox2" />
              <MDBInput label="I want to receive newsletter" type="checkbox" id="checkbox2" />
              <br/>
              <MDBBtn color="mdb-color" rounded className="float-left" onClick={handleNextPrevClick(1)}>previous</MDBBtn>
              <MDBBtn color="mdb-color" rounded className="float-right" onClick={handleNextPrevClick(3)}>next</MDBBtn>
            </MDBCol>)}

            {formActivePanel == 3 &&
            (<MDBCol md="12">
              <h3 className="font-weight-bold pl-0 my-4"><strong>Examen Medico</strong></h3>
              <MDBInput label="First Name" className="mt-3" autoFocus={calculateAutofocus} />
              <MDBInput label="Second Name" className="mt-3" />
              <MDBInput label="Surname" className="mt-3" />
              <MDBInput label="I agreee to the terms and conditions" type="checkbox" id="checkbox" autoFocus={calculateAutofocus} />
              <MDBInput label="I want to receive newsletter" type="checkbox" id="checkbox2" />
              <br/>
              <MDBBtn color="mdb-color" rounded className="float-left" onClick={handleNextPrevClick(2)}>previous</MDBBtn>
              <MDBBtn color="mdb-color" rounded className="float-right" onClick={handleNextPrevClick(4)}>next</MDBBtn>
            </MDBCol>)}

            {formActivePanel == 4 &&
            (<MDBCol md="12">
              <h3 className="font-weight-bold pl-0 my-4"><strong>Prescripciones y Estudios</strong></h3>
              <MDBInput label="I agreee to the terms and conditions" type="checkbox" id="checkbox" autoFocus={calculateAutofocus} />
              <MDBInput label="I want to receive newsletter" type="checkbox" id="checkbox2" />
              <MDBInput label="Second Name" className="mt-3" />
              <MDBInput label="Surname" className="mt-3" />
              <br/>
              <MDBBtn color="mdb-color" rounded className="float-left" onClick={handleNextPrevClick(3)}>previous</MDBBtn>
              <MDBBtn color="success" rounded className="float-right" onClick={handleSubmission}>submit</MDBBtn>
            </MDBCol>)}
          </MDBRow>
        </form>
      </MDBContainer>
    );
}

export default ConsultationProcess;