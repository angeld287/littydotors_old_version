import React, { useState, Fragment } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBInput, MDBIcon, MDBSpinner, MDBBox,
         MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBDatePicker, MDBDataTable,
         MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";

import Select from 'react-select'

const NewMedicalPrescription = ({
  toggle: toggle,
  api: api,
  createMedicalPrescription: createMedicalPrescription
}) => {

  const [ prescriptionMedication, setPrescriptionMedication ] = useState(false);
  const [ frequency, setFrequency ] = useState(false);
  const [ duration, setDuration ] = useState(false);
  const [ comment, setComment ] = useState(false);

  const medications = [];
  api.prescriptionmedications.forEach(element => {
    var medication = {value: element.id, label: element.name};
    medications.push(medication);
  });

  const options = [
      { value: 'chocolate', label: 'Diario' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ];

  return (
    <MDBContainer>
        <MDBModalHeader toggle={toggle}>Receta Medica</MDBModalHeader>
        <MDBModalBody>
          <label htmlFor="prescriptionmedication" className="mt-2" >Medicamento</label>
          <Select id="prescriptionmedication" options={medications} onChange={ (v) => {setPrescriptionMedication(v)}} />
          <label htmlFor="frequency" className="mt-2" >Frecuencia</label>
          <Select id="frequency" options={options} onChange={ (v) => {setFrequency(v.value)}}/>
          <MDBInput label="Duracion" onChange={ (e) => {setDuration(e.target.value)}}/>
          <div className="form-group">
            <label htmlFor="comment">Comentario</label>
            <textarea name="comment" className="form-control" id="comment" rows="3" onChange={ (e) => {setComment(e.target.value)}}></textarea>
          </div>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={toggle}>Close</MDBBtn>
          <MDBBtn color="primary" onClick={(e) => {
              e.preventDefault();
              createMedicalPrescription({
                  date: new Date(),
                  frequency: frequency,
                  duration: duration,
                  comment: comment,
                  doctor: "String",
                  secretary: "String",
                  patient: "String",
                  medicalPrescriptionMedicationsId: prescriptionMedication.value,
                  medicationName: prescriptionMedication.label,
                  medicalPrescriptionPostconsultactId: "sss"
              });
              toggle();
          }}>Save changes</MDBBtn>
        </MDBModalFooter>
    </MDBContainer>
  );
}

export default NewMedicalPrescription;